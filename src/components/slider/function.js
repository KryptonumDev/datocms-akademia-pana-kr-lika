import React from 'react'
import styled from 'styled-components'

export default function Slider(data) {

    const { breakPoints, defaultPosition } = data

    const windowWidth = (typeof window !== "undefined") ? window.innerWidth : 0

    const [position, positionSet] = useState(0);

    const [canRight, changeCanRight] = useState(false);
    const [canLeft, changeCanLeft] = useState(false);

    useEffect(() => { //TODO: breakPoints map
        if (typeof window !== "undefined") {
            if (position >= (windowWidth <= sliderBreackPoint ? windowWidth <= secondBreackPoint ? testimonials.length - 1 : testimonials.length - 2 : testimonials.length - 3) && position <= 0) {
                changeCanLeft(false)
                changeCanRight(false)
            } else if (position >= (windowWidth <= sliderBreackPoint ? windowWidth <= secondBreackPoint ? testimonials.length - 1 : testimonials.length - 2 : testimonials.length - 3)) {
                changeCanRight(false)
                changeCanLeft(true)
            } else if (position <= 0) {
                changeCanLeft(false)
                changeCanRight(true)
            } else {
                changeCanLeft(true)
                changeCanRight(true)
            }
        }
    }, [position])

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (canRight) {
                positionSet(position + 1)
            }
        },
        onSwipedRight: () => {
            if (canLeft) {
                positionSet(position - 1)
            }
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return {
        handlers,
        changeCanRight, canRight,
        changeCanLeft, canLeft,
        positionSet, position
    }
}

