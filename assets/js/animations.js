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
        .fromTo(starOdd, 1.2, {opacity: 0.2, autoAlpha: 0}, {opacity: 1, autoAlpha: 1, ease: "power2.in"})
        .fromTo(starEven, 1.5, {opacity: 0.2, autoAlpha: 0}, {opacity: 0.5, autoAlpha: 1, ease: "power2.in"}, 0)
        .fromTo(starOddTwo, 1.2, {opacity: 0.2, autoAlpha: 0}, {opacity: 1, autoAlpha: 1, ease: "power2.in"}, 0)
        .fromTo(starEvenTwo, 1.5, {opacity: 0.2, autoAlpha: 0}, {opacity: 0.5, autoAlpha: 1, ease: "power2.in"}, 0)
        .fromTo(starOddThree, 1.2, {opacity: 0.2, autoAlpha: 0}, {opacity: 1, autoAlpha: 1, ease: "power2.in"}, 0)
        .fromTo(starEvenThree, 1.5, {opacity: 0.2, autoAlpha: 0}, {opacity: 0.5, autoAlpha: 1, ease: "power2.in"}, 0)
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

    var tl = new TimelineMax({ease: "bounce.out"});
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
    var tlMercury = new TimelineMax({ease: "power3.out"});
    tlMercury
        .fromTo(planetImage, 0.5, {
            xPercent: '-100%', 
            opacity: 0, 
            autoAlpha: 0
        }, {
            opacity: 1, 
            autoAlpha: 1, 
            scale: 1, 
            xPercent: '0%', 
            y: '0%'
        })
        .from(planetTitle, 1, {
            y: '10px', 
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5')
        .to(planetSubtext, 1, {
            y: '10px', 
            autoAlpha: 1, 
            opacity: 1
        }, '-=0.5')
        .from(planetDescription, 1, {
            x: '-10px', 
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5')
        .staggerFrom(planetFactListItems, 0.5, {
            x: '-10px', 
            opacity: 0, 
            autoAlpha: 1
        }, 0.1, '-=0.2')
        .from(planetButton, 1, {
            x: '-10px', 
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5');
    
    var scene = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0.1,
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
    var tlVenus = new TimelineMax({ease: "power3.out"});
    tlVenus
        .fromTo(planetImage, 0.5, {
            yPercent: '-100%', 
            opacity: 0, 
            autoAlpha: 0
        }, {
            opacity: 1, 
            autoAlpha: 1, 
            scale: 1,  
            y: '0%'
        })
        .from(planetTitle, 1, {
            yPercent: '-20px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5')
        .fromTo(planetSubtext, 1, {
            autoAlpha: 0, 
            opacity: 0,
            y: '-20px'
        }, {
            opacity: 1,
            autoAlpha: 1,
            y: '0'
        }, '-=0.5')
        .from(planetDescription, 1, {
            y: '-20px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5')
        .staggerFrom(planetFactListItems, 0.5, {
            x: '10px',
            autoAlpha: 0, 
            opacity: 0
        }, 0.1, '-=0.2')
        .from(planetButton, 1, {
            x: '10px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5');
    
    var sceneTwo = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0.1,
        duration: 800
    })
        // .addIndicators({
        //     colorTrigger: "white",
        //     colorStart: "white",
        //     colorEnd: "white",
        //     indent: 5
        // })
        .setTween(tlVenus)
        .setPin(trigger)
        .addTo(controller)
}
venus();

// Earth Function
const earth = function() {
    const trigger = document.querySelector('.planets.earth');
    // Planet vairables to animate
    const planetImage = document.querySelector('.planets-image.earth');
    const planetTitle = document.querySelector('.planets-title.earth');
    const planetSubtext = document.querySelector('.planets-subtext.earth');
    const planetDescription = document.querySelector('.planets-description.earth');
    const planetFactListItems = document.querySelector('.planets-facts__list.earth').querySelectorAll('.planets-facts__list--item.earth');
    const planetButton = document.querySelector('.planets-button-holder.earth');
    // Scroll magic scene to trigger gsap animation
    var controller = new ScrollMagic.Controller();

    // Animated sequence
    var tlEarth = new TimelineMax({ease: "power3.out"});
    tlEarth
        .fromTo(planetImage, 0.5, {
            yPercent: '100%', 
            opacity: 0, 
            autoAlpha: 0
        }, {
            opacity: 1, 
            autoAlpha: 1, 
            scale: 1,  
            y: '0%'
        })
        .from(planetTitle, 1, {
            yPercent: '-20px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5')
        .fromTo(planetSubtext, 1, {
            autoAlpha: 0, 
            opacity: 0,
            y: '-20px'
        }, {
            opacity: 1,
            autoAlpha: 1,
            y: '0'
        }, '-=0.5')
        .from(planetDescription, 1, {
            y: '-20px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5')
        .staggerFrom(planetFactListItems, 0.5, {
            x: '10px',
            autoAlpha: 0, 
            opacity: 0
        }, 0.1, '-=0.2')
        .from(planetButton, 1, {
            x: '10px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5');
    
    var sceneTwo = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0.1,
        duration: 800
    })
        // .addIndicators({
        //     colorTrigger: "white",
        //     colorStart: "white",
        //     colorEnd: "white",
        //     indent: 5
        // })
        .setTween(tlEarth)
        .setPin(trigger)
        .addTo(controller)
}
earth();

// Mars Function
const mars = function() {
    const trigger = document.querySelector('.planets.mars');
    // Planet vairables to animate
    const planetImage = document.querySelector('.planets-image.mars');
    const planetTitle = document.querySelector('.planets-title.mars');
    const planetSubtext = document.querySelector('.planets-subtext.mars');
    const planetDescription = document.querySelector('.planets-description.mars');
    const planetFactListItems = document.querySelector('.planets-facts__list.mars').querySelectorAll('.planets-facts__list--item.mars');
    const planetButton = document.querySelector('.planets-button-holder.mars');
    // Scroll magic scene to trigger gsap animation
    var controller = new ScrollMagic.Controller();

    // Animated sequence
    var tlMars = new TimelineMax({ease: "power3.out"});
    tlMars
        .fromTo(planetImage, 0.5, {
            xPercent: '100%', 
            opacity: 0, 
            autoAlpha: 0
        }, {
            opacity: 1, 
            autoAlpha: 1, 
            scale: 1,  
            xPercent: '0'
        })
        .from(planetTitle, 1, {
            yPercent: '-20px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5')
        .fromTo(planetSubtext, 1, {
            autoAlpha: 0, 
            opacity: 0,
            y: '-20px'
        }, {
            opacity: 1,
            autoAlpha: 1,
            y: '0'
        }, '-=0.5')
        .from(planetDescription, 1, {
            y: '-20px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5')
        .staggerFrom(planetFactListItems, 0.5, {
            x: '10px',
            autoAlpha: 0, 
            opacity: 0
        }, 0.1, '-=0.2')
        .from(planetButton, 1, {
            x: '10px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5');
    
    var scene = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0.1,
        duration: 800
    })
        // .addIndicators({
        //     colorTrigger: "white",
        //     colorStart: "white",
        //     colorEnd: "white",
        //     indent: 5
        // })
        .setTween(tlMars)
        .setPin(trigger)
        .addTo(controller)
}
mars();

// Jupiter Function
const jupiter = function() {
    const trigger = document.querySelector('.planets.jupiter');
    // Planet vairables to animate
    const planetImage = document.querySelector('.planets-image.jupiter');
    const planetTitle = document.querySelector('.planets-title.jupiter');
    const planetSubtext = document.querySelector('.planets-subtext.jupiter');
    const planetDescription = document.querySelector('.planets-description.jupiter');
    const planetFactListItems = document.querySelector('.planets-facts__list.jupiter').querySelectorAll('.planets-facts__list--item.jupiter');
    const planetButton = document.querySelector('.planets-button-holder.jupiter');
    // Scroll magic scene to trigger gsap animation
    var controller = new ScrollMagic.Controller();

    // Animated sequence
    var tlJupiter = new TimelineMax({ease: "power3.out"});
    tlJupiter
        .fromTo(planetImage, 0.5, {
            yPercent: '100%', 
            opacity: 0, 
            autoAlpha: 0
        }, {
            opacity: 1, 
            autoAlpha: 1, 
            scale: 1,  
            yPercent: '0'
        })
        .from(planetTitle, 1, {
            yPercent: '-20px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5')
        .fromTo(planetSubtext, 1, {
            autoAlpha: 0, 
            opacity: 0,
            y: '-20px'
        }, {
            opacity: 1,
            autoAlpha: 1,
            y: '0'
        }, '-=0.5')
        .from(planetDescription, 1, {
            y: '-20px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5')
        .staggerFrom(planetFactListItems, 0.5, {
            x: '10px',
            autoAlpha: 0, 
            opacity: 0
        }, 0.1, '-=0.2')
        .from(planetButton, 1, {
            x: '10px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5');
    
    var scene = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0.1,
        duration: 800
    })
        // .addIndicators({
        //     colorTrigger: "white",
        //     colorStart: "white",
        //     colorEnd: "white",
        //     indent: 5
        // })
        .setTween(tlJupiter)
        .setPin(trigger)
        .addTo(controller)
}
jupiter();

// Saturn Function
const saturn = function() {
    const trigger = document.querySelector('.planets.saturn');
    // Planet vairables to animate
    const planetImage = document.querySelector('.planets-image.saturn');
    const planetTitle = document.querySelector('.planets-title.saturn');
    const planetSubtext = document.querySelector('.planets-subtext.saturn');
    const planetDescription = document.querySelector('.planets-description.saturn');
    const planetFactListItems = document.querySelector('.planets-facts__list.saturn').querySelectorAll('.planets-facts__list--item.saturn');
    const planetButton = document.querySelector('.planets-button-holder.saturn');
    // Scroll magic scene to trigger gsap animation
    var controller = new ScrollMagic.Controller();

    // Animated sequence
    var tlSaturn = new TimelineMax({ease: "power3.out"});
    tlSaturn
        .fromTo(planetImage, 0.5, {
            yPercent: '-100%', 
            opacity: 0, 
            autoAlpha: 0
        }, {
            opacity: 1, 
            autoAlpha: 1, 
            scale: 1,  
            yPercent: '0'
        })
        .from(planetTitle, 1, {
            yPercent: '-20px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5')
        .fromTo(planetSubtext, 1, {
            autoAlpha: 0, 
            opacity: 0,
            y: '-20px'
        }, {
            opacity: 1,
            autoAlpha: 1,
            y: '0'
        }, '-=0.5')
        .from(planetDescription, 1, {
            y: '-20px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5')
        .staggerFrom(planetFactListItems, 0.5, {
            x: '10px',
            autoAlpha: 0, 
            opacity: 0
        }, 0.1, '-=0.2')
        .from(planetButton, 1, {
            x: '10px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5');
    
    var scene = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0.1,
        duration: 800
    })
        // .addIndicators({
        //     colorTrigger: "white",
        //     colorStart: "white",
        //     colorEnd: "white",
        //     indent: 5
        // })
        .setTween(tlSaturn)
        .setPin(trigger)
        .addTo(controller)
}
saturn();

// Uranus Function
const uranus = function() {
    const trigger = document.querySelector('.planets.uranus');
    // Planet vairables to animate
    const planetImage = document.querySelector('.planets-image.uranus');
    const planetTitle = document.querySelector('.planets-title.uranus');
    const planetSubtext = document.querySelector('.planets-subtext.uranus');
    const planetDescription = document.querySelector('.planets-description.uranus');
    const planetFactListItems = document.querySelector('.planets-facts__list.uranus').querySelectorAll('.planets-facts__list--item.uranus');
    const planetButton = document.querySelector('.planets-button-holder.uranus');
    // Scroll magic scene to trigger gsap animation
    var controller = new ScrollMagic.Controller();

    // Animated sequence
    var tlUranus = new TimelineMax({ease: "power3.out"});
    tlUranus
        .fromTo(planetImage, 0.5, {
            xPercent: '100%', 
            opacity: 0, 
            autoAlpha: 0
        }, {
            opacity: 1, 
            autoAlpha: 1, 
            scale: 1,  
            xPercent: '0'
        })
        .from(planetTitle, 1, {
            yPercent: '-20px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5')
        .fromTo(planetSubtext, 1, {
            autoAlpha: 0, 
            opacity: 0,
            y: '-20px'
        }, {
            opacity: 1,
            autoAlpha: 1,
            y: '0'
        }, '-=0.5')
        .from(planetDescription, 1, {
            y: '-20px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5')
        .staggerFrom(planetFactListItems, 0.5, {
            x: '10px',
            autoAlpha: 0, 
            opacity: 0
        }, 0.1, '-=0.2')
        .from(planetButton, 1, {
            x: '10px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5');
    
    var scene = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0.1,
        duration: 800
    })
        // .addIndicators({
        //     colorTrigger: "white",
        //     colorStart: "white",
        //     colorEnd: "white",
        //     indent: 5
        // })
        .setTween(tlUranus)
        .setPin(trigger)
        .addTo(controller)
}
uranus();

// Neptune Function
const neptune = function() {
    const trigger = document.querySelector('.planets.neptune');
    // Planet vairables to animate
    const planetImage = document.querySelector('.planets-image.neptune');
    const planetTitle = document.querySelector('.planets-title.neptune');
    const planetSubtext = document.querySelector('.planets-subtext.neptune');
    const planetDescription = document.querySelector('.planets-description.neptune');
    const planetFactListItems = document.querySelector('.planets-facts__list.neptune').querySelectorAll('.planets-facts__list--item.neptune');
    const planetButton = document.querySelector('.planets-button-holder.neptune');
    // Scroll magic scene to trigger gsap animation
    var controller = new ScrollMagic.Controller();

    // Animated sequence
    var tlNeptune = new TimelineMax({ease: "power3.out"});
    tlNeptune
        .fromTo(planetImage, 0.5, {
            yPercent: '100%', 
            opacity: 0, 
            autoAlpha: 0
        }, {
            opacity: 1, 
            autoAlpha: 1, 
            scale: 1,  
            yPercent: '0'
        })
        .from(planetTitle, 1, {
            yPercent: '-20px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5')
        .fromTo(planetSubtext, 1, {
            autoAlpha: 0, 
            opacity: 0,
            y: '-20px'
        }, {
            opacity: 1,
            autoAlpha: 1,
            y: '0'
        }, '-=0.5')
        .from(planetDescription, 1, {
            y: '-20px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5')
        .staggerFrom(planetFactListItems, 0.5, {
            x: '10px',
            autoAlpha: 0, 
            opacity: 0
        }, 0.1, '-=0.2')
        .from(planetButton, 1, {
            x: '10px',
            autoAlpha: 0, 
            opacity: 0
        }, '-=0.5');
    
    var scene = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0.1,
        duration: 800
    })
        // .addIndicators({
        //     colorTrigger: "white",
        //     colorStart: "white",
        //     colorEnd: "white",
        //     indent: 5
        // })
        .setTween(tlNeptune)
        .setPin(trigger)
        .addTo(controller)
}
neptune();







