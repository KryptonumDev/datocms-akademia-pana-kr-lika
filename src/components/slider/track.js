import React from 'react'
import styled from 'styled-components'

export default function Track({ element, handlers, breakPoints }) {

    //TODO: breakpoints style

    return (
        <Slider>
            <div {...handlers}>
                <div className='slider'>
                    {element}
                </div>
            </div>
        </Slider>
    )
}

const Slider = styled.div`
    padding: 0 100px;
    position: relative;
    margin-top: 60px;
    .slider{
        display: grid;
        grid-template-columns: repeat(${props => props.itemsCount}, calc(${100 / 3}% - 17px));
        grid-column-gap: 25px;
        width: 100%;
        overflow: hidden;
    }

`