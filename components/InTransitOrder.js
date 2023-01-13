import React from 'react'
import Button from './Button'

export default function InTransitOrder(props){

    return(
<div >
<div className = 'order order--inTransit'>
<img className ='order--logo' src = 'https://logos-download.com/wp-content/uploads/2019/06/GrubHub_Logo-700x700.png'/>
    <div className = 'order--left'>
        <p className='order--name'> {props.orderName}</p>
        <div className = 'mins--container'> 
            <span className='order--mins'> {props.miles} </span>
            <span className='order--until'> mi away </span>
        </div>
    </div>
    <div className= 'order--center'>
        <p>{props.address}</p>
    </div>
    <div className = 'order--right'>

        <Button 
           text = 'Being Delivered' 
           backgroundColor = {props.btnColor}
           color = {props.btnFont} />
        <a href = '#' > <p> Support </p></a>
    </div>
</div>
</div>
    )}
