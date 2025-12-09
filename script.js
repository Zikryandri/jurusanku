// Data untuk tes minat bakat
const testData = {
  questions: [
    {
      id: 1,
      text: "Aktivitas apa yang paling Anda nikmati?",
      options: [
        { id: 1, text: "Menganalisis data dan memecahkan masalah logika", value: "investigative" },
        { id: 2, text: "Membuat karya seni atau desain yang kreatif", value: "artistic" },
        { id: 3, text: "Membantu orang lain memecahkan masalah pribadi", value: "social" },
        { id: 4, text: "Memimpin proyek atau mengatur acara", value: "enterprising" },
        { id: 5, text: "Bekerja dengan tangan dan alat-alat", value: "realistic" },
        { id: 6, text: "Mengikuti prosedur dan instruksi yang terstruktur", value: "conventional" },
      ],
    },
    {
      id: 2,
      text: "Mata pelajaran apa yang paling Anda sukai di sekolah?",
      options: [
        { id: 1, text: "Matematika dan Fisika", value: "investigative" },
        { id: 2, text: "Seni dan Bahasa", value: "artistic" },
        { id: 3, text: "Sosiologi dan Psikologi", value: "social" },
        { id: 4, text: "Ekonomi dan Kewirausahaan", value: "enterprising" },
        { id: 5, text: "Prakarya dan Olahraga", value: "realistic" },
        { id: 6, text: "Akuntansi dan Administrasi", value: "conventional" },
      ],
    },
    {
      id: 3,
      text: "Bagaimana cara Anda paling efektif belajar?",
      options: [
        { id: 1, text: "Dengan melakukan penelitian mandiri dan eksperimen", value: "investigative" },
        { id: 2, text: "Dengan mengekspresikan diri secara kreatif", value: "artistic" },
        { id: 3, text: "Dengan berdiskusi dan berkolaborasi dalam kelompok", value: "social" },
        { id: 4, text: "Dengan memimpin proyek dan presentasi", value: "enterprising" },
        { id: 5, text: "Dengan praktik langsung dan simulasi", value: "realistic" },
        { id: 6, text: "Dengan mengikuti panduan langkah demi langkah", value: "conventional" },
      ],
    },
    {
      id: 4,
      text: "Apa tujuan karier utama Anda?",
      options: [
        { id: 1, text: "Menemukan sesuatu yang baru atau memecahkan masalah kompleks", value: "investigative" },
        { id: 2, text: "Menciptakan karya yang orisinal dan bermakna", value: "artistic" },
        { id: 3, text: "Membantu orang lain dan membuat perbedaan dalam masyarakat", value: "social" },
        { id: 4, text: "Mencapai posisi kepemimpinan dan kesuksesan finansial", value: "enterprising" },
        { id: 5, text: "Membangun atau memperbaiki sesuatu yang nyata", value: "realistic" },
        { id: 6, text: "Bekerja di lingkungan yang teratur dan stabil", value: "conventional" },
      ],
    },
  ],
  // Data rekomendasi jurusan berdasarkan kategori
  recommendations: {
    investigative: {
      category: "Investigatif",
      learningStyle: "Analitis & Mandiri",
      personalityType: "Pemikir & Peneliti",
      majors: [
        { name: "Teknik Informatika", description: "Belajar pemrograman, algoritma, dan pengembangan perangkat lunak.", match: 95 },
        { name: "Kedokteran", description: "Ilmu medis, anatomi, dan perawatan kesehatan.", match: 88 },
        { name: "Matematika", description: "Teori matematika, statistik, dan analisis data.", match: 92 },
      ],
      careers: ["Data Scientist", "Peneliti", "Dokter", "Ahli Statistik", "Insinyur Perangkat Lunak"],
    },
    artistic: {
      category: "Artistik",
      learningStyle: "Visual & Kreatif",
      personalityType: "Ekspresif & Imajinatif",
      majors: [
        { name: "Desain Komunikasi Visual", description: "Belajar desain grafis, ilustrasi, dan komunikasi visual.", match: 96 },
        { name: "Arsitektur", description: "Perancangan bangunan dan lingkungan fisik.", match: 90 },
        { name: "Sastra Inggris", description: "Studi literatur, penulisan kreatif, dan bahasa.", match: 85 },
      ],
      careers: ["Desainer Grafis", "Arsitek", "Penulis", "Art Director", "Animator"],
    },
    social: {
      category: "Sosial",
      learningStyle: "Kolaboratif & Interpersonal",
      personalityType: "Peduli & Komunikatif",
      majors: [
        { name: "Psikologi", description: "Ilmu perilaku manusia dan proses mental.", match: 94 },
        { name: "Pendidikan Guru", description: "Metodologi pengajaran dan pengembangan kurikulum.", match: 92 },
        { name: "Ilmu Komunikasi", description: "Studi komunikasi massa, media, dan public relations.", match: 88 },
      ],
      careers: ["Psikolog", "Guru", "Konselor", "HR Specialist", "Public Relations"],
    },
    enterprising: {
      category: "Enterprising",
      learningStyle: "Praktis & Strategis",
      personalityType: "Pemimpin & Persuasive",
      majors: [
        { name: "Manajemen Bisnis", description: "Prinsip manajemen, pemasaran, dan operasi bisnis.", match: 95 },
        { name: "Hukum", description: "Sistem hukum, peraturan, dan peradilan.", match: 87 },
        { name: "Ilmu Politik", description: "Pemerintahan, kebijakan publik, dan hubungan internasional.", match: 83 },
      ],
      careers: ["Entrepreneur", "Manajer", "Pengacara", "Konsultan Bisnis", "Marketing Manager"],
    },
    realistic: {
      category: "Realistis",
      learningStyle: "Praktis & Hands-on",
      personalityType: "Praktis & Teknis",
      majors: [
        { name: "Teknik Sipil", description: "Perancangan dan konstruksi infrastruktur.", match: 93 },
        { name: "Kedokteran Hewan", description: "Ilmu kesehatan dan perawatan hewan.", match: 89 },
        { name: "Teknik Mesin", description: "Desain, analisis, dan pemeliharaan sistem mekanik.", match: 91 },
      ],
      careers: ["Insinyur Sipil", "Dokter Hewan", "Teknisi", "Pilot", "Ahli Pertanian"],
    },
    conventional: {
      category: "Konvensional",
      learningStyle: "Terstruktur & Detail",
      personalityType: "Teratur & Metodis",
      majors: [
        { name: "Akuntansi", description: "Prinsip akuntansi, audit, dan pelaporan keuangan.", match: 96 },
        { name: "Ilmu Perpustakaan", description: "Manajemen informasi dan sistem perpustakaan.", match: 84 },
        { name: "Administrasi Bisnis", description: "Operasi kantor, prosedur administrasi, dan manajemen.", match: 90 },
      ],
      careers: ["Akuntan", "Pustakawan", "Administrator", "Analis Keuangan", "Office Manager"],
    },
  },
};

