// tombol klik ubah teks
function ubahTeks() {
  document.getElementById("demoText").innerText =
    "Kamu sudah menekan tombol!";
}

// validasi form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let status = document.getElementById("status");

  if (name === "" || email === "" || message === "") {
    status.style.color = "red";
    status.innerText = "Semua field harus diisi!";
  } else {
    status.style.color = "green";
    status.innerText = "Pesan berhasil dikirim!";
  }
});