import React from 'react'
import ImageTypeOne from './image-type-one'
import ImageTypeTwo from './image-type-two'
import ImageTypeDoubled from './image-type-doubled'
import { IMAGES_TYPES, REPEATER_TYPES } from '../../../constants/types'
import TextTypeButton from './text-type-button'
import TextTypeClassic from './text-type-classic'
import ImageTypeFour from './image-type-four'
import ImageTypeFive from './image-type-five'

export const ImagePart = ({ imgType, mainImg, additionalImg }) => {
    switch (imgType) {
        case IMAGES_TYPES.TYPE_ONE:
            return <ImageTypeOne mainImage={mainImg} />
        case IMAGES_TYPES.TYPE_TWO:
            return <ImageTypeTwo mainImage={mainImg} />
        case IMAGES_TYPES.TYPE_THREE:
            return null
        case IMAGES_TYPES.TYPE_DOUBLED:
            return <ImageTypeDoubled additionalImage={additionalImg} mainImage={mainImg} />
        case IMAGES_TYPES.TYPE_FOUR:
            return <ImageTypeFour mainImage={mainImg} />
        case IMAGES_TYPES.TYPE_FIVE:
            return <ImageTypeFive mainImage={mainImg} />
        default:
            return null

    }
}

export const TextPart = ({ repeaterType, linkText, linkUrl, text, title }) => {
    switch (repeaterType) {
        case REPEATER_TYPES.BUTTON:
            return <TextTypeButton linkText={linkText} linkUrl={linkUrl} text={text} title={title} />
        case REPEATER_TYPES.CLASSIC:
            return <TextTypeClassic text={text} title={title} />
        default:
            return null
    }
}