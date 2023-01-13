import React from 'react'

export default function Driver(props){
    return(
       <div className = 'driver'>
       <div className ='driver--name'>
            <p> {props.driverName}</p>
            <p> &#9733; &#9733; &#9733; &#9733; &#9733; </p>
        </div>
            <p> <em>is {props.mins} minutes away</em> </p>
        </div>
    )
}