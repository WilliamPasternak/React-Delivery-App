import React from 'react'
export default function Title(props){
    
const [isOpen,setIsOpen] = React.useState(false)
const toggle = () => setIsOpen(prevValue => !prevValue)

    return(
        <div className ='header--title' onClick = {toggle} >
           <div className = 'header--circle' style = {{backgroundColor: isOpen ? 'green' : 'red'}}> </div>
            <h1>  {props.title} </h1>
        </div>
    )
}