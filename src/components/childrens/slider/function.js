import { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable';

export default function Function({ defaultPosition, itemsCount, currBreakPoint }) {

    const [position, positionSet] = useState(0);

    const [canRight, changeCanRight] = useState(false);
    const [canLeft, changeCanLeft] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            let lastSlideNumber = itemsCount - currBreakPoint.showCount

            if (position >= lastSlideNumber && position <= 0) {
                changeCanLeft(false)
                changeCanRight(false)
            } else if (position >= lastSlideNumber) {
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

