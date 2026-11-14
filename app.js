// Quản trị học 360° - Application Interactivity & State Engine
(function() {
  // --- Audio Synthesis via Web Audio API ---
  const AudioEngine = {
    ctx: null,
    enabled: true,
    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
    },
    playChime() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.12);
        gain.gain.setValueAtTime(0.15, now + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.6);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 0.6);
      });
    },
    playFlip() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.08);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    },
    playCorrect() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [587.33, 880].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.09);
        gain.gain.setValueAtTime(0.12, now + i * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.09 + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.09);
        osc.stop(now + i * 0.09 + 0.3);
      });
    }
  };

  // --- App State ---
  const State = {
    mode: 'mindmap', // 'mindmap', 'flashcard', 'quiz'
    currentStageIndex: 0,
    stageTimeRemaining: 45 * 60,
    totalTimeRemaining: 180 * 60,
    isTimerRunning: false,
    timerInterval: null,
    chapterFilter: 0, // 0 = all
    statusFilter: 'all', // 'all', 'unmastered', 'mastered', 'review'
    searchQuery: '',
    mastered: new Set(),
    review: new Set(),
    notes: {},
    fcList: [],
    fcIndex: 0,
    fcFlipped: false,
    quizList: [],
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: false,
    quizHistory: []
  };

  // --- LocalStorage persistence ---
  function loadStorage() {
    try {
      const savedMastered = localStorage.getItem('qth_mastered');
      if (savedMastered) State.mastered = new Set(JSON.parse(savedMastered));
      const savedReview = localStorage.getItem('qth_review');
      if (savedReview) State.review = new Set(JSON.parse(savedReview));
      const savedNotes = localStorage.getItem('qth_notes');
      if (savedNotes) State.notes = JSON.parse(savedNotes);
      const savedTheme = localStorage.getItem('qth_theme');
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
    } catch(e) {
      console.warn("Storage load error:", e);
    }
  }

  function saveStorage() {
    try {
      localStorage.setItem('qth_mastered', JSON.stringify([...State.mastered]));
      localStorage.setItem('qth_review', JSON.stringify([...State.review]));
      localStorage.setItem('qth_notes', JSON.stringify(State.notes));
    } catch(e) {
      console.warn("Storage save error:", e);
    }
  }

  // --- Timer Functions ---
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  function updateTimerUI() {
    const displayEl = document.getElementById('stage-timer-display');
    const totalDisplayEl = document.getElementById('total-timer-display');
    const stageTitleEl = document.getElementById('current-stage-title');
    const currentStage = window.APP_STAGES[State.currentStageIndex];

    if (displayEl) displayEl.textContent = formatTime(State.stageTimeRemaining);
    if (totalDisplayEl) totalDisplayEl.textContent = `Tổng: ${formatTime(State.totalTimeRemaining)}`;
    if (stageTitleEl && currentStage) stageTitleEl.textContent = currentStage.title;

    // Update active stage button
    document.querySelectorAll('.stage-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === State.currentStageIndex);
    });
  }

  function toggleTimer() {
    const btn = document.getElementById('timer-toggle-btn');
    if (State.isTimerRunning) {
      clearInterval(State.timerInterval);
      State.isTimerRunning = false;
      if (btn) btn.innerHTML = `<span>▶ Tiếp tục</span>`;
    } else {
      AudioEngine.init();
      State.isTimerRunning = true;
      if (btn) btn.innerHTML = `<span>⏸ Tạm dừng</span>`;
      State.timerInterval = setInterval(() => {
        if (State.stageTimeRemaining > 0) {
          State.stageTimeRemaining--;
        } else {
          AudioEngine.playChime();
          alert(`⏰ Hết giờ ${window.APP_STAGES[State.currentStageIndex].name}! Chuẩn bị bước vào chặng tiếp theo.`);
          nextStage();
        }

        if (State.totalTimeRemaining > 0) {
          State.totalTimeRemaining--;
        } else {
          clearInterval(State.timerInterval);
          State.isTimerRunning = false;
          AudioEngine.playChime();
          alert("🎉 Chúc mừng bạn đã hoàn thành trọn vẹn lộ trình 180 phút ôn tập cấp tốc Quản trị học!");
        }
        updateTimerUI();
      }, 1000);
    }
  }

  function nextStage() {
    if (State.currentStageIndex < window.APP_STAGES.length - 1) {
      setStage(State.currentStageIndex + 1);
    }
  }

  function setStage(index) {
    State.currentStageIndex = index;
    const stage = window.APP_STAGES[index];
    State.stageTimeRemaining = stage.duration;
    updateTimerUI();
    // Auto filter to stage's chapters
    if (index === 0) setChapterFilter(1);
    else if (index === 1) setChapterFilter(3);
    else if (index === 2) setChapterFilter(5);
    else if (index === 3) {
      setMode('flashcard');
      setChapterFilter(0);
    }
  }

  function resetStageTimer() {
    const stage = window.APP_STAGES[State.currentStageIndex];
    State.stageTimeRemaining = stage.duration;
    updateTimerUI();
  }

  // --- Filtering & Stats ---
  function getFilteredQuestions() {
    const all = window.APP_QUESTIONS || [];
    return all.filter(q => {
      // Chapter filter
      if (State.chapterFilter !== 0 && q.chapter !== State.chapterFilter) {
        return false;
      }
      // Status filter
      if (State.statusFilter === 'mastered' && !State.mastered.has(q.id)) {
        return false;
      }
      if (State.statusFilter === 'review' && !State.review.has(q.id)) {
        return false;
      }
      if (State.statusFilter === 'unmastered' && State.mastered.has(q.id)) {
        return false;
      }
      // Search query
      if (State.searchQuery.trim()) {
        const query = State.searchQuery.toLowerCase();
        const inTitle = q.title.toLowerCase().includes(query);
        const inQuestion = q.question.toLowerCase().includes(query);
        const inKeywords = q.keywords.some(k => k.toLowerCase().includes(query));
        const inSummary = q.summary.some(s => s.toLowerCase().includes(query));
        const inExp = q.explanation.toLowerCase().includes(query);
        const inEx = q.example ? q.example.toLowerCase().includes(query) : false;
        if (!inTitle && !inQuestion && !inKeywords && !inSummary && !inExp && !inEx) {
          return false;
        }
      }
      return true;
    });
  }

  function updateProgressStats() {
    const total = (window.APP_QUESTIONS || []).length;
    const masteredCount = State.mastered.size;
    const reviewCount = State.review.size;
    const unmasteredCount = total - masteredCount;
    const percent = total > 0 ? Math.round((masteredCount / total) * 100) : 0;

    const fillEl = document.getElementById('progress-bar-fill');
    if (fillEl) fillEl.style.width = `${percent}%`;

    const labelEl = document.getElementById('progress-percent-label');
    if (labelEl) labelEl.textContent = `${percent}% (${masteredCount}/${total})`;

    const mChip = document.getElementById('stat-chip-mastered');
    if (mChip) mChip.innerHTML = `✅ Đã thuộc: <strong>${masteredCount}</strong>`;

    const rChip = document.getElementById('stat-chip-review');
    if (rChip) rChip.innerHTML = `⭐ Cần ôn: <strong>${reviewCount}</strong>`;

    // Update chapter badges in sidebar
    for (let c = 1; c <= 6; c++) {
      const cQuestions = (window.APP_QUESTIONS || []).filter(q => q.chapter === c);
      const cMastered = cQuestions.filter(q => State.mastered.has(q.id)).length;
      const bEl = document.getElementById(`chapter-badge-${c}`);
      if (bEl) bEl.textContent = `${cMastered}/${cQuestions.length}`;
    }
  }

  // --- Mode 1: Mindmap / Accordion View Rendering ---
  function renderMindmapView() {
    const listEl = document.getElementById('questions-list-container');
    if (!listEl) return;

    const questions = getFilteredQuestions();
    if (questions.length === 0) {
      listEl.innerHTML = `
        <div style="text-align: center; padding: 48px; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
          <div style="font-size: 32px; margin-bottom: 8px;">🔍</div>
          <div style="font-weight: 700; font-size: 16px;">Không tìm thấy câu hỏi nào phù hợp</div>
          <div style="font-size: 13px; margin-top: 4px;">Hãy thử điều chỉnh lại bộ lọc hoặc từ khóa tìm kiếm.</div>
        </div>
      `;
      return;
    }

    listEl.innerHTML = questions.map(q => {
      const isMastered = State.mastered.has(q.id);
      const isReview = State.review.has(q.id);
      const noteText = State.notes[q.id] || '';

      const keywordsHtml = q.keywords.map(kw => `<span class="keyword-badge">${kw}</span>`).join(' ');
      const summaryListHtml = q.summary.map(s => `<li>${s}</li>`).join('');

      return `
        <div class="question-card ${isMastered ? 'mastered' : ''} ${isReview ? 'review' : ''}" id="q-card-${q.id}">
          <div class="question-header" onclick="window.APP.toggleCard(${q.id})">
            <div class="question-title-area">
              <div class="question-meta">
                <span class="tag-chapter">Chương ${q.chapter}</span>
                <span class="tag-id">${q.code}</span>
              </div>
              <div class="question-title">${q.title}</div>
            </div>
            <div class="question-actions" onclick="event.stopPropagation()">
              <button class="action-chip-btn ${isMastered ? 'active-master' : ''}" onclick="window.APP.toggleMaster(${q.id})" title="Đánh dấu đã thuộc">
                ${isMastered ? '✅ Đã thuộc' : '⚪ Chưa thuộc'}
              </button>
              <button class="action-chip-btn ${isReview ? 'active-star' : ''}" onclick="window.APP.toggleReview(${q.id})" title="Đánh dấu cần ôn lại">
                ${isReview ? '⭐ Cần ôn' : '☆ Ôn lại'}
              </button>
              <button class="icon-btn" onclick="window.APP.toggleCard(${q.id})" title="Mở rộng/Thu gọn" id="btn-toggle-${q.id}">
                ▼
              </button>
            </div>
          </div>
          <div class="question-body" id="q-body-${q.id}">
            <div class="keywords-box">
              <span class="keyword-label">Từ khóa vàng:</span>
              ${keywordsHtml}
            </div>

            <div class="summary-box">
              <div class="summary-title">💡 Tóm tắt cốt lõi siêu tốc:</div>
              <ul class="summary-list">
                ${summaryListHtml}
              </ul>
            </div>

            <div class="explanation-content">
              ${q.explanation}
            </div>

            ${q.example ? `
              <div class="example-box">
                <div class="example-title">🏢 Ví dụ thực tế doanh nghiệp:</div>
                <div>${q.example}</div>
              </div>
            ` : ''}

            <div class="note-box">
              <label style="font-size: 12px; font-weight: 700; color: var(--text-muted);">📝 Ghi chú cá nhân (tự động lưu):</label>
              <textarea class="note-input" placeholder="Gõ mẹo nhớ hoặc ghi chú của riêng bạn vào đây..." oninput="window.APP.saveNote(${q.id}, this.value)">${noteText}</textarea>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function toggleCard(id) {
    const bodyEl = document.getElementById(`q-body-${id}`);
    const btnEl = document.getElementById(`btn-toggle-${id}`);
    if (bodyEl) {
      const isHidden = bodyEl.style.display === 'none';
      bodyEl.style.display = isHidden ? 'flex' : 'none';
      if (btnEl) btnEl.textContent = isHidden ? '▼' : '▲';
    }
  }

  function expandAll() {
    document.querySelectorAll('.question-body').forEach(b => b.style.display = 'flex');
    document.querySelectorAll('.question-actions .icon-btn').forEach(b => b.textContent = '▼');
  }

  function collapseAll() {
    document.querySelectorAll('.question-body').forEach(b => b.style.display = 'none');
    document.querySelectorAll('.question-actions .icon-btn').forEach(b => b.textContent = '▲');
  }

  // --- Mode 2: Flashcard View Engine ---
  function initFlashcardMode() {
    State.fcList = getFilteredQuestions();
    if (State.fcList.length === 0) {
      State.fcList = window.APP_QUESTIONS || [];
    }
    State.fcIndex = 0;
    State.fcFlipped = false;
    renderFlashcard();
  }

  function renderFlashcard() {
    const container = document.getElementById('flashcard-render-container');
    if (!container) return;

    if (State.fcList.length === 0) {
      container.innerHTML = `<div style="text-align: center; padding: 40px;">Không có thẻ nào phù hợp với bộ lọc hiện tại.</div>`;
      return;
    }

    const q = State.fcList[State.fcIndex];
    const isMastered = State.mastered.has(q.id);
    const isReview = State.review.has(q.id);

    container.innerHTML = `
      <div class="flashcard-scene" onclick="window.APP.flipFlashcard()">
        <div class="flashcard ${State.fcFlipped ? 'is-flipped' : ''}" id="main-flashcard">
          <!-- Mặt trước -->
          <div class="flashcard-face flashcard-front">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span class="fc-badge">Chương ${q.chapter} • ${q.code}</span>
              <div>
                ${isMastered ? '<span style="color: var(--success); font-weight: 700; font-size: 13px;">✅ Đã thuộc</span>' : ''}
                ${isReview ? '<span style="color: var(--accent-gold); font-weight: 700; font-size: 13px; margin-left: 6px;">⭐ Cần ôn</span>' : ''}
              </div>
            </div>
            <div class="fc-center-content">
              <div class="fc-question">${q.question}</div>
              <div class="fc-hint">💡 Từ khóa gợi ý: ${q.keywords.slice(0, 3).join(', ')}...</div>
            </div>
            <div class="fc-flip-prompt">Bấm vào thẻ hoặc nhấn [Phím Cách] để xem đáp án ↷</div>
          </div>

          <!-- Mặt sau -->
          <div class="flashcard-face flashcard-back">
            <div>
              <span class="fc-badge" style="background: var(--primary); color: white;">Cốt lõi • ${q.title}</span>
              <div class="keywords-box" style="margin-top: 8px;">
                ${q.keywords.map(kw => `<span class="keyword-badge">${kw}</span>`).join(' ')}
              </div>
            </div>
            <div style="margin: 12px 0;">
              <ul class="summary-list" style="font-size: 14.5px; text-align: left;">
                ${q.summary.map(s => `<li>${s}</li>`).join('')}
              </ul>
              ${q.example ? `
                <div style="font-size: 13px; margin-top: 8px; color: var(--text-muted); background: var(--bg-card); padding: 8px 12px; border-radius: 6px;">
                  <strong>VD nhanh:</strong> ${q.example}
                </div>
              ` : ''}
            </div>
            <div class="fc-flip-prompt">Bấm vào thẻ để lật lại mặt trước ↶</div>
          </div>
        </div>
      </div>

      <div class="fc-controls">
        <button class="btn-secondary" onclick="window.APP.prevFlashcard()">⬅ [Mũi tên Trái]</button>
        <span class="fc-counter">Thẻ ${State.fcIndex + 1} / ${State.fcList.length}</span>
        <button class="btn-secondary" onclick="window.APP.nextFlashcard()">[Mũi tên Phải] ➡</button>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 10px;">
        <button class="btn-primary" style="background: var(--success);" onclick="window.APP.markFlashcardMastered()">
          ✅ Đã thuộc [Phím 1]
        </button>
        <button class="btn-primary" style="background: var(--accent-gold); color: #000;" onclick="window.APP.markFlashcardReview()">
          ⭐ Cần ôn lại [Phím 2]
        </button>
        <button class="btn-secondary" onclick="window.APP.shuffleFlashcards()" title="Trộn ngẫu nhiên câu hỏi">
          🔀 Trộn thẻ
        </button>
      </div>
    `;
  }

  function flipFlashcard() {
    State.fcFlipped = !State.fcFlipped;
    AudioEngine.playFlip();
    const card = document.getElementById('main-flashcard');
    if (card) card.classList.toggle('is-flipped', State.fcFlipped);
  }

  function nextFlashcard() {
    if (State.fcIndex < State.fcList.length - 1) {
      State.fcIndex++;
      State.fcFlipped = false;
      renderFlashcard();
    }
  }

  function prevFlashcard() {
    if (State.fcIndex > 0) {
      State.fcIndex--;
      State.fcFlipped = false;
      renderFlashcard();
    }
  }

  function markFlashcardMastered() {
    if (State.fcList.length === 0) return;
    const q = State.fcList[State.fcIndex];
    State.mastered.add(q.id);
    State.review.delete(q.id);
    saveStorage();
    updateProgressStats();
    AudioEngine.playCorrect();
    nextFlashcard();
  }

  function markFlashcardReview() {
    if (State.fcList.length === 0) return;
    const q = State.fcList[State.fcIndex];
    State.review.add(q.id);
    saveStorage();
    updateProgressStats();
    nextFlashcard();
  }

  function shuffleFlashcards() {
    for (let i = State.fcList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [State.fcList[i], State.fcList[j]] = [State.fcList[j], State.fcList[i]];
    }
    State.fcIndex = 0;
    State.fcFlipped = false;
    renderFlashcard();
  }

  // --- Mode 3: Quiz Engine ---
  function initQuizMode() {
    State.quizList = getFilteredQuestions().filter(q => q.quiz);
    if (State.quizList.length === 0) {
      State.quizList = (window.APP_QUESTIONS || []).filter(q => q.quiz);
    }
    State.quizIndex = 0;
    State.quizScore = 0;
    State.quizAnswered = false;
    renderQuiz();
  }

  function renderQuiz() {
    const container = document.getElementById('quiz-render-container');
    if (!container) return;

    if (State.quizList.length === 0) {
      container.innerHTML = `<div style="text-align: center; padding: 40px;">Không có câu trắc nghiệm nào theo bộ lọc này.</div>`;
      return;
    }

    if (State.quizIndex >= State.quizList.length) {
      // Quiz finished summary
      const total = State.quizList.length;
      const score = State.quizScore;
      const percent = Math.round((score / total) * 100);
      container.innerHTML = `
        <div class="quiz-card" style="text-align: center;">
          <div style="font-size: 54px; margin-bottom: 12px;">🏆</div>
          <h2 style="font-size: 24px; margin-bottom: 8px;">Hoàn thành bài thi thử trắc nghiệm!</h2>
          <div style="font-size: 16px; color: var(--text-muted); margin-bottom: 20px;">
            Số câu đúng: <strong style="color: var(--primary); font-size: 22px;">${score} / ${total}</strong> (${percent}%)
          </div>
          <div style="margin-bottom: 24px;">
            ${percent >= 80 ? '🎉 Xuất sắc! Bạn đã nắm rất vững kiến thức và sẵn sàng đạt điểm A!' :
              percent >= 60 ? '👍 Khá tốt! Hãy ôn lại các câu trả lời sai bằng Flashcard.' :
              '💪 Cần ôn thêm! Hãy quay lại Chế độ Đọc hiểu và rà soát các từ khóa vàng.'}
          </div>
          <div style="display: flex; gap: 12px; justify-content: center;">
            <button class="btn-primary" onclick="window.APP.initQuizMode()">🔄 Làm lại bài thi</button>
            <button class="btn-secondary" onclick="window.APP.setMode('mindmap')">📖 Quay lại Chế độ Đọc hiểu</button>
          </div>
        </div>
      `;
      return;
    }

    const q = State.quizList[State.quizIndex];
    const quizData = q.quiz;

    container.innerHTML = `
      <div class="quiz-card">
        <div class="quiz-header">
          <span>Câu hỏi trắc nghiệm ${State.quizIndex + 1} / ${State.quizList.length} (Chương ${q.chapter})</span>
          <span>Điểm hiện tại: ${State.quizScore}</span>
        </div>
        <div class="quiz-question-text">${quizData.question}</div>
        <div class="quiz-options">
          ${quizData.options.map((opt, i) => `
            <button class="quiz-option-btn" id="quiz-opt-${i}" onclick="window.APP.selectQuizOption(${i})">
              ${opt}
            </button>
          `).join('')}
        </div>
        <div id="quiz-explanation-box" style="display: none;"></div>
        <div style="margin-top: 20px; display: flex; justify-content: flex-end;">
          <button class="btn-primary" id="btn-next-quiz" style="display: none;" onclick="window.APP.nextQuiz()">
            Câu tiếp theo ➡
          </button>
        </div>
      </div>
    `;
    State.quizAnswered = false;
  }

  function selectQuizOption(optIndex) {
    if (State.quizAnswered) return;
    State.quizAnswered = true;

    const q = State.quizList[State.quizIndex];
    const quizData = q.quiz;
    const isCorrect = (optIndex === quizData.answer);

    if (isCorrect) {
      State.quizScore++;
      AudioEngine.playCorrect();
    }

    const selectedBtn = document.getElementById(`quiz-opt-${optIndex}`);
    if (selectedBtn) {
      selectedBtn.classList.add(isCorrect ? 'correct' : 'wrong');
    }

    // Always highlight the correct one
    const correctBtn = document.getElementById(`quiz-opt-${quizData.answer}`);
    if (correctBtn) correctBtn.classList.add('correct');

    // Disable all options
    document.querySelectorAll('.quiz-option-btn').forEach(b => b.disabled = true);

    // Show explanation
    const expBox = document.getElementById('quiz-explanation-box');
    if (expBox) {
      expBox.className = 'quiz-explanation';
      expBox.style.display = 'block';
      expBox.innerHTML = `
        <strong>${isCorrect ? '🎉 Chính xác!' : '❌ Chưa chính xác!'}</strong>
        <p style="margin-top: 4px;">${quizData.explanation}</p>
      `;
    }

    // Show next button
    const nextBtn = document.getElementById('btn-next-quiz');
    if (nextBtn) nextBtn.style.display = 'block';
  }

  function nextQuiz() {
    State.quizIndex++;
    renderQuiz();
  }

  // --- Interaction & Mode Switchers ---
  function setMode(mode) {
    State.mode = mode;
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === mode);
    });

    const mindmapView = document.getElementById('view-mindmap');
    const flashcardView = document.getElementById('view-flashcard');
    const quizView = document.getElementById('view-quiz');

    if (mindmapView) mindmapView.style.display = (mode === 'mindmap') ? 'block' : 'none';
    if (flashcardView) flashcardView.style.display = (mode === 'flashcard') ? 'block' : 'none';
    if (quizView) quizView.style.display = (mode === 'quiz') ? 'block' : 'none';

    if (mode === 'mindmap') renderMindmapView();
    else if (mode === 'flashcard') initFlashcardMode();
    else if (mode === 'quiz') initQuizMode();
  }

  function setChapterFilter(chapterNum) {
    State.chapterFilter = chapterNum;
    document.querySelectorAll('.chapter-nav-item').forEach(el => {
      el.classList.toggle('active', parseInt(el.dataset.chapter) === chapterNum);
    });
    refreshActiveView();
  }

  function setStatusFilter(status) {
    State.statusFilter = status;
    document.querySelectorAll('.filter-pill').forEach(el => {
      el.classList.toggle('active', el.dataset.status === status);
    });
    refreshActiveView();
  }

  function handleSearch(query) {
    State.searchQuery = query;
    refreshActiveView();
  }

  function refreshActiveView() {
    if (State.mode === 'mindmap') renderMindmapView();
    else if (State.mode === 'flashcard') initFlashcardMode();
    else if (State.mode === 'quiz') initQuizMode();
  }

  function toggleMaster(id) {
    if (State.mastered.has(id)) {
      State.mastered.delete(id);
    } else {
      State.mastered.add(id);
      State.review.delete(id);
      AudioEngine.playCorrect();
    }
    saveStorage();
    updateProgressStats();
    if (State.mode === 'mindmap') renderMindmapView();
  }

  function toggleReview(id) {
    if (State.review.has(id)) {
      State.review.delete(id);
    } else {
      State.review.add(id);
    }
    saveStorage();
    updateProgressStats();
    if (State.mode === 'mindmap') renderMindmapView();
  }

  function saveNote(id, text) {
    State.notes[id] = text;
    saveStorage();
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = (current === 'dark') ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('qth_theme', next);
  }

  function resetAllProgress() {
    if (confirm("Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ ôn tập (xóa đánh dấu đã thuộc, cần ôn)?")) {
      State.mastered.clear();
      State.review.clear();
      State.notes = {};
      saveStorage();
      updateProgressStats();
      refreshActiveView();
      alert("Đã làm mới tiến độ học tập thành công!");
    }
  }

  // --- Keyboard Shortcuts ---
  window.addEventListener('keydown', (e) => {
    if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) return;

    if (State.mode === 'flashcard') {
      if (e.code === 'Space') {
        e.preventDefault();
        flipFlashcard();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        nextFlashcard();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        prevFlashcard();
      } else if (e.key === '1') {
        markFlashcardMastered();
      } else if (e.key === '2') {
        markFlashcardReview();
      }
    }
  });

  // --- Initialization ---
  function initApp() {
    loadStorage();
    updateTimerUI();
    updateProgressStats();
    renderMindmapView();
  }

  // Expose methods to global scope
  window.APP = {
    setMode,
    setChapterFilter,
    setStatusFilter,
    handleSearch,
    toggleMaster,
    toggleReview,
    saveNote,
    toggleCard,
    expandAll,
    collapseAll,
    toggleTimer,
    setStage,
    resetStageTimer,
    flipFlashcard,
    nextFlashcard,
    prevFlashcard,
    markFlashcardMastered,
    markFlashcardReview,
    shuffleFlashcards,
    initQuizMode,
    selectQuizOption,
    nextQuiz,
    toggleTheme,
    resetAllProgress
  };

  // Run on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
