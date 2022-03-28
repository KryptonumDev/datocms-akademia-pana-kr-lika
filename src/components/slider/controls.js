import React from 'react'
import styled from 'styled-components'

export default function Controls({ data, innerData, style }) {

    const data = {
        left: { label, name, arrowImg: { url, alt } },
        right: { label, name, arrowImg: { url, alt } }
    }
    const innerData = { canLeft, canRight, positionSet }

    const style = {width, height, color, hoverAnimation}

    return (
        <React.Fragment>
            <SliderControls
                left
                aria-label="slider scroll left"
                name="poprzedni artykuł"
                disabled={!canLeft}
                onClick={() => {
                    positionSet(position - 1);
                }}
            >
                <img src={ArrowLeft} alt='strzałka slidera lewa' />
            </SliderControls>
            <SliderControls
                right
                aria-label="slider scroll right"
                name="następny artykuł"
                disabled={!canRight}
                onClick={() => {
                    positionSet(position + 1);
                }}
            >
                <img src={ArrowRight} alt='strzałka slidera prawa' />
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
        height: 60px;
        border-radius: 50%;
        border: 4px solid var(--primary-navy);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        transition: opacity .2s linear;
        cursor: pointer;
        background-color: #FFF;

        &:hover{

        }

        &:disabled{
            opacity: .5;
        }

    @media (max-width: 1180px){
        top: 0;
        transform: translateY(-100%) scale(.5) ${props => props.left ? 'translateX(-200%)' : 'translateX(200%)'};
        left: ${props => props.left ? '50%' : 'unset'};
        right: ${props => props.right ? '50%' : 'unset'};
    }
`

