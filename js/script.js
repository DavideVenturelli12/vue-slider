//debug
console.log('JS OK!');

/*
CONSEGNA:
Partendo dal template fornito renderizzare lo slider con Vue [X]

BONUS:
1 - al click su una thumb, visualizzare in grande l'immagine corrispondente
2 - applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3 - quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/

const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.table(slides);

const app = new Vue({
    el: '#app',
    data: {
        slides,
        indiceSlideAttiva: 0,
        intervalId: undefined
    },
    methods: {
        immaginePrecedente() {
            if (this.indiceSlideAttiva > 0) {
                this.indiceSlideAttiva--;
            } else {
                this.indiceSlideAttiva = this.slides.length - 1;
            }
        },
        immagineSuccessiva() {
            if (this.indiceSlideAttiva < this.slides.length - 1) {
                this.indiceSlideAttiva++;
            } else {
                this.indiceSlideAttiva = 0;
            }
        },
        //BONUS 1: 
        //al click su una thumb, visualizzare in grande l'immagine corrispondente

        selectSlide(index) {
            //console.log(index);
            this.indiceSlideAttiva = index;

        },
        //BONUS 2 e 3:
        //applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente

        startTimer() {
            const intervalId = setInterval(this.immagineSuccessiva, 3000);
        },
        stopTimer() {
            clearInterval(this.intervalId);
        },
    }

});