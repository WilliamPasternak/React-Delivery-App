import React from 'react'
import Title from './Title'

export default function Header(){
    return(
        <header>
            <Title title = 'App Status '/>
            <span><Title title = "Will's Restaurant"/></span>
            <button className ='header--btn'> New Order </button>
        </header>
    )
}