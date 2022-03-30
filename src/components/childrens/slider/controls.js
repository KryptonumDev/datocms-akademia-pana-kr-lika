import React from 'react'
import styled, { css } from 'styled-components'

export default function Controls({ data, innerData }) {

    const { canLeft, canRight, positionSet, position, breakPoints } = innerData

    return (
        <React.Fragment>
            <SliderControls
                left
                breakPoints={breakPoints}
                aria-label={data.left.label}
                name={data.left.name}
                disabled={!canLeft}
                onClick={() => {
                    positionSet(position - 1);
                }}
            >
                <img src={data.left.arrowImg.url} alt={data.left.arrowImg.alt} />
            </SliderControls>
            <SliderControls
                right
                breakPoints={breakPoints}
                aria-label={data.right.label}
                name={data.right.name}
                disabled={!canRight}
                onClick={() => {
                    positionSet(position + 1);
                }}
            >
                <img src={data.right.arrowImg.url} alt={data.right.arrowImg.alt} />
            </SliderControls>
        </React.Fragment>
    )
}

const SliderControls = styled.button`
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    left: ${props => props.left ? '0' : 'unset'};
    right: ${props => props.right ? '0' : 'unset'};
    width: 60px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 4px solid var(--primary-navy);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: opacity .2s linear;
    cursor: pointer;
    background-color: transparent;

    &:hover{

    }

    &:disabled{
        opacity: .5;
    }
    
    ${props => props.breakPoints.map(el => css`
        @media (max-width: ${el.width}px) {
            ${el.controlsStyle}
        }
    `)}
`

