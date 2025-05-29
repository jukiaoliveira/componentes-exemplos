const toggle = document.getElementById('toggleTheme');
const iconSun = document.getElementById('iconSun');
const iconMoon = document.getElementById('iconMoon');

// Carrega preferência salva
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.checked = true;
    iconSun.style.display = 'none';
    iconMoon.style.display = '';
} else {
    iconSun.style.display = '';
    iconMoon.style.display = 'none';
}

toggle.addEventListener('change', function() {
    if (toggle.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        iconSun.style.display = 'none';
        iconMoon.style.display = '';
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        iconSun.style.display = '';
        iconMoon.style.display = 'none';
    }
});