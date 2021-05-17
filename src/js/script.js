
//smooth scroll
let links = document.querySelectorAll('[href^="#"]'),
speed = 0.3;

links.forEach(link => {
link.addEventListener('click', function(event) {
    event.preventDefault();

    let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;

    requestAnimationFrame(step);

    function step(time) {
        if (start === null) {
            start = time;
        }

        let progress = time - start,
            r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

            document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
            requestAnimationFrame(step);
        } else {
            location.hash = hash;
        }
    }
});
});

// menu

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


    

// skills-languages
const percents = document.querySelectorAll('.skills-box_percent'),
    scales = document.querySelectorAll('.skills-box__scale_indicator');

    percents.forEach((item, i) => {
        scales[i].style.width = item.innerHTML;
    });


//sidePandel and arrowUp
const panelDivider = document.querySelector('.sidepanel__divider'),
    sidepanelText = document.querySelector('.sidepanel__text'),
    sidepanelIcons = document.querySelectorAll('.sidepanel__link'),
    arrow = document.querySelector('.pageUp');


    window.addEventListener('scroll', function() {
        let scrollPage = window.pageYOffset;

        if (scrollPage < 430){
            panelDivider.classList.remove('sidepanel__divider_yellow');

            sidepanelText.classList.remove('sidepanel__text_yellow');

            sidepanelIcons.forEach(item => {
                item.classList.remove('sidepanel__link_yellow');
            });

            arrow.classList.remove('pageUp_yellow');
        } else if (scrollPage >= 430 && scrollPage < 1150) {

            panelDivider.classList.add('sidepanel__divider_yellow');
            panelDivider.classList.remove('sidepanel__divider_orange');

            sidepanelText.classList.add('sidepanel__text_yellow');
            sidepanelText.classList.remove('sidepanel__text_orange');

            sidepanelIcons.forEach(item => {
                item.classList.add('sidepanel__link_yellow');
                item.classList.remove('sidepanel__link_orange');
            });
            
            arrow.classList.add('pageUp_yellow');
            arrow.classList.remove('pageUp_orange');
        } else if (scrollPage >= 1150 && scrollPage < 1800) {
            panelDivider.classList.add('sidepanel__divider_orange');
            panelDivider.classList.remove('sidepanel__divider_green');
            
            sidepanelText.classList.add('sidepanel__text_orange');
            sidepanelText.classList.remove('sidepanel__text_green');

            sidepanelIcons.forEach(item => {
                item.classList.add('sidepanel__link_orange');
                item.classList.remove('sidepanel__link_green');
            });
            arrow.classList.add('pageUp_orange');
            arrow.classList.remove('pageUp_green');
        } else if (scrollPage >= 1800 && scrollPage < 3000) {
            panelDivider.classList.add('sidepanel__divider_green');
            panelDivider.classList.remove('sidepanel__divider_pink');

            sidepanelText.classList.add('sidepanel__text_green');
            sidepanelText.classList.remove('sidepanel__text_pink');

            sidepanelIcons.forEach(item => {
                item.classList.add('sidepanel__link_green');
                item.classList.remove('sidepanel__link_pink');
            });
            arrow.classList.add('pageUp_green');
            arrow.classList.remove('pageUp_pink');
        } else if (scrollPage >= 3000 && scrollPage < 3600) {
            panelDivider.classList.add('sidepanel__divider_pink');
            panelDivider.classList.remove('sidepanel__divider_blue');

            sidepanelText.classList.add('sidepanel__text_pink');
            sidepanelText.classList.remove('sidepanel__text_blue');

            sidepanelIcons.forEach(item => {
                item.classList.add('sidepanel__link_pink');
                item.classList.remove('sidepanel__link_blue');
            });
            arrow.classList.add('pageUp_pink');
            arrow.classList.remove('pageUp_blue');
        }else{
            panelDivider.classList.add('sidepanel__divider_blue');
            
            sidepanelText.classList.add('sidepanel__text_blue');

            sidepanelIcons.forEach(item => {
                item.classList.add('sidepanel__link_blue');
            });
            arrow.classList.add('pageUp_blue');
        }
    });
