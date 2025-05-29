// 2. Ripple Effect - botão azul
document.querySelectorAll('.btn-ripple').forEach(btn => {
  btn.addEventListener('click', function(e) {
    // Remove qualquer ripple antigo
    const oldRipple = this.querySelector('.ripple');
    if (oldRipple) oldRipple.remove();

    // Calcula posição do clique
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
    ripple.style.left = (e.clientX - rect.left - rect.width/2) + 'px';
    ripple.style.top = (e.clientY - rect.top - rect.height/2) + 'px';
    this.appendChild(ripple);

    // Remove após a animação
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});

// 3. Botão de Confirmação
const confirmBtn = document.getElementById('confirmBtn');
const confirmMsg = document.getElementById('confirmMsg');
if (confirmBtn) {
  confirmBtn.addEventListener('click', () => {
    confirmMsg.classList.remove('hidden');
    confirmBtn.disabled = true;
    setTimeout(() => {
      confirmMsg.classList.add('hidden');
      confirmBtn.disabled = false;
    }, 1800);
  });
}

// 6. Alterna Paleta de Cores
const paletas = ['pastel', 'neon', 'sunset'];
let paletaAtual = 0;
const paletteBtn = document.getElementById('paletteBtn');
if (paletteBtn) {
  paletteBtn.addEventListener('click', () => {
    // Limpa paletas antigas
    document.body.classList.remove(...paletas);
    // Próxima paleta
    paletaAtual = (paletaAtual + 1) % paletas.length;
    document.body.classList.add(paletas[paletaAtual]);
  });
}

/* 
Observações:
- O botão ícone animado (4) só usa CSS para animação.
- O botão arco-íris (5) só usa CSS para animação da borda.
- Os outros botões usam JS para eventos ou efeitos interativos.
*/