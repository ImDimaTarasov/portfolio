const menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger'),
    closeMenu = document.querySelector('.menu__close'),
    overMenu = document.querySelector('.menu__overlay'),
    linkMenu = document.querySelectorAll('.menu__link');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        hamburger.classList.add('active');  
    });
    
    function deleteClass (elem) {
        elem.addEventListener('click', () => {
            menu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    }

    linkMenu.forEach(item => {
        deleteClass(item);
    });

    window.addEventListener("keydown", (e) => {
        if (e.key == 'Escape') {
            menu.classList.remove('active');
            hamburger.classList.remove('active');  
        }
    });
    deleteClass(closeMenu);
    deleteClass(overMenu);


const percents = document.querySelectorAll('.skills-box_percent'),
    scales = document.querySelectorAll('.skills-box__scale_indicator');

percents.forEach((item, i) => {
    scales[i].style.width = item.innerHTML;
});