const mode = document.getElementById('mode_icon');
const googleLogo = document.getElementById('googleLogo');
const fbLogo = document.getElementById('fbLogo');
const githubLogo = document.getElementById('githubLogo');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');

        // Alterar a imagem para a versão escura
        googleLogo.src = 'imgs/google_light.png';
        fbLogo.src = 'imgs/fb_light.png';
        githubLogo.src ='imgs/github_light.png';

    } else {
        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');
        form.classList.remove('dark');

        // Alterar a imagem de volta para a versão clara
        googleLogo.src = 'imgs/google_dark.png';
        fbLogo.src = 'imgs/fb_dark.png';
        githubLogo.src ='imgs/github_dark.png';
    }
});

