const timeOutStarAnimation = 60000;

const hideHeader = () => {

    const header = document.getElementById('header');
    const backWelcome = document.getElementById('back-welcome');

    if (window.pageYOffset === 0 && window.innerHeight < document.documentElement.scrollHeight) {
        header.classList.remove('hidden');
        backWelcome.classList.add('hidden');
    } else {
        header.classList.add('hidden');
        backWelcome.classList.remove('hidden');
    }
}

const backToWelcome = () => {
    const link = document.createElement('a');
    link.href = '#welcome';
    link.click();
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