// State untuk tes
let testState = {
  currentQuestionIndex: 0,
  answers: [],
  result: null,
};

// DOM Elements
const startTestBtn = document.getElementById("startTestBtn");
const startTestBtn2 = document.getElementById("startTestBtn2");
const testLanding = document.getElementById("testLanding");
const testQuestions = document.getElementById("testQuestions");
const testResults = document.getElementById("testResults");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");
const progressFill = document.getElementById("progressFill");
const currentQuestionEl = document.getElementById("currentQuestion");
const totalQuestionsEl = document.getElementById("totalQuestions");
const interestCategory = document.getElementById("interestCategory");
const learningStyle = document.getElementById("learningStyle");
const personalityType = document.getElementById("personalityType");
const recommendationCards = document.getElementById("recommendationCards");
const careerList = document.getElementById("careerList");
const retakeTestBtn = document.getElementById("retakeTestBtn");
const saveResultsBtn = document.getElementById("saveResultsBtn");
const viewProgramsBtn = document.getElementById("viewProgramsBtn");

// Inisialisasi
function init() {
  totalQuestionsEl.textContent = testData.questions.length;

  // Event Listeners
  startTestBtn.addEventListener("click", startTest);
  startTestBtn2.addEventListener("click", startTest);
  prevBtn.addEventListener("click", prevQuestion);
  nextBtn.addEventListener("click", nextQuestion);
  finishBtn.addEventListener("click", finishTest);
  retakeTestBtn.addEventListener("click", retakeTest);
  saveResultsBtn.addEventListener("click", saveResults);
  viewProgramsBtn.addEventListener("click", viewPrograms);

  // Smooth scroll untuk navigasi
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
}

// Fungsi untuk memulai tes
function startTest() {
  // Reset state tes
  testState = {
    currentQuestionIndex: 0,
    answers: [],
    result: null,
  };

  // Sembunyikan landing page dan hasil, tampilkan halaman tes
  testLanding.classList.add("hidden");
  testResults.classList.add("hidden");
  testQuestions.classList.remove("hidden");

  // Tampilkan pertanyaan pertama
  loadQuestion();
}

