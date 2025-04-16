const proyekData = [
  {
    judul: "Website CV",
    deskripsi:
      "Sebuah website untuk menampilkan Curriculum Vitae dengan desain modern.",
  },
  {
    judul: "Aplikasi Catatan Harian",
    deskripsi:
      "Aplikasi berbasis web untuk mencatat kegiatan harian dan to-do list.",
  },
  {
    judul: "Landing Page Produk",
    deskripsi: "Halaman promosi sederhana untuk produk digital atau fisik.",
  },
];

const daftarProyek = document.getElementById("daftar-proyek");

proyekData.forEach((proyek) => {
  const div = document.createElement("div");
  div.className = "proyek";
  div.innerHTML = `<h3>${proyek.judul}</h3><p>${proyek.deskripsi}</p>`;
  daftarProyek.appendChild(div);
});

const fadeEls = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 }
);

fadeEls.forEach((el) => observer.observe(el));

const toTopBtn = document.getElementById("toTopBtn");
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};
toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const toggle = document.getElementById("darkModeToggle");
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  toggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// JavaScript
const formKontak = document.getElementById("form-kontak");
const feedback = document.getElementById("feedback");

formKontak.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("namaInput").value;
  const email = document.getElementById("emailInput").value;
  const pesan = document.getElementById("pesanInput").value;

  if (nama && email && pesan) {
    feedback.innerText = `Terima kasih, ${nama}! Pesanmu telah dikirim.`;

    // Menyembunyikan pesan setelah 5 detik
    setTimeout(function () {
      feedback.innerText = ""; // Mengosongkan pesan setelah 5 detik
    }, 5000); // 5000 milidetik = 5 detik

    // Reset form setelah pesan terkirim
    formKontak.reset();
  } else {
    feedback.innerText = "Mohon isi semua kolom.";
  }
});
