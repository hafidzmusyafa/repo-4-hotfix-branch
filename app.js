const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');

function login() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    message.textContent = 'Username dan password wajib diisi.';
    message.style.color = 'red';
    return;
  }

  message.textContent = 'Login berhasil.';
  message.style.color = 'green';
}