// Side menu slider

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");


burger.addEventListener("click", function () {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});


//Projects

const leftArrow = document.querySelector(".fa-long-arrow-alt-left");
const rightArrow = document.querySelector(".fa-long-arrow-alt-right");
const boxes = document.querySelector(".wrapper1");

let position = 0;

function moveDivLeft() {
    position -= 15;
    boxes.style.transform = 'translateX(' + position + 'vw)';
};

function moveDivRight() {
    position += 15;
    boxes.style.transform = 'translateX(' + position + 'vw)';
};

leftArrow.addEventListener('click', moveDivLeft);
rightArrow.addEventListener('click', moveDivRight);


// Go to section

$('div.nav a').on('click', function () {
    const goToSection = '#' + $(this).attr('class');
    $('body, html').animate({
            scrollTop: $(goToSection).offset().top
        },
        700)
});

//Slider

$(document).on('scroll', function () {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    const $about = $('.about');
    const aboutFromTop = $about.offset().top;
    const aboutHeight = $about.outerHeight();

    const $projects = $('.projects');
    const projectsFromTop = $projects.offset().top;
    const projectsHeight = $projects.outerHeight();

    if (scrollValue > aboutHeight + aboutFromTop - windowHeight - 50) {
        $about.addClass('slide');
    }

    if (scrollValue > projectsHeight + projectsFromTop - windowHeight - 50) {
        $projects.addClass('slide');
    }

    if (scrollValue < 10) {
        $about.removeClass('slide');
        $projects.removeClass('slide');
    }
});