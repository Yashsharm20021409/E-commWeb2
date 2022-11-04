const open = document.getElementById('openMenu');
const close = document.getElementById('closeMenu');
const list = document.getElementById('list');

if (open) {
    open.addEventListener('click', () => {
        list.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        list.classList.remove('active');
    })
}


// // mega menu


// aboutPadding class = 418px
// height = 46px
// opacity = 1

const pad = document.getElementById('aboutPadding');
const On = document.getElementById('shutOpen');
const closeMega = document.getElementById('shutClose');
const MegaMenu = document.getElementById('mm1');

if (On) {
    On.addEventListener('click', () => {
        MegaMenu.classList.add('megaMenuJs');
        pad.classList.add('padd');
        console.log("Added");
    });
}

if (closeMega) {
    closeMega.addEventListener('click', () => {
        MegaMenu.classList.add('megaMenuJsremove');
        pad.classList.remove('padd');
        console.log("removed");
    });
}


const pad1 = document.getElementById('aboutPadding1');
const On1 = document.getElementById('shutOpen2');
const closeMega2 = document.getElementById('shutClose2');
const MegaMenu1 = document.getElementById('mm2');

if (On1) {
    On1.addEventListener('click', () => {
        MegaMenu1.classList.add('megaMenuJs');
        pad1.classList.add('padd');
        console.log("Added");
    });
}

if (closeMega2) {
    closeMega2.addEventListener('click', () => {
        MegaMenu1.classList.add('megaMenuJsremove');
        pad1.classList.remove('padd');
        console.log("removed");
    });
}

const pad2 = document.getElementById('aboutPadding3');
const On2 = document.getElementById('shutOpen3');
const closeMega3 = document.getElementById('shutClose3');
const MegaMenu2 = document.getElementById('mm3');

if (On2) {
    On2.addEventListener('click', () => {
        MegaMenu2.classList.add('megaMenuJs');
        pad2.classList.add('padd');
        console.log("Added");
    });
}

if (closeMega3) {
    closeMega3.addEventListener('click', () => {
        MegaMenu2.classList.add('megaMenuJsremove');
        pad2.classList.remove('padd');
        console.log("removed");
    });
}




// blog page

function changeImg(a) {
    document.getElementById("eh").src = a.src;
}


