// Side menu slider

function burgerAnimation() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");

    burger.addEventListener("click", function () {
        burger.classList.toggle("active");
        nav.classList.toggle("active");
    });
}
burgerAnimation();



//Projects

const leftArrow = document.querySelector(".fa-long-arrow-alt-left");
const rightArrow = document.querySelector(".fa-long-arrow-alt-right");
const boxes = document.querySelector(".wrapper1");

let position = 0;

function move(direction) {
    if (direction === "right") {
        position += 15;
    } else {
        position -= 15;
    }
    boxes.style.transform = "translateX(" + position + "vw)";
}

leftArrow.addEventListener("click", () => move("left"));
rightArrow.addEventListener("click", () => move("right"));


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
    const windowHeight = $(window).height() - 100;
    const scrollValue = $(this).scrollTop();
    const about = $('.about');
    const aboutFromTop = about.offset().top;
    const aboutHeight = about.outerHeight();

    const projects = $('.projects');
    const projectsFromTop = projects.offset().top;
    const projectsHeight = projects.outerHeight();

    if (scrollValue > aboutHeight + aboutFromTop - windowHeight) {
        about.addClass('slide');
    }

    if (scrollValue > projectsHeight + projectsFromTop - windowHeight) {
        projects.addClass('slide');
    }

    if (scrollValue < 10) {
        about.removeClass('slide');
        projects.removeClass('slide');
    }
});