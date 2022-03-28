import React from 'react'
import Function from './function'
import Controls from './controls'
import Track from './track'

export default function Slider({ element, data }) {

    //TODO: breakpoints style

    //IDEA: slide count, 

    const { breakPoints, defaultPosition, controlsData } = data

    // controlsData = left: { label, name, arrowImg: { url, alt } },
    //                 right: { label, name, arrowImg: { url, alt } }

    const innerData = Function({ breakPoints: [], defaultPosition })

    return (
        <React.Fragment>
            <Track
                handlers={innerData.handlers}
                breakPoints={breakPoints}
            >
                {element}
            </Track>
            <Controls
                data={controlsData}
                innerData={{ canLeft: innerData.canLeft, canRight: innerData.canRight, positionSet: innerData.positionSet }}
                style={''}
            />
        </React.Fragment>
    )
}

