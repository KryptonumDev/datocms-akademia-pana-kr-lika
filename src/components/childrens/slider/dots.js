import React from 'react'
import styled from 'styled-components'

export default function Dots({ itemsCount, positionSet, position }) {
    let items = []
    for (let i = 0; i < itemsCount; i++) {
        items.push({ id: i })
    }
    return (
        <DotsWrapper itemsCount={itemsCount} position={position}>
            {items.map(el => (
                <Button disabled={position === el.id} position={position} key={el.id} onClick={() => { positionSet(el.id) }} />
            ))}
        </DotsWrapper>
    )
}

const DotsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(${({ itemsCount }) => itemsCount}, 16px);
    grid-column-gap: 16px;
    margin: 50px auto 0;
    width: fit-content;

`

const Button = styled.button`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #C2FFB3;
    transition: background-color .2s cubic-bezier(0.215, 0.610, 0.355, 1);
    :nth-child(${props => props.position + 1}){
        background-color: #55B83B; 
    }

`