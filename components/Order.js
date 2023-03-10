import React from 'react'
import Button from './Button'

export default function Order(props){

    return(
        <div className ='delivery'>
            <div className = 'order'>
            <img className ='order--logo' src = 'https://149346410.v2.pressablecdn.com/wp-content/uploads/2014/09/Postmates-Logo-Black-500x500.png'/>
                <div className = 'order--left'>
                    <p className='order--name'> {props.forName}</p>
                    <div className = 'mins--container'> 
                        <span className='order--mins'> {props.mins} </span>
                        <span className='order--until'> mins until delivery </span>
                    </div>
                </div>
                <div className= 'order--center'>
                    <p>{props.address}</p>
                    <p>Placed at {props.placed}</p>
                </div>
                
                <div className = 'order--right'>
                    <Button 
                        id = {props.id}
                        text = {props.btnText} 
                        backgroundColor = {props.btnColor}
                        color = {props.btnFont}
                        changeStatus = {props.changeStatus}
                         />
                    <a href = '#' > <p> Support </p></a>
                </div>
            </div>
        </div>
            
    )
}