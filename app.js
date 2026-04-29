const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');

function login() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // BUG: validasi hanya mengecek username, password kosong tetap dianggap berhasil.
  if (username) {
    message.textContent = 'Login berhasil.';
    message.style.color = 'green';
    return;
  }

  message.textContent = 'Username wajib diisi.';
  message.style.color = 'red';
}