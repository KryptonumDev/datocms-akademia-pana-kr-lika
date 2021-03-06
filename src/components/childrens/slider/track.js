import React from 'react'
import styled, { css } from 'styled-components'
import SliderItem from './slider-item'

export default function Track({ children, handlers, breakPoints, position, itemsCount, currBreakPoint }) {

    const childrens = [...children] // useMemo
    
    return (
        <Slider currBreakPoint={currBreakPoint} breakPoints={breakPoints} itemsCount={itemsCount}>
            <div {...handlers}>
                <div className='slider'>
                    {childrens.map((el, index) => (
                        <SliderItem key={index} data={{ position: position, gap: currBreakPoint.gap }}>
                            {el.props.children}
                        </SliderItem>
                    ))}
                </div>
            </div>
        </Slider>
    )
}

const Slider = styled.div`
    position: relative;

    .slider{
        display: grid;
        width: 100%;
    }
    
    ${props => props.breakPoints.map(el => css`
        @media (max-width: ${el.width}px) {
            padding: ${el.sidePadding};

            .slider{
                grid-template-columns: ${({ itemsCount }) => 'repeat(' + itemsCount + ', calc(' + (100 / el.showCount) + '% - ' + el.gap + 'px))'};
                overflow: ${el.overflow};
                grid-column-gap: ${el.gap}px;
            }
        }
    `)}
`