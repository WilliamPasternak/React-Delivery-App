import React from 'react'
import Order from './Order'
import InTransitOrder from './InTransitOrder'
import Driver from './Driver'

export default function InTransit(props){
  
    return(
        <div className = 'inTransit'> 
            <Driver driverName = 'Will P.' mins ={props.mins} />
            <InTransitOrder  miles = {props.miles} orderName = {props.forName} address = {props.address} />
        </div> 
    )
}



