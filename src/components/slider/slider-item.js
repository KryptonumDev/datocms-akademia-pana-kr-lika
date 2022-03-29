import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'


export default function SliderItem({ children, data: { position } }) {
    return (
        <Item
            animate={{
                left: `calc(${position} * (-100% - 25px))`,
            }}
            transition={{
                ease: 'easeOut',
                duration: 0.25,
            }}>
            {children}
        </Item>
    )
}

const Item = styled(motion.div)`
    position: relative;
`