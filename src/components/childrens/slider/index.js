import React, { useState, useEffect } from 'react'
import Function from './function'
import Controls from './controls'
import Track from './track'
import { getCurrentBreakPoint } from './helpers/get-current-breackpoint'
import Dots from './dots'

export default function Slider({ children, data: { breakPoints, controlsData } }) {

    const currBreakPoint = getCurrentBreakPoint(breakPoints)
    const itemsCount = children.length

    const innerData = Function({ defaultPosition: currBreakPoint.defaultPosition, itemsCount, currBreakPoint })

    return (
        <React.Fragment>
            <Track
                handlers={innerData.handlers}
                breakPoints={breakPoints}
                position={innerData.position}
                itemsCount={itemsCount}
                currBreakPoint={currBreakPoint}
            >
                {children}
            </Track>
            <Dots
                itemsCount={itemsCount}
                positionSet={innerData.positionSet}
                position={innerData.position}
            />
            <Controls
                data={controlsData}
                innerData={{ breakPoints, canLeft: innerData.canLeft, canRight: innerData.canRight, positionSet: innerData.positionSet, position: innerData.position }}
            />
        </React.Fragment>
    )
}

    //IDEA: slide count to scroll, 
