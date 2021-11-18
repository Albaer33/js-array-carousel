const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// importo gli oggetti da html
const imgContainer = document.querySelector('.images-container');

for(let i = 0; i < items.length; i++) {
    const thisImg = items[i];
    const thisTitle = title[i];
    const thisText = text[i];

    // popolo l'img container
    const newImg =`
        <div class="single-image">
            <img src="${thisImg}" alt="Img ${i+1}">
            <div class="text">
                <h3>${thisTitle}</h3>
                <p>${thisText}</p>
            </div>
        </div>
    `;
    imgContainer.innerHTML += newImg;
}
// dare active alla prima immagine
let activeImage = 0;
const allImages = document.getElementsByClassName('single-image');
const allThumbs = document.getElementsByClassName('single-thumb');
allImages[activeImage].classList.add('active');
allThumbs[activeImage].classList.add('active');

// scorrere le immagini giù
const downArrow = document.querySelector('.down');
downArrow.addEventListener('click', function() {
        allImages[activeImage].classList.remove('active');
        allThumbs[activeImage].classList.remove('active');

        if( activeImage < items.length - 1 ) {
            activeImage++;
        } else {
            activeImage = 0;
        }

        allImages[activeImage].classList.add('active');
        allThumbs[activeImage].classList.add('active');
    }
);

// scorrere le immagini su
const upArrow = document.querySelector('.up');
upArrow.addEventListener('click', function() {
        allImages[activeImage].classList.remove('active');
        allThumbs[activeImage].classList.remove('active');

        if( activeImage > 0) {
            activeImage--;
        } else {
            activeImage = items.length -1;
        }

        allImages[activeImage].classList.add('active');
        allThumbs[activeImage].classList.add('active');
    }
);