const select = document.getElementById('pilihan');
const ctn1 = document.getElementById('ctn1');
const ctn2 = document.getElementById('ctn2');
const ctn3 = document.getElementById('ctn3');
const tombolTampilkan = document.getElementById("tampilkanElemen");
const tombolKembali = document.getElementById("kembaliElemen");
const elemen = [];

for (let i = 1; i <= 8; i++) {
  elemen.push(document.getElementById(`elemen${i}`));
}

let indexTampil = 0; 

tombolTampilkan.addEventListener("click", function() {
  elemen[indexTampil].style.display = "none";
  elemen[indexTampil].classList.remove("fade-in");
  indexTampil = (indexTampil + 1) % elemen.length; // Ganti ke elemen berikutnya dalam daftar
  elemen[indexTampil].style.display = "block";
  elemen[indexTampil].classList.add("fade-in");
  
  tombolKembali.disabled = false; // Aktifkan tombol "Kembali"
});

tombolKembali.addEventListener("click", function() {
  elemen[indexTampil].style.display = "none";
  elemen[indexTampil].classList.remove("fade-in");
  indexTampil = (indexTampil - 1 + elemen.length) % elemen.length; // Kembali ke elemen sebelumnya dalam daftar
  elemen[indexTampil].style.display = "block";
  elemen[indexTampil].classList.add("fade-in");
  
  // Nonaktifkan tombol "Kembali" jika kita sudah di elemen pertama
  if (indexTampil === 0) {
      tombolKembali.disabled = true;
  }
});

select.addEventListener('change', function() {
  const selectedOption = select.value;
});


        