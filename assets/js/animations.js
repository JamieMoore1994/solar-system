// Flashing stars animation
const starBackground = function() {
    // Variables to get all three svg files stars
    const starOdd = document.querySelector('.stars-background').querySelectorAll('.star-item:nth-child(odd)');
    const starEven = document.querySelector('.stars-background').querySelectorAll('.star-item:nth-child(even)');
    const starOddTwo = document.querySelector('#star-background-two').querySelectorAll('.star-item:nth-child(odd)');
    const starEvenTwo = document.querySelector('#star-background-two').querySelectorAll('.star-item:nth-child(even)');
    const starOddThree = document.querySelector('#star-background-about').querySelectorAll('.star-item:nth-child(odd)');
    const starEvenThree = document.querySelector('#star-background-about').querySelectorAll('.star-item:nth-child(even)');

    // Initiating timeline
    var tl = new TimelineMax({repeat: -1, yoyo: true});
        tl
        .fromTo(starOdd, 0.7, {opacity: 0.2, autoAlpha: 0}, {opacity: 1, autoAlpha: 1, ease: "power2.in"})
        .fromTo(starEven, 0.8, {opacity: 0.2, autoAlpha: 0}, {opacity: 0.5, autoAlpha: 1, ease: "power2.in"}, 0)
        .fromTo(starOddTwo, 0.7, {opacity: 0.2, autoAlpha: 0}, {opacity: 1, autoAlpha: 1, ease: "power2.in"}, 0)
        .fromTo(starEvenTwo, 0.8, {opacity: 0.2, autoAlpha: 0}, {opacity: 0.5, autoAlpha: 1, ease: "power2.in"}, 0)
        .fromTo(starOddThree, 0.7, {opacity: 0.2, autoAlpha: 0}, {opacity: 1, autoAlpha: 1, ease: "power2.in"}, 0)
        .fromTo(starEvenThree, 0.8, {opacity: 0.2, autoAlpha: 0}, {opacity: 0.5, autoAlpha: 1, ease: "power2.in"}, 0)
}
starBackground();

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
        .from(aboutTitle, 1, {opacity: 0, autoAlpha: 0}, '-=0.3')
        .from(aboutDescription, 1, {opacity: 0, autoAlpha: 0}, '<');

        // Scroll magic targeting the about section
        var scene = new ScrollMagic.Scene({
            triggerElement: aboutSectionTrigger,
            triggerHook: 0,
            duration: 200
        })
            // .addIndicators({
            //     colorTrigger: "white",
            //     colorStart: "white",
            //     colorEnd: "white",
            //     indent: 5
            // })
            .setTween(tl)
            .addTo(controller)
        
}
aboutSection();

// Mercury Function
const mercury = function() {
    const trigger = document.querySelector('.planets.mercury');
    // Planet vairables to animate
    const planetImage = document.querySelector('.planets-image');
    const planetTitle = document.querySelector('.planets-title');
    const planetSubtext = document.querySelector('.planets-subtext');
    const planetDescription = document.querySelector('.planets-description');
    const planetFactListItems = document.querySelector('.planets-facts__list').querySelectorAll('.planets-facts__list--item');
    const planetButton = document.querySelector('.planets-button-holder');
    // Scroll magic scene to trigger gsap animation
    var controller = new ScrollMagic.Controller();

    // Animated sequence
    var tlMercury = new TimelineMax();
    tlMercury
        .fromTo(planetImage, 0.5, {xPercent: '-100%', opacity: 0, autoAlpha: 0}, 
                                {opacity: 1, autoAlpha: 1, scale: 1, xPercent: '0%', y: '0%'})
        .from(planetTitle, 0.5, {y: '10px', autoAlpha: 0, opacity: 0}, '-=0.5')
        .to(planetSubtext, 0.5, {y: '10px', autoAlpha: 1, opacity: 1}, '-=0.5')
        .from(planetDescription, 0.5, {x: '-10px', autoAlpha: 0, opacity: 0}, '-=0.5')
        .staggerFrom(planetFactListItems, 0.5, {x: '-10px', opacity: 0, autoAlpha: 1}, 0.1, '-=0.2')
        .from(planetButton, 0.5, {x: '-10px', autoAlpha: 0, opacity: 0}, '-=0.5');
    
    var scene = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0,
        duration: 800
    })
        // .addIndicators({
        //     colorTrigger: "white",
        //     colorStart: "white",
        //     colorEnd: "white",
        //     indent: 5
        // })
        .setTween(tlMercury)
        .setPin(trigger)
        .addTo(controller)
}
mercury();

// Venus Function
const venus = function() {
    const trigger = document.querySelector('.planets.venus');
    // Planet vairables to animate
    const planetImage = document.querySelector('.planets-image.venus');
    const planetTitle = document.querySelector('.planets-title.venus');
    const planetSubtext = document.querySelector('.planets-subtext.venus');
    const planetDescription = document.querySelector('.planets-description.venus');
    const planetFactListItems = document.querySelector('.planets-facts__list.venus').querySelectorAll('.planets-facts__list--item.venus');
    const planetButton = document.querySelector('.planets-button-holder.venus');
    // Scroll magic scene to trigger gsap animation
    var controller = new ScrollMagic.Controller();

    // Animated sequence
    var tlVenus = new TimelineMax();
    tlVenus
        .fromTo(planetImage, 0.5, {xPercent: '-100%', opacity: 0, autoAlpha: 0}, 
                                {opacity: 1, autoAlpha: 1, scale: 1, xPercent: '0%', y: '0%' })
        .from(planetTitle, 0.5, {y: '10px', autoAlpha: 0, opacity: 0,}, '-=0.5')
        .to(planetSubtext, 0.5, {y: '10px', autoAlpha: 1, opacity: 1}, '-=0.5')
        .from(planetDescription, 0.5, {x: '-10px', autoAlpha: 0, opacity: 0}, '-=0.5')
        .staggerFrom(planetFactListItems, 0.5, {x: '-10px', opacity: 0, autoAlpha: 1}, 0.1, '-=0.2')
        .from(planetButton, 0.5, {x: '-10px', autoAlpha: 0, opacity: 0}, '-=0.5');
    
    var sceneTwo = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0,
        duration: 800
    })
        .addIndicators({
            colorTrigger: "white",
            colorStart: "white",
            colorEnd: "white",
            indent: 5
        })
        .setTween(tlVenus)
        .setPin(trigger)
        .addTo(controller)
}
venus();



