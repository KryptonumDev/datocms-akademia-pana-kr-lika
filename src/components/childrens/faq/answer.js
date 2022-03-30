import React from 'react'

export default function Answer({ children }) {
    return (
        <p
            itemProp='acceptedAnswer'
            itemType='https://schema.org/Answer'>
            <span itemProp='text'>
                {children}
            </span>
        </p>
    )
}