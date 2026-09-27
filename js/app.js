/**
 * Kanji Flashcards Single Page Application (SPA)
 * Controller & Interaction Logic
 * 
 * Features:
 * - 100% Vanilla JavaScript (ES6+ Modules)
 * - Strict Japanese UTF-8 & Myanmar Unicode Typography support
 * - 3D Card Flip & Navigation
 * - Web Speech API (Native Japanese Pronunciation Engine)
 * - LocalStorage progress persistence (Mastered vs Need Review)
 * - Keyboard Shortcuts & Responsive UI
 */

import { KANJI_DATA, getKanjiByLevel, searchKanji } from './data.js';

// ============================================================================
// 1. Application State & Storage Keys
// ============================================================================
const STORAGE_KEYS = {
  THEME: 'kanji_app_theme',
  AUDIO_SPEED: 'kanji_app_audio_speed',
  PROGRESS: 'kanji_app_progress' // Stores { [id]: { status: 'review'|'mastered', bookmarked: bool } }
};

const state = {
  deck: [...KANJI_DATA],
  originalDeckOrder: [...KANJI_DATA],
  currentIndex: 0,
  isFlipped: false,
  isShuffled: false,
  currentLevel: 'ALL',
  currentStatusFilter: 'ALL',
  searchQuery: '',
  audioSpeed: 1.0,
  theme: 'dark',
  progress: {} // { [id]: { status: 'review' | 'mastered', bookmarked: boolean } }
};

// Myanmar Numerals Translation Map
const MYANMAR_DIGITS = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'];

/**
 * Convert standard Arabic numerals (123) to Myanmar Unicode digits (၁၂၃)
 * @param {number|string} number 
 * @returns {string} Myanmar numerals string
 */
function toMyanmarNumber(number) {
  return String(number).replace(/\d/g, digit => MYANMAR_DIGITS[parseInt(digit, 10)]);
}

// ============================================================================
// 2. DOM Elements Cache
// ============================================================================
const DOM = {
  // Theme & Settings
  htmlRoot: document.documentElement,
  btnThemeToggle: document.getElementById('btn-theme-toggle'),
  btnAudioSpeed: document.getElementById('btn-audio-speed'),
  audioSpeedLabel: document.getElementById('audio-speed-label'),
  btnShortcutsToggle: document.getElementById('btn-shortcuts-toggle'),
  shortcutsDialog: document.getElementById('shortcuts-dialog'),
  btnCloseDialog: document.getElementById('btn-close-dialog'),

  // Search & Filter
  searchInput: document.getElementById('search-input'),
  btnClearSearch: document.getElementById('btn-clear-search'),
  levelPills: document.querySelectorAll('.filter-pills:not(.status-pills) .pill-btn'),
  statusPills: document.querySelectorAll('.status-pills .pill-btn'),

  // Progress & Stats
  cardCounter: document.getElementById('card-counter'),
  progressFill: document.getElementById('progress-fill'),
  statMasteredCount: document.getElementById('stat-mastered-count'),
  statReviewCount: document.getElementById('stat-review-count'),
  badgeShuffleIndicator: document.getElementById('badge-shuffle-indicator'),

  // Flashcard Elements
  cardStage: document.getElementById('card-stage'),
  flashcard: document.getElementById('flashcard'),
  
  // Front Face
  frontJlptBadge: document.getElementById('front-jlpt-badge'),
  frontStrokeBadge: document.getElementById('front-stroke-badge'),
  frontKanji: document.getElementById('front-kanji'),
  frontRadicalValue: document.getElementById('front-radical-value'),
  frontOnPreview: document.getElementById('front-on-preview'),
  frontKunPreview: document.getElementById('front-kun-preview'),
  btnSpeakFront: document.getElementById('btn-speak-front'),
  btnBookmark: document.getElementById('btn-bookmark'),

  // Back Face
  backKanjiMini: document.getElementById('back-kanji-mini'),
  backJlptBadge: document.getElementById('back-jlpt-badge'),
  btnSpeakBack: document.getElementById('btn-speak-back'),
  backMyanmarMeaning: document.getElementById('back-myanmar-meaning'),
  backMyanmarDetail: document.getElementById('back-myanmar-detail'),
  backOnyomiList: document.getElementById('back-onyomi-list'),
  backKunyomiList: document.getElementById('back-kunyomi-list'),
  backMnemonicText: document.getElementById('back-mnemonic-text'),
  backVocabList: document.getElementById('back-vocab-list'),
  backExamplesList: document.getElementById('back-examples-list'),

  // Navigation & Actions
  btnPrev: document.getElementById('btn-prev'),
  btnFlip: document.getElementById('btn-flip'),
  btnFlipLabel: document.getElementById('btn-flip-label'),
  btnNext: document.getElementById('btn-next'),
  btnShuffle: document.getElementById('btn-shuffle'),
  btnMarkReview: document.getElementById('btn-mark-review'),
  btnMarkMastered: document.getElementById('btn-mark-mastered'),

  // Toast Container
  toastContainer: document.getElementById('toast-container')
};

