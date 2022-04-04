import React from "react"
import { NAVIGATION } from '../../../constants/types'
import NavigationItemClassick from "./navigation-classick"
import NavigationItemMega from "./navigation-mega"

export default function Navigation({ menu, changeIsOpened }) {
    return menu.map(el => {
        switch (el.__typename) {
            case NAVIGATION.CLASSICK:
                return <NavigationItemClassick changeIsOpened={changeIsOpened} data={el} />
            case NAVIGATION.MEGA:
                return <NavigationItemMega changeIsOpenedOuter={changeIsOpened} data={el} />
            default:
                return <></>
        }
    })
}