const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

const close = document.getElementById('close')

if (close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
}


let MainImg = document.getElementById('MainImg')
let SmallImg = document.getElementsByClassName('small-img')
let ProductImg = document.getElementsByClassName('product')

for (let i = 0; i < SmallImg.length; i++) {
    SmallImg[i].addEventListener('click', () => {
        MainImg.src = SmallImg[i].src;
    });
}

for (let i = 0; i < ProductImg.length; i++) {
    ProductImg[i].addEventListener('click', () => {
        MainImg.src = ProductImg[i].src;
    });
} 