let textTag = document.querySelector('.section1 h1');
let text = textTag.textContent;

textTag.className = 'fadeMove';

let splitText = text.split('');
textTag.innerHTML = '';

for (i=0; i< splitText.length; i++) {
    if(splitText[i] == ' ') {
        splitText[i] = '&nbsp;'
    }
    textTag.innerHTML += `<span>${splitText[i]}</span>`;
}
let spans= textTag.querySelectorAll('span');
let k = 0;
let interval = setInterval(() => {
    
    let singleSpan = spans[k];
    singleSpan.className = 'fadeMove';
    k++;

    if(k === spans.length) {
        clearInterval(interval);
    }

}, 70);

let border = document.querySelector('.border-line');
let animationWidth = 0;
window.onscroll = () => {

    if(this.oldScroll > this.scrollY) {
        animationWidth -= 1.5;

    } else {
        animationWidth +=1.5;
    }

    if(animationWidth>=100) {
        animationWidth = 100;
    }
    if(animationWidth<=0) {
        animationWidth = 0;
    }
    

    border.style.width = animationWidth + '%';

    console.log (animationWidth);

    this.oldScroll = this.scrollY;

    imageAnimation();
}

const imageAnimation = () => {
    let sectionForAnimation = document.querySelector('.section2 .images');
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    let leftImage = document.querySelector('.slideFromLeft');
    let rightImage = document.querySelector('.slideFromRight');
    
    if(sectionPosition < screenPosition) {

    
    leftImage.classList.add('animated');
    rightImage.classList.add('animated');
    }
}