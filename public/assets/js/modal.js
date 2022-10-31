const myConquestsBtn = document.querySelector('#myConquests-btn')
const modal = document.querySelector('#conquests-modal')
const btnClose = document.querySelector('#closeModal-btn')

myConquestsBtn.onclick = () => {
    modal.showModal()
}

btnClose.onclick = () => {
    modal.close()
}

modal.addEventListener('click', (e) => {
    if(e.target.id == 'conquests-modal') {
        modal.close();
    }
})

/* Slide */

let slides = document.querySelectorAll('.conquests-slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

