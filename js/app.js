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

        // Mens open

        MegaMenu.classList.add('megaMenuJs');
        pad.classList.add('padd');
        console.log("Added");


        // Wosmen close

        MegaMenu1.classList.remove('megaMenuJs');
        pad1.classList.remove('padd');
        console.log("removed");

        // Shop close
        MegaMenu2.classList.remove('megaMenuJs');
        pad2.classList.remove('padd');
        console.log("removed");

    });
}

if (closeMega) {
    closeMega.addEventListener('click', () => {
        // MegaMenu.classList.add('megaMenuJsremove');
        MegaMenu.classList.remove('megaMenuJs');
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

        // Women Open


        MegaMenu1.classList.add('megaMenuJs');
        pad1.classList.add('padd');
        console.log("Added");

        // Men close
        MegaMenu.classList.remove('megaMenuJs');
        pad.classList.remove('padd');
        console.log("removed");

        // shop close

        MegaMenu2.classList.remove('megaMenuJs');
        pad2.classList.remove('padd');
        console.log("removed");

    });
}

if (closeMega2) {
    closeMega2.addEventListener('click', () => {
        // MegaMenu1.classList.add('megaMenuJsremove');
        MegaMenu1.classList.remove('megaMenuJs');
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

        // Shop open

        MegaMenu2.classList.add('megaMenuJs');
        pad2.classList.add('padd');
        console.log("Added");
        // men close
        MegaMenu.classList.remove('megaMenuJs');
        pad.classList.remove('padd');
        console.log("removed");

        // Women close

        MegaMenu1.classList.remove('megaMenuJs');
        pad1.classList.remove('padd');
        console.log("removed");


    });
}

if (closeMega3) {
    closeMega3.addEventListener('click', () => {
        // MegaMenu2.classList.add('megaMenuJsremove');
        MegaMenu2.classList.remove('megaMenuJs');
        pad2.classList.remove('padd');
        console.log("removed");
    });
}




// blog page

function changeImg(a) {
    document.getElementById("eh").src = a.src;
}