// ============================================================================
// 3. Web Speech API (Japanese Pronunciation Engine)
// ============================================================================
let japaneseVoice = null;

/**
 * Initialize Speech Synthesis voices and find optimal ja-JP voice
 */
function initSpeechSynthesis() {
  if (!('speechSynthesis' in window)) {
    console.warn('Web Speech API is not supported in this browser.');
    return;
  }

  function pickVoice() {
    const voices = window.speechSynthesis.getVoices();
    japaneseVoice = voices.find(v => v.lang === 'ja-JP' || v.lang === 'ja_JP') ||
                    voices.find(v => v.lang.startsWith('ja')) || null;
  }

  pickVoice();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = pickVoice;
  }
}

/**
 * Speak Japanese text using native TTS
 * @param {string} text - Japanese text to pronounce
 * @param {number} rate - Speaking speed (0.75, 1.0)
 */
function speakJapanese(text, rate = state.audioSpeed) {
  if (!('speechSynthesis' in window)) {
    showToast('ဤဘရောက်ဇာတွင် အသံစနစ် မထောက်ပံ့သေးပါ');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const cleanText = text.replace(/<[^>]*>/g, '').trim();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'ja-JP';
  utterance.rate = rate;
  utterance.pitch = 1.0;

  if (japaneseVoice) {
    utterance.voice = japaneseVoice;
  }

  window.speechSynthesis.speak(utterance);
}

// ============================================================================
// 4. Persistence & LocalStorage Manager
// ============================================================================
function loadPersistedState() {
  // Load Theme
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
  if (savedTheme === 'light' || savedTheme === 'dark') {
    state.theme = savedTheme;
  } else {
    // Check OS preference
    state.theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  applyTheme(state.theme);

  // Load Audio Speed
  const savedSpeed = parseFloat(localStorage.getItem(STORAGE_KEYS.AUDIO_SPEED));
  if (savedSpeed === 0.75 || savedSpeed === 1.0) {
    state.audioSpeed = savedSpeed;
  }
  updateAudioSpeedLabel();

  // Load User Progress
  try {
    const savedProgress = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (savedProgress) {
      state.progress = JSON.parse(savedProgress);
    }
  } catch (e) {
    console.error('Failed to parse saved progress', e);
    state.progress = {};
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(state.progress));
  } catch (e) {
    console.error('Failed to save progress to localStorage', e);
  }
}

function applyTheme(theme) {
  state.theme = theme;
  DOM.htmlRoot.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
}

function toggleTheme() {
  const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  showToast(nextTheme === 'dark' ? '🌙 အမှောင်ပုံစံသို့ ပြောင်းလဲပြီးပါပြီ' : '☀️ အလင်းပုံစံသို့ ပြောင်းလဲပြီးပါပြီ');
}

function toggleAudioSpeed() {
  state.audioSpeed = state.audioSpeed === 1.0 ? 0.75 : 1.0;
  localStorage.setItem(STORAGE_KEYS.AUDIO_SPEED, state.audioSpeed);
  updateAudioSpeedLabel();
  showToast(`🔊 အသံနှုန်းထား: ${state.audioSpeed}x (${state.audioSpeed === 0.75 ? 'အနှေး' : 'ပုံမှန်'})`);
}

function updateAudioSpeedLabel() {
  if (DOM.audioSpeedLabel) {
    DOM.audioSpeedLabel.textContent = `${state.audioSpeed}x`;
  }
}

// ============================================================================
// 5. Deck Filtering & Search Logic
// ============================================================================
function updateDeck() {
  // 1. Start from base search & level filter
  let filtered = searchKanji(state.searchQuery, state.currentLevel);

  // 2. Filter by Study Status if active
  if (state.currentStatusFilter !== 'ALL') {
    filtered = filtered.filter(item => {
      const cardProgress = state.progress[item.id];
      const isMastered = cardProgress && cardProgress.status === 'mastered';
      if (state.currentStatusFilter === 'MASTERED') {
        return isMastered;
      }
      if (state.currentStatusFilter === 'REVIEW') {
        return !isMastered;
      }
      return true;
    });
  }

  // 3. Retain shuffle if active
  if (state.isShuffled) {
    filtered = shuffleArray([...filtered]);
  }

  state.deck = filtered;
  state.currentIndex = 0;
  state.isFlipped = false;
  
  renderCard();
  updateStats();
}

/**
 * Modern Fisher-Yates shuffle algorithm
 */
function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Reorders deck for enhanced cognitive memory retention.
 * Interleaves items to break sequential list bias.
 */
function applyDeckOrder(cards, mode = 'SMART') {
  if (!Array.isArray(cards) || cards.length <= 1) return [...(cards || [])];
  cards.forEach((c, i) => { if (typeof c.pdfOrder !== 'number') c.pdfOrder = i + 1; });
  const copy = [...cards];
  if (mode === 'PDF_ORDER') return copy.sort((a, b) => (a.pdfOrder || 0) - (b.pdfOrder || 0));
  if (mode === 'SHUFFLE') return shuffleArray(copy);
  
  // Smart Memory Order (Stride dispersion)
  const n = copy.length;
  const sorted = [...copy].sort((a, b) => (a.pdfOrder || 0) - (b.pdfOrder || 0));
  const gcd = (a, b) => (!b ? a : gcd(b, a % b));
  let stride = Math.max(2, Math.floor(n * 0.382));
  while (stride < n && gcd(stride, n) !== 1) stride++;
  if (stride >= n) stride = n > 3 ? 3 : 2;
  const dispersed = [];
  const visited = new Set();
  for (let s = 0; s < n; s++) {
    let candidate = (s * stride) % n;
    while (visited.has(candidate)) candidate = (candidate + 1) % n;
    visited.add(candidate);
    dispersed.push(sorted[candidate]);
  }
  return dispersed;
}

function toggleShuffle() {
  state.isShuffled = !state.isShuffled;
  if (state.isShuffled) {
    state.deck = shuffleArray([...state.deck]);
    DOM.badgeShuffleIndicator.hidden = false;
    DOM.btnShuffle.style.borderColor = 'var(--color-primary)';
    DOM.btnShuffle.style.color = 'var(--color-primary)';
    showToast('🔀 ကတ်ပြားများကို ရောမွှေလိုက်ပါပြီ');
  } else {
    // Reset to current level/search natural order
    DOM.badgeShuffleIndicator.hidden = true;
    DOM.btnShuffle.style.borderColor = '';
    DOM.btnShuffle.style.color = '';
    updateDeck();
    showToast('📋 ကတ်ပြားများကို မူလအတိုင်း ပြန်စီစဉ်လိုက်ပါပြီ');
  }
  state.currentIndex = 0;
  state.isFlipped = false;
  renderCard();
}

// ============================================================================
// 6. Flashcard Rendering & 3D Flip Engine
// ============================================================================
function renderCard() {
  const currentCard = state.deck[state.currentIndex];

  // If no cards match current filter/search
  if (!currentCard) {
    renderEmptyState();
    return;
  }

  // Ensure card stage is visible and card is un-flipped if needed
  DOM.flashcard.style.display = 'block';
  setFlipState(state.isFlipped);

  // ---------------- Render Front Face ----------------
  DOM.frontJlptBadge.textContent = `JLPT ${currentCard.jlpt}`;
  DOM.frontStrokeBadge.textContent = `${toMyanmarNumber(currentCard.strokeCount)} ချက်ဆွဲ (${currentCard.strokeCount} Strokes)`;
  DOM.frontKanji.textContent = currentCard.kanji;
  DOM.frontRadicalValue.textContent = currentCard.radicals;

  // Onyomi & Kunyomi preview on front
  const onPreviewStr = currentCard.onyomi.map(o => o.kana).join(', ') || '—';
  const kunPreviewStr = currentCard.kunyomi.map(k => k.kana).join(', ') || '—';
  DOM.frontOnPreview.textContent = onPreviewStr;
  DOM.frontKunPreview.textContent = kunPreviewStr;

  // Bookmark button state
  const isBookmarked = state.progress[currentCard.id]?.bookmarked;
  DOM.btnBookmark.classList.toggle('bookmarked', !!isBookmarked);

  // ---------------- Render Back Face ----------------
  DOM.backKanjiMini.textContent = currentCard.kanji;
  DOM.backJlptBadge.textContent = `JLPT ${currentCard.jlpt}`;
  DOM.backMyanmarMeaning.textContent = currentCard.myanmarMeaning;
  DOM.backMyanmarDetail.textContent = currentCard.myanmarDetail;

  // Onyomi List
  if (currentCard.onyomi && currentCard.onyomi.length > 0) {
    DOM.backOnyomiList.innerHTML = currentCard.onyomi.map(o => `
      <span class="reading-item">
        <strong class="reading-kana">${o.kana}</strong>
        <span class="reading-romaji">(${o.romaji})</span>
      </span>
    `).join('');
  } else {
    DOM.backOnyomiList.innerHTML = `<span class="reading-romaji">—</span>`;
  }

  // Kunyomi List
  if (currentCard.kunyomi && currentCard.kunyomi.length > 0) {
    DOM.backKunyomiList.innerHTML = currentCard.kunyomi.map(k => `
      <span class="reading-item">
        <strong class="reading-kana">${k.kana}</strong>
        <span class="reading-romaji">(${k.romaji})</span>
      </span>
    `).join('');
  } else {
    DOM.backKunyomiList.innerHTML = `<span class="reading-romaji">—</span>`;
  }

  // Mnemonic Memory Tip
  if (currentCard.mnemonic) {
    DOM.backMnemonicText.textContent = currentCard.mnemonic;
  }

  // Vocabulary List
  DOM.backVocabList.innerHTML = currentCard.vocabulary.map(v => `
    <li class="vocab-item" onclick="window.speakVocab('${v.reading}')">
      <div class="vocab-jp">
        <span class="vocab-word japanese-text">${v.word}</span>
        <span class="vocab-reading japanese-text">${v.reading} (${v.romaji})</span>
      </div>
      <span class="vocab-myanmar myanmar-text">${v.myanmar}</span>
    </li>
  `).join('');

  // Example Sentences List
  DOM.backExamplesList.innerHTML = currentCard.examples.map(ex => `
    <div class="example-card">
      <div class="example-jp-row">
        <span class="example-ruby-text japanese-text">${ex.ruby}</span>
        <button class="btn-speak-sentence" title="ဝါကျ အသံထွက် နားဆင်ရန်" onclick="window.speakVocab('${ex.japanese}')" aria-label="Pronounce Sentence">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </button>
      </div>
      <span class="example-romaji">${ex.romaji}</span>
      <p class="example-myanmar myanmar-text">${ex.myanmar}</p>
    </div>
  `).join('');

  // Update Mastery Button States for active card
  const cardStatus = state.progress[currentCard.id]?.status;
  DOM.btnMarkMastered.classList.toggle('is-active', cardStatus === 'mastered');
  DOM.btnMarkReview.classList.toggle('is-active', cardStatus === 'review');

  updateNavigationButtons();
  updateProgressBar();
}

/**
 * Display empty state when search/filter returns zero cards
 */
function renderEmptyState() {
  DOM.frontKanji.textContent = '無';
  DOM.frontJlptBadge.textContent = 'ရှာမတွေ့ပါ';
  DOM.frontStrokeBadge.textContent = 'ဝ ရလဒ်';
  DOM.frontRadicalValue.textContent = 'ကိုက်ညီသော ကန်ဂျီ မရှိပါ';
  DOM.frontOnPreview.textContent = '—';
  DOM.frontKunPreview.textContent = '—';
  DOM.cardCounter.textContent = 'ကတ် ၀ / ၀';
  DOM.progressFill.style.width = '0%';
  DOM.btnPrev.disabled = true;
  DOM.btnNext.disabled = true;
  DOM.btnFlip.disabled = true;
}

/**
 * Handle 3D Flip state of card
 */
function setFlipState(flipped) {
  state.isFlipped = flipped;
  DOM.flashcard.classList.toggle('is-flipped', flipped);
  DOM.btnFlipLabel.textContent = flipped ? 'ရှေ့သို့ပြန်လှန်ပါ' : 'ကတ်လှန်ပါ';
}

function toggleFlip() {
  if (!state.deck.length) return;
  setFlipState(!state.isFlipped);
}

// Navigation Handlers
function nextCard() {
  if (state.deck.length <= 1) return;
  if (state.currentIndex < state.deck.length - 1) {
    state.currentIndex++;
  } else {
    // Loop back to start
    state.currentIndex = 0;
    showToast('စတင်နေရာသို့ ပြန်လည်ရောက်ရှိပါပြီ');
  }
  state.isFlipped = false;
  renderCard();
}

function prevCard() {
  if (state.deck.length <= 1) return;
  if (state.currentIndex > 0) {
    state.currentIndex--;
  } else {
    // Loop to end
    state.currentIndex = state.deck.length - 1;
  }
  state.isFlipped = false;
  renderCard();
}

function updateNavigationButtons() {
  const hasCards = state.deck.length > 0;
  DOM.btnPrev.disabled = !hasCards;
  DOM.btnNext.disabled = !hasCards;
  DOM.btnFlip.disabled = !hasCards;
}

function updateProgressBar() {
  const total = state.deck.length;
  const current = total > 0 ? state.currentIndex + 1 : 0;
  
  DOM.cardCounter.textContent = `ကတ် ${toMyanmarNumber(current)} / ${toMyanmarNumber(total)}`;
  const percentage = total > 0 ? (current / total) * 100 : 0;
  DOM.progressFill.style.width = `${percentage}%`;
}

// ============================================================================
// 7. Study Mastery & Bookmark Tracking
// ============================================================================
function updateMastery(newStatus) {
  const currentCard = state.deck[state.currentIndex];
  if (!currentCard) return;

  const cardId = currentCard.id;
  const prevData = state.progress[cardId] || {};

  state.progress[cardId] = {
    ...prevData,
    status: newStatus,
    lastReviewed: Date.now()
  };

  saveProgress();
  updateStats();

  // Update button active appearance
  DOM.btnMarkMastered.classList.toggle('is-active', newStatus === 'mastered');
  DOM.btnMarkReview.classList.toggle('is-active', newStatus === 'review');

  if (newStatus === 'mastered') {
    showToast(`✅ "${currentCard.kanji}" ကို 'ကျက်ပြီးပါပြီ' အဖြစ် မှတ်သားလိုက်ပါပြီ`);
  } else {
    showToast(`⏳ "${currentCard.kanji}" ကို 'ပြန်လေ့လာရန်' ထဲသို့ ထည့်သွင်းလိုက်ပါပြီ`);
  }

  // If currently filtering by status, refresh the deck view
  if (state.currentStatusFilter !== 'ALL') {
    updateDeck();
  }
}

function toggleBookmark() {
  const currentCard = state.deck[state.currentIndex];
  if (!currentCard) return;

  const cardId = currentCard.id;
  const prevData = state.progress[cardId] || {};
  const isBookmarked = !prevData.bookmarked;

  state.progress[cardId] = {
    ...prevData,
    bookmarked: isBookmarked
  };

  saveProgress();
  DOM.btnBookmark.classList.toggle('bookmarked', isBookmarked);

  showToast(isBookmarked ? `⭐ "${currentCard.kanji}" ကို မှတ်သားထားလိုက်ပါပြီ` : `စာရင်းမှ ဖယ်ရှားလိုက်ပါပြီ`);
}

function updateStats() {
  let masteredCount = 0;
  const total = KANJI_DATA.length;

  KANJI_DATA.forEach(item => {
    if (state.progress[item.id]?.status === 'mastered') {
      masteredCount++;
    }
  });

  const reviewCount = total - masteredCount;

  DOM.statMasteredCount.textContent = toMyanmarNumber(masteredCount);
  DOM.statReviewCount.textContent = toMyanmarNumber(reviewCount);
}

// ============================================================================
// 8. Toast Notification Utility
// ============================================================================
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2800);
}

