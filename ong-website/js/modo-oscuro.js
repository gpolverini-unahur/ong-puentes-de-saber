const btn = document.getElementById('btn-modo');
const html = document.documentElement;

if (localStorage.getItem('modo') === 'oscuro') {
    btn.textContent = 'Modo Claro';
}

btn.addEventListener('click', () => {
    html.classList.toggle('dark-mode');
    const modoActivo = html.classList.contains('dark-mode');
    btn.textContent = modoActivo ? 'Modo Claro' : 'Modo Oscuro';
    localStorage.setItem('modo', modoActivo ? 'oscuro' : 'claro');
});