// 1. MODAL ANIMADO
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBackdrop = document.getElementById('modalBackdrop');

// Abrir modal
openModalBtn.addEventListener('click', () => {
  modalBackdrop.classList.add('active');
  // Foco acessível no modal
  closeModalBtn.focus();
});
// Fechar modal (botão)
closeModalBtn.addEventListener('click', () => {
  modalBackdrop.classList.remove('active');
  openModalBtn.focus();
});
// Fechar modal (clicar fora)
modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) {
    modalBackdrop.classList.remove('active');
    openModalBtn.focus();
  }
});
// Fechar modal (tecla ESC)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
    modalBackdrop.classList.remove('active');
    openModalBtn.focus();
  }
});

// 2. BARRA DE PROGRESSO DE LEITURA
const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
  const scrollTotal = document.body.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  const percent = Math.min(100, (scrolled / scrollTotal) * 100);
  progressBar.style.width = percent + '%';
});

// 3. TOAST (NOTIFICAÇÃO)
const showToastBtn = document.getElementById('showToastBtn');
const toast = document.getElementById('toast');
let toastTimeout;
showToastBtn.addEventListener('click', () => {
  toast.classList.add('active');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 2300); // Toast visível por 2.3 segundos
});