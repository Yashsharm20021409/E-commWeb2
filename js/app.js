const open = document.getElementById('openMenu');
const close = document.getElementById('closeMenu');
const list = document.getElementById('list');

if(open){
    open.addEventListener('click', ()=>{
        list.classList.add('active');
    });
}

if(close){
    close.addEventListener('click', ()=>{
        list.classList.remove('active');
    })
}


// mega menu

const openList = document.getElementById('openMegaMenu');
const foc = document.getElementById('megaMenu')

openList.addEventListener('click' , ()=>{
    foc.classList.add('activeMenu');
});