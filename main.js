const timeOutStarAnimation = 60000;
let timeOutbackWelcome;

const applyPhoneMask = (input) => {
    var valor = input.value.replace(/\D/g, ''); 
    var formatado = '';
  
    if (valor.length > 0) {
        formatado = '(' + valor.substring(0, 2) + ') ';
  
        if (valor.length === 11) {
            formatado += valor.substring(2, 7) + '-' + valor.substring(7);
        } else {
            formatado += valor.substring(2, 6) + '-' + valor.substring(6);
        }
    }

    input.value = formatado;
}

const changeElementClass = (Id, Add, ClassName) => {
    const element = document.getElementById(Id);
    if (Add) {
        element.classList.add(ClassName);
    } else {
        element.classList.remove(ClassName);
    }
}

const backToWelcome = () => {
    const welcomeSection = document.getElementById('welcome');
    welcomeSection.scrollIntoView({ behavior: 'smooth' });
}

const hideHeader = () => {

    const header = document.getElementById('header');
    const backWelcome = document.getElementById('back-welcome');

    if (window.pageYOffset === 0 && window.innerHeight < document.documentElement.scrollHeight) {
        header.classList.remove('hidden');
        backWelcome.classList.add('hidden');
    } else {
        header.classList.add('hidden');
        backWelcome.classList.remove('hidden');
        clearTimeout(timeOutbackWelcome);
        timeOutbackWelcome = setTimeout(function() {
            backWelcome.classList.add('hidden');
        }, 3000);
    }
}

const onLoad = () => {

    setTimeout(function() {
        const body = document.getElementById('body');
        const starContent = document.createElement('div');
        starContent.id = 'star-content';
        starContent.classList.add('star-content');
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        const shootingStarTrail = document.createElement('div');
        shootingStarTrail.classList.add('shooting-star-trail');
        starContent.appendChild(shootingStar);
        starContent.appendChild(shootingStarTrail);
        body.appendChild(starContent);
    }, 2500);
}  

const verifyCursorPosition = (event) => {
    var XPos = event.clientX;
    var YPos = event.clientY;
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    if (XPos > screenWidth * 0.8 && YPos > screenHeight * 0.8) {
        hideHeader();
    }
}