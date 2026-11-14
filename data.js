// Master Questions Registry
window.APP_QUESTIONS = [
  ...(window.DATA_C1 || []),
  ...(window.DATA_C2 || []),
  ...(window.DATA_C3 || []),
  ...(window.DATA_C4 || []),
  ...(window.DATA_C5 || []),
  ...(window.DATA_C6 || [])
];

// Stages Definition for 3-Hour Time-boxing
window.APP_STAGES = [
  {
    id: 1,
    name: "Chặng 1 (45 phút)",
    chapters: [1, 2],
    title: "Chương 1 & 2: Tổng quan Quản trị & Quyết định Quản trị (27 câu)",
    duration: 45 * 60 // 45 mins in seconds
  },
  {
    id: 2,
    name: "Chặng 2 (45 phút)",
    chapters: [3, 4],
    title: "Chương 3 & 4: Chức năng Hoạch định & Chức năng Tổ chức (18 câu)",
    duration: 45 * 60
  },
  {
    id: 3,
    name: "Chặng 3 (45 phút)",
    chapters: [5, 6],
    title: "Chương 5 & 6: Chức năng Lãnh đạo & Chức năng Kiểm tra (13 câu)",
    duration: 45 * 60
  },
  {
    id: 4,
    name: "Chặng 4 (45 phút)",
    chapters: [1, 2, 3, 4, 5, 6],
    title: "Tổng ôn Flashcard Tốc độ cao & Thi thử Trắc nghiệm Cấp tốc",
    duration: 45 * 60
  }
];
