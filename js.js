document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    
    
    toggleBtn.innerText = savedTheme === 'dark' ? 'LIGHT MODE' : 'DARK MODE';

    toggleBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
     
        toggleBtn.innerText = newTheme === 'dark' ? 'LIGHT MODE' : 'DARK MODE';
    });
});
