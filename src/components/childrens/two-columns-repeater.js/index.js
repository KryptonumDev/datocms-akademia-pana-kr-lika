import React from 'react'
import ImageTypeOne from './image-type-one'
import ImageTypeTwo from './image-type-two'
import ImageTypeDoubled from './image-type-doubled'
import { IMAGES_TYPES, REPEATER_TYPES } from '../../../constants/types'
import TextTypeButton from './text-type-button'

export const ImagePart = ({ imgType, mainImg, additionalImg }) => {
    switch (imgType) {
        case IMAGES_TYPES.TYPE_ONE:
            return <ImageTypeOne mainImage={mainImg} />
        case IMAGES_TYPES.TYPE_TWO:
            return <ImageTypeTwo mainImage={mainImg} />
        case IMAGES_TYPES.TYPE_DOUBLED:
            return <ImageTypeDoubled mainImage={mainImg} additionalImage={additionalImg} />
        default:
            return null

    }
}

export const TextPart = ({ repeaterType, linkText, linkUrl, text, title }) => {
    switch (repeaterType) {
        case REPEATER_TYPES.BUTTON:
            return <TextTypeButton linkText={linkText} linkUrl={linkUrl} text={text} title={title} />
        default:
            return null
    }
}