// Fungsi untuk memuat pertanyaan
function loadQuestion() {
  const question = testData.questions[testState.currentQuestionIndex];
  const currentAnswer = testState.answers[testState.currentQuestionIndex];

  // Update teks pertanyaan
  questionText.textContent = question.text;

  // Update nomor pertanyaan
  currentQuestionEl.textContent = testState.currentQuestionIndex + 1;

  // Update progress bar
  const progressPercentage = ((testState.currentQuestionIndex + 1) / testData.questions.length) * 100;
  progressFill.style.width = `${progressPercentage}%`;

  // Bersihkan kontainer opsi
  optionsContainer.innerHTML = "";

  // Buat elemen untuk setiap opsi
  question.options.forEach((option) => {
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    if (currentAnswer === option.id) {
      optionElement.classList.add("selected");
    }

    optionElement.innerHTML = `
            <div class="option-number">${option.id}</div>
            <div class="option-text">${option.text}</div>
        `;

    optionElement.addEventListener("click", () => selectOption(option.id));
    optionsContainer.appendChild(optionElement);
  });

  // Update status tombol navigasi
  prevBtn.disabled = testState.currentQuestionIndex === 0;

  // Tampilkan tombol selesai jika sudah di pertanyaan terakhir
  if (testState.currentQuestionIndex === testData.questions.length - 1) {
    nextBtn.classList.add("hidden");
    finishBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.remove("hidden");
    finishBtn.classList.add("hidden");
  }
}

// Fungsi untuk memilih opsi
function selectOption(optionId) {
  // Hapus seleksi sebelumnya
  document.querySelectorAll(".option").forEach((option) => {
    option.classList.remove("selected");
  });

  // Tandai opsi yang dipilih
  event.currentTarget.classList.add("selected");

  // Simpan jawaban
  testState.answers[testState.currentQuestionIndex] = optionId;
}

// Fungsi untuk pindah ke pertanyaan sebelumnya
function prevQuestion() {
  if (testState.currentQuestionIndex > 0) {
    testState.currentQuestionIndex--;
    loadQuestion();
  }
}

// Fungsi untuk pindah ke pertanyaan berikutnya
function nextQuestion() {
  if (testState.currentQuestionIndex < testData.questions.length - 1) {
    // Jika belum menjawab pertanyaan saat ini, pilih opsi pertama
    if (testState.answers[testState.currentQuestionIndex] === undefined) {
      testState.answers[testState.currentQuestionIndex] = 1;
    }

    testState.currentQuestionIndex++;
    loadQuestion();
  }
}

// Fungsi untuk menyelesaikan tes
function finishTest() {
  // Jika belum menjawab pertanyaan terakhir, pilih opsi pertama
  if (testState.answers[testState.currentQuestionIndex] === undefined) {
    testState.answers[testState.currentQuestionIndex] = 1;
  }

  // Hitung hasil tes
  calculateResult();

  // Tampilkan halaman hasil
  testQuestions.classList.add("hidden");
  testResults.classList.remove("hidden");

  // Scroll ke hasil tes
  window.scrollTo({
    top: testResults.offsetTop - 80,
    behavior: "smooth",
  });
}

// Fungsi untuk menghitung hasil tes
function calculateResult() {
  // Hitung skor untuk setiap kategori
  const scores = {
    investigative: 0,
    artistic: 0,
    social: 0,
    enterprising: 0,
    realistic: 0,
    conventional: 0,
  };

  // Untuk setiap jawaban, tambahkan skor ke kategori yang sesuai
  testState.answers.forEach((answerId, questionIndex) => {
    const question = testData.questions[questionIndex];
    const selectedOption = question.options.find((option) => option.id === answerId);

    if (selectedOption) {
      scores[selectedOption.value]++;
    }
  });

  // Temukan kategori dengan skor tertinggi
  let maxScore = 0;
  let resultCategory = "investigative";

  for (const [category, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      resultCategory = category;
    }
  }

  // Simpan hasil
  testState.result = resultCategory;

  // Tampilkan hasil
  displayResult(resultCategory);
}

// Fungsi untuk menampilkan hasil
function displayResult(category) {
  const resultData = testData.recommendations[category];

  // Update informasi profil
  interestCategory.textContent = resultData.category;
  learningStyle.textContent = resultData.learningStyle;
  personalityType.textContent = resultData.personalityType;

  // Tampilkan rekomendasi jurusan
  recommendationCards.innerHTML = "";
  resultData.majors.forEach((major) => {
    const card = document.createElement("div");
    card.className = "recommendation-card";
    card.innerHTML = `
            <h5>${major.name}</h5>
            <p>${major.description}</p>
            <div class="match-score">Kecocokan: ${major.match}%</div>
        `;
    recommendationCards.appendChild(card);
  });

  // Tampilkan gambaran karier
  careerList.innerHTML = "";
  resultData.careers.forEach((career) => {
    const careerItem = document.createElement("div");
    careerItem.className = "career-item";
    careerItem.textContent = career;
    careerList.appendChild(careerItem);
  });
}

// Fungsi untuk mengulangi tes
function retakeTest() {
  startTest();
}

// Fungsi untuk menyimpan hasil
function saveResults() {
  alert("Hasil tes Anda telah disimpan. Anda dapat mengaksesnya kapan saja dari dashboard akun Anda.");
  // Dalam implementasi nyata, ini akan mengirim data ke server
}

// Fungsi untuk melihat program
function viewPrograms() {
  window.scrollTo({
    top: document.getElementById("programs").offsetTop - 80,
    behavior: "smooth",
  });
}

// Inisialisasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", init);
