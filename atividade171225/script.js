 const themeSelect = document.getElementById('themeSelect');
    const rootElement = document.documentElement;

    // Carrega o tema salvo ou define o padrão (claro)
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    themeSelect.value = savedTheme;

    themeSelect.addEventListener('change', (e) => {
      const selectedTheme = e.target.value;
      applyTheme(selectedTheme);
      localStorage.setItem('theme', selectedTheme);
    });

    function applyTheme(theme) {
      if (theme === 'light') {
        rootElement.removeAttribute('data-theme');
      } else {
        rootElement.setAttribute('data-theme', theme);
      }
    }