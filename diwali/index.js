function updateProgressBar(){
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent =`${(scrollTop / (scrollHeight - window.innerHeight)) * 100}`;
    console.log(scrollPercent);
    
    const topee = `${(((scrollPercent) / 2) - 25)}% `;
    const leftee = `${(((scrollPercent) / 2) - 23)}% `;
    
    document.querySelector('.spark').style.setProperty('--tope', topee);
    document.querySelector('.spark').style.setProperty('--lefte', leftee);
}


document.addEventListener('scroll',updateProgressBar);

var i = 0;
function onclick(){
    let tltwo = gsap.timeline({
        defaults: {
            duration: 1,
        },
        
    });
    let ii = i % 2;
    if (ii == 0) {
        // i++;
        tltwo.to(".fire img", {
            scale:1.2,
            duration:1,
            opacity:1,
            
        })
        .to(".fire img", {
            duration:1,
            opacity:0,
            
        })
        .to(".fire img", {
            scale:0,
            duration:0,
            opacity:0,
            
        },"<1");
        
    }
    else if (ii != 0) {
        // i++;
        tltwo.to(".firetwo img", {
            scale:1.2,
            duration:1,
            opacity:1,
            
        })
        .to(".firetwo img", {
            duration:1,
            opacity:0,
            
        })
        .to(".firetwo img", {
            scale:0,
            duration:0,
            opacity:0,
            
        },"<1")
        
    }
    // tltwo.to(".firethree img", {
    //     scale:2,
    //     duration:2,
    //     rotate:90,
    //     opacity:1,
        
    // })
    // .to(".firethree img", {
    //     duration:2,
    //     opacity:0,
        
    // })
    // .to(".firethree img", {
    //     scale:0,
    //     duration:0,
    //     opacity:0,
        
    // },"<1")
    i++;
    console.log(i , ii)
    
    
}

document.addEventListener('click',onclick);



const coursor = document.querySelector(".mouse");

window.addEventListener("mousemove",function (e) {
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y)

    coursor.style.left = `${x}px`;
    coursor.style.top = `${y}px`;
    // coursor.style.backgroundColor = "red"
})

