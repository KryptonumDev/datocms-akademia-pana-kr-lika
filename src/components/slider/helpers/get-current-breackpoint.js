export function getCurrentBreakPoint(breakPoints) {
    const windowWidth = (typeof window !== "undefined") ? window.innerWidth : 0
    let currBreakPoint

    breakPoints.forEach(breakPoint => {
        if (breakPoint.width >= windowWidth) {
            currBreakPoint = breakPoint
        }
    })
    
    return currBreakPoint
}