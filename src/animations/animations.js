//hero
export const HeroAnim={
    hidden:{
        opacity:0,
        y:100
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:0.75,
            staggerChildren:0.2,
            when:"beforeChildren"
        }
    }
}

{/**Hero children animations */}
export const doctorAnimation={
    hidden:{
        x:"-120%",
        opacity:0
    },
    show:{
        transition:{
            duration:1
        },
opacity:1,
x:0
    }
}

export const logoAnimation={
    hidden:{
        x:"120%",
        opacity:0
    },
    show:{
        transition:{
            duration:1
        },
opacity:1,
x:0,
staggerChildren:0.1,
when:"beforeChildren"
    }
}

export const svgAnim={
    hidden:{
        pathLength:0,
        pathOffset:1
    },
    show:{
        pathLength:1,
        pathOffset:0,
        transition:{
            duration:0.5
        }
    }
}
//service
export const serviceAnim={
    hidden:{
        y:100,
        opacity:0
    },
    show:{
        y:0,
        opacity:1,
       
        transition:{
            duration:0.6,
            ease:"easeOut",
            staggerChildren:0.1,
            when:"beforeChildren"
        }
    }
}

export const serviceChildAnim={
    hidden:{
        x:"-10%",
        opacity:0
    },
show:{
opacity:1,
x:0,
transition:{
    duration:0.5,
    delay:0.5,
    ease:"easeOut"
}
}
}
