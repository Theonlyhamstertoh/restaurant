import shoppingCartIcon from "/dist/images/cart.svg"
import menuIcon from "/dist/images/menu.svg"
import arrowIcon from "/dist/images/arrow.svg"

const renderNavigation = () => {
    const navHTML = `
    <span id='title'><span id='coolB'>HAAAM</span>BURGER </span>
    <div class='navicons'>
        <img  class='button' id='cart' alt='shopping cart icon' src='${shoppingCartIcon}'>
        <img id='menu' class='button' src='${menuIcon}'>
    </div>
    
    <div class='sidebar'>
        <img class='button' id='arrow' src='${arrowIcon}'>
        <div class='buttonContainer'>
            <input type='button' class='button' id='home' value='HOME'>
            <input type='button' class='button' id='foodMenu' value='MENU'>
            <input type='button' class='button' id='about' value='ABOUT'>
            <input type='button' class='button' id='contact' value='CONTACT'>
        </div>
</div>`
    const createPage = document.createRange().createContextualFragment(navHTML);
    
    const header = document.querySelector('.header');
    header.appendChild(createPage);
};


const navEffect = () => {
    const menu = document.getElementById('menu');
    const sidebar = document.querySelector('.sidebar');
    const arrow = document.getElementById('arrow');
    const main = document.querySelector('.main');
    const header = document.querySelector('.header');
    const body = document.getElementById('content')
    menu.addEventListener('click', openSidebar);
    arrow.addEventListener('click', closeSidebar);
    function openSidebar() {
        sidebar.style.display = 'block';
        sidebar.classList.add('transitionSidebar');
    }
    

    
    let sidebarOpen = false;
    function checkClickPosition(event) {
        sidebarOpen = true;
        console.log(event)
        if(sidebarOpen === true) {
            if(event === main || event === header || event === body ) {
                closeSidebar();
    
            }
        }
    }
    function closeSidebar() {
        sidebarOpen = false;
        sidebar.classList.add('closeSidebar');
        window.setTimeout(() => {
            sidebar.style.display = 'none';
            sidebar.classList.remove('closeSidebar');
            sidebar.classList.remove('transitionSidebar');
        }, 500)
    }
    
   return {checkClickPosition}

}



export {renderNavigation, navEffect };
