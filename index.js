let isModalOpen = false;

function toggleModal(){
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}


function openMenu() {
    document.body.classList += "menu--open" ;
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}