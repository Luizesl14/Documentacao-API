
var elements = [];

[].forEach.call(document.querySelectorAll('.scroll-to-link'), function (div) {
    div.onclick = function (e) {
        e.preventDefault();
        var target = this.dataset.target;
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
        var elems = document.querySelectorAll(".content-menu ul li");
        [].forEach.call(elems, function (el) {
            el.classList.remove("active");
        });
        this.classList.add("active");
        return false;
    };
});

document.getElementById('button-menu-mobile').onclick = function (e) {
    e.preventDefault();
    document.querySelector('html').classList.toggle('menu-opened');
}
document.querySelector('.left-menu .mobile-menu-closer').onclick = function (e) {
    e.preventDefault();
    document.querySelector('html').classList.remove('menu-opened');
}

function debounce (func) {
    var timer;
    return function (event) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, 100, event);
    };
}

function calculElements () {
    elements = [];
    [].forEach.call(document.querySelectorAll('.content-section'), function (div) {
        var section = {};
        section.id = div.id;
        elements.push(section);
    });
}




calculElements();
window.onload = () => {
    calculElements();
};
window.addEventListener("resize", debounce(function (e) {
    e.preventDefault();
    calculElements();
}));
window.addEventListener('scroll', function (e) {
    e.preventDefault();
    onScroll();
});


var contextHeight = window.innerHeight;
document.getElementById('content-get-partner').style.height = contextHeight + 'px';
document.getElementById('content-size').style.height = contextHeight + 'px';
document.getElementById('content-size2').style.height = contextHeight + 'px';


