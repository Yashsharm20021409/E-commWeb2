const bar = document.getElementsByClassName('megamenu');
const cls = document.getElementsByClassName('megamenu-list');
const open = document.getElementsByClassName('megaMenuOpen');

if(bar){
    open.addEventListener('click', ()=>{
        open.classList.add('Open');
    })
}

if(open){
    open.addEventListener('click', ()=>{
        list.classList.remove('active');
    })
}