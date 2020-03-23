// About pop up
const aboutSection = function() {
    const aboutSectionTrigger = document.querySelector('.banner-intro__text');
    const aboutBackground = document.querySelector('.about-intro');
    const aboutTitle = document.querySelector('.about-intro__title');
    const aboutDescription = document.querySelector('.about-intro__text');

    // Scroll magic scene to trigger gsap animation
    var controller = new ScrollMagic.Controller();

    var tl = new TimelineMax();
    tl
        .to(aboutBackground, 1, {opacity: 1, autoAlpha: 1, x: '0'})
        .from(aboutTitle, 1, {opacity: 0, autoAlpha: 0})
        .from(aboutDescription, 1, {opacity: 0, autoAlpha: 0});

        // Scroll magic targeting the about section
        var scene = new ScrollMagic.Scene({
            triggerElement: aboutSectionTrigger,
            triggerHook: 0,
            duration: 300
        })
            .addIndicators({
                colorTrigger: "white",
                colorStart: "white",
                colorEnd: "white",
                indent: 5
            })
            .setTween(tl)
            .addTo(controller)
        
}
aboutSection();

// Planet vairables to animate
const mercurySection = document.querySelector('.planets');
const planetImage = document.querySelector('.planets-image');
const planetTitle = document.querySelector('.planets-title');
const planetSubtext = document.querySelector('.planets-subtext');
const planetDescription = document.querySelector('.planets-description');
const planetFact = document.querySelector('.planets-facts');
const planetFactList = document.querySelector('.planets-facts__list');
const planetFactListItems = document.querySelector('.planets-facts__list').querySelectorAll('.planets-facts__list--item');
const planetButton = document.querySelector('.planets-button-holder');

// Mercury Function
const mercury = function() {
    // Scroll magic scene to trigger gsap animation
    var controller = new ScrollMagic.Controller();

    // Animated sequence
    var tl = new TimelineMax();
    tl
        .fromTo(planetImage, 1, {xPercent: '-100%', opacity: 0, autoAlpha: 0}, 
                                {opacity: 1, autoAlpha: 1, scale: 1, xPercent: '0%', y: '0%' })
        .from(planetTitle, 1, {y: '10px', autoAlpha: 0, opacity: 0})
        .to(planetSubtext, 1, {y: '10px', autoAlpha: 1, opacity: 1})
        .from(planetDescription, 1, {x: '-10px', autoAlpha: 0, opacity: 0})
        .staggerFrom(planetFactListItems, 1, {x: '-10px', opacity: 0, autoAlpha: 1}, 0.3)
        .from(planetButton, 1, {x: '-10px', autoAlpha: 0, opacity: 0});
    
    var scene = new ScrollMagic.Scene({
        triggerElement: mercurySection,
        triggerHook: 0,
        duration: 1000
    })
        // .addIndicators({
        //     colorTrigger: "white",
        //     colorStart: "white",
        //     colorEnd: "white",
        //     indent: 5
        // })
        .setTween(tl)
        .setPin(mercurySection)
        .addTo(controller)
}
mercury();