Shery.textAnimate(".oneon" /* Element to target.*/, {
    //Parameters are optional.
    style: 3,
    y: 10,
    delay: 2.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

Shery.imageEffect(".images-cat", {
    style: 4,
    //   debug: true,
    config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": 0.75, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.6440677966101694 }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 1] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 5, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.23, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.61, "range": [0, 2], "_gsap": { "id": 19 } }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
    gooey: true,
});
//   Shery.imageEffect(".images", {
//   style: 5,
//   debug: true,
//   gooey: true,
// });


let tlone = gsap.timeline({
    defaults: {
        duration: 1,
    },

});
tlone.from(".blackstrip", {
    x: -500,
    duration: 1,
    delay: .7,

})
.from(".blackhead", {
    x: -200,
    duration: .7,
    
}, "<0")
.to(".greeating , .hup , .hdown", {
    color: "white",
    duration: 0
})
.to(".blackstrip , .blackhead", {
    x: 500,
    duration: 1,
    
})
.from(".sectiontwo", {
    x: -1920,
    duration: 1,
    
}, "<")
.from(".lighting", {
    y: -200,
    x: 100,
    duration: .7,
    ease:"elastic.out(1,0.3)"

})
.from(".sub-greeating-two h1", {
    x: -300,
        duration: 1,

    })
    .from(".head-happy h1", {
        x: -700,
        duration: 1,

    }, "<0.2")
    .from(".head-diwali h1", {
        x: -700,
        duration: .7,

    }, "<0.2")
    .from(".rangoli", {
        x: -100,
        y: 200,
        duration: .7,
        ease:"circ.out"
        
    }, "<")
    .from(".diya", {
        x: 120,
        duration: .7,
        ease:"none"
        
    }, "<")
    .from(".scrole h1", {
        opacity: 0

    })
    .from(".scrole h1", {
        y: -20,
        duration: .7,
        repeat: -1,
        yoyo: true,

    }, "<")
    


function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i;
    gsap.set(items, {
        // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
            let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
            xPercents[i] = snap(
                (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
                gsap.getProperty(el, "xPercent")
            );
            return xPercents[i];
        },
    });
    gsap.set(items, { x: 0 });
    totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
            distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(
            item,
            {
                xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                duration: distanceToLoop / pixelsPerSecond,
            },
            0
        )
            .fromTo(
                item,
                {
                    xPercent: snap(
                        ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                    ),
                },
                {
                    xPercent: xPercents[i],
                    duration:
                        (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                    immediateRender: false,
                },
                distanceToLoop / pixelsPerSecond
            )
            .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
            (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
            // if we're wrapping the timeline's playhead, make the proper adjustments
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }
    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
    }
    return tl;
}

const boxes = gsap.utils.toArray(".striptwo");
const loop = horizontalLoop(boxes, { paused: false, duration: 10, repeat: -1 });

CustomEase.create("hill","M0,0 C0.126,0.382 0.422,0.531 0.422,0.531 0.422,0.531 0.7,0.541 0.7,0.541 0.7,0.541 0.899,1 1,1  ")
gsap.from(".line", {
    duration: 3,
    ease: "hill", 
    x: -1920,
})
Shery.textAnimate(".wtf" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

let best = document.querySelectorAll(".best-box");
let fest = document.querySelectorAll(".fest-box");
// let imgone = document.querySelector("#imgone");


fest[0].addEventListener("mouseover", function () {
    gsap.to("#fest-one", {
        y: -56,
        duration: .4,
    })
})
fest[0].addEventListener("mouseout", function () {
    gsap.to("#fest-one", {
        y: 0,
        duration: .3,
    })
})
fest[1].addEventListener("mouseover", function () {
    gsap.to("#fest-two", {
        y: -56,
        duration: .4,
    })
})
fest[1].addEventListener("mouseout", function () {
    gsap.to("#fest-two", {
        y: 0,
        duration: .3,
    })
})
fest[2].addEventListener("mouseover", function () {
    gsap.to("#fest-three", {
        y: -56,
        duration: .4,
    })
})
fest[2].addEventListener("mouseout", function () {
    gsap.to("#fest-three", {
        y: 0,
        duration: .3,
    })
})
fest[3].addEventListener("mouseover", function () {
    gsap.to("#fest-four", {
        y: -56,
        duration: .4,
    })
})
fest[3].addEventListener("mouseout", function () {
    gsap.to("#fest-four", {
        y: 0,
        duration: .3,
    })
})
best[0].addEventListener("mouseover", function () {
    gsap.to("#best-one", {
        y: -55,
        duration: .4,
    })
    gsap.to("#imgoneone", {
        duration: 0,
        opacity: 1,
    }, "<")
})
best[0].addEventListener("mouseout", function () {
    gsap.to("#best-one", {
        y: 0,
        duration: .3,
    })
    gsap.to("#imgoneone", {
        duration:.1,
        opacity: 0,
    },"<")
})

best[1].addEventListener("mouseover", function () {
    gsap.to("#best-two", {
        y: -55,
        duration: .4,
    })
    gsap.to("#imgtwoone", {
        duration: 0,
        opacity: 1,
    }, "<")
})
best[1].addEventListener("mouseout", function () {
    gsap.to("#best-two", {
        y: 0,
        duration: .3,
    })
    gsap.to("#imgtwoone", {
        duration:.1,
        opacity: 0,
    },"<")
})

best[2].addEventListener("mouseover", function () {
    gsap.to("#best-three", {
        y: -55,
        duration: .4,
    })
    gsap.to("#imgthreeone", {
        duration: 0,
        opacity: 1,
    }, "<")
})
best[2].addEventListener("mouseout", function () {
    gsap.to("#best-three", {
        y: 0,
        duration: .3,
    })
    gsap.to("#imgthreeone", {
        duration:.1,
        opacity: 0,
    },"<")
})
best[3].addEventListener("mouseover", function () {
    gsap.to("#best-four", {
        y: -55,
        duration: .4,
    })
    gsap.to("#imgfourone", {
        duration: 0,
        opacity: 1,
    }, "<")
})
best[3].addEventListener("mouseout", function () {
    gsap.to("#best-four", {
        y: 0,
        duration: .3,
    })
    gsap.to("#imgfourone", {
        duration:.1,
        opacity: 0,
    },"<")
})

const gallery = document.querySelector(".bigbox");
const win = document.querySelector(".box")
win.onmousemove = e =>{
    const mouseX = e.clientX,
          mouseY =e.clientY;
        //   console.log(mouseX , mouseY)

    const xDecimal = mouseX / 1382.4,
        yDecimal = mouseY / 632.867;

        const maxX = gallery.offsetWidth - 1382.4,
        maxY = gallery.offsetHeight - 632.867;


    const panX = maxX * xDecimal * -1 ;
    const panY = maxY * yDecimal * -1;

   gallery.animate({
    transform:`translate(${panX}px, ${panY}px)`
   },{
    duration:4000,
    fill: "forwards",
    easing: "ease"
   })
}