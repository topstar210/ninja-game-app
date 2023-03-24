(function () {
    AOS.init({
        'data-aos-mirror': true,
        'data-aos-once': false
    });
    const scroller = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

})();