// ============================================================================
// 9. Keyboard Shortcuts & Event Listeners
// ============================================================================
function setupEventListeners() {
  // Card Flip Click & Stage interaction
  DOM.cardStage.addEventListener('click', (e) => {
    // Avoid flipping when clicking action buttons or links inside the card
    if (e.target.closest('button') || e.target.closest('.vocab-item')) {
      return;
    }
    toggleFlip();
  });

  // Flip Button in Toolbar
  DOM.btnFlip.addEventListener('click', toggleFlip);

  // Navigation Prev / Next
  DOM.btnPrev.addEventListener('click', prevCard);
  DOM.btnNext.addEventListener('click', nextCard);

  // Shuffle Deck
  DOM.btnShuffle.addEventListener('click', toggleShuffle);

  // Pronounce Current Kanji (Front & Back)
  DOM.btnSpeakFront.addEventListener('click', (e) => {
    e.stopPropagation();
    const current = state.deck[state.currentIndex];
    if (current) speakJapanese(current.kanji);
  });

  DOM.btnSpeakBack.addEventListener('click', (e) => {
    e.stopPropagation();
    const current = state.deck[state.currentIndex];
    if (current) {
      // Speak kanji + readings
      const readings = current.onyomi.map(o => o.kana).concat(current.kunyomi.map(k => k.kana)).join('、');
      speakJapanese(`${current.kanji}。${readings}`);
    }
  });

  // Bookmark Button
  DOM.btnBookmark.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleBookmark();
  });

  // Mastery Buttons
  DOM.btnMarkReview.addEventListener('click', () => updateMastery('review'));
  DOM.btnMarkMastered.addEventListener('click', () => updateMastery('mastered'));

  // Theme Toggle
  DOM.btnThemeToggle.addEventListener('click', toggleTheme);

  // Audio Speed Toggle
  DOM.btnAudioSpeed.addEventListener('click', toggleAudioSpeed);

  // Shortcuts Dialog
  DOM.btnShortcutsToggle.addEventListener('click', () => {
    DOM.shortcutsDialog.showModal();
  });
  DOM.btnCloseDialog.addEventListener('click', () => {
    DOM.shortcutsDialog.close();
  });
  DOM.shortcutsDialog.addEventListener('click', (e) => {
    if (e.target === DOM.shortcutsDialog) {
      DOM.shortcutsDialog.close();
    }
  });

  // Search Input
  DOM.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    DOM.btnClearSearch.hidden = !state.searchQuery;
    updateDeck();
  });

  DOM.btnClearSearch.addEventListener('click', () => {
    state.searchQuery = '';
    DOM.searchInput.value = '';
    DOM.btnClearSearch.hidden = true;
    updateDeck();
    DOM.searchInput.focus();
  });

  // JLPT Level Filter Pills
  DOM.levelPills.forEach(pill => {
    pill.addEventListener('click', () => {
      DOM.levelPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.currentLevel = pill.getAttribute('data-level');
      updateDeck();
    });
  });

  // Status Filter Pills
  DOM.statusPills.forEach(pill => {
    pill.addEventListener('click', () => {
      DOM.statusPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.currentStatusFilter = pill.getAttribute('data-status');
      updateDeck();
    });
  });

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    // Ignore keyboard shortcuts when user is typing in search input
    if (document.activeElement === DOM.searchInput) {
      if (e.key === 'Escape') {
        DOM.searchInput.blur();
      }
      return;
    }

    // Modal is open
    if (DOM.shortcutsDialog.open) {
      if (e.key === 'Escape') DOM.shortcutsDialog.close();
      return;
    }

    switch (e.code) {
      case 'Space':
      case 'KeyF':
        e.preventDefault();
        toggleFlip();
        break;

      case 'ArrowRight':
      case 'KeyJ':
        e.preventDefault();
        nextCard();
        break;

      case 'ArrowLeft':
      case 'KeyK':
        e.preventDefault();
        prevCard();
        break;

      case 'KeyA':
        e.preventDefault();
        {
          const current = state.deck[state.currentIndex];
          if (current) speakJapanese(current.kanji);
        }
        break;

      case 'KeyS':
        e.preventDefault();
        toggleShuffle();
        break;

      case 'Digit1':
        e.preventDefault();
        updateMastery('review');
        break;

      case 'Digit2':
        e.preventDefault();
        updateMastery('mastered');
        break;

      case 'KeyB':
        e.preventDefault();
        toggleBookmark();
        break;

      case 'Slash':
        e.preventDefault();
        DOM.searchInput.focus();
        break;
    }
  });

  // Global helper for inline vocab pronunciation in DOM
  window.speakVocab = (japaneseWord) => {
    speakJapanese(japaneseWord);
  };
}

// ============================================================================
// 10. Application Initialization
// ============================================================================
function init() {
  initSpeechSynthesis();
  loadPersistedState();
  setupEventListeners();
  updateDeck();
  console.log('Kanji Flashcards SPA initialized with Japanese UTF-8 & Myanmar Unicode support.');
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
