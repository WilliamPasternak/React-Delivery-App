import React from 'react'
import Order from './Order'
import InTransitOrder from './InTransitOrder'


export default function Card(props){

// Filter orders into their respective types
const preparing = props.orders.filter(order => order.status === 'preparing') // Array of orders marked 'preparing'
const ready = props.orders.filter(order => order.status === 'ready')
const out = props.orders.filter(order => order.status === 'out')

// Sets Button Text
let btnText = ""
if(props.status === 'preparing' ){
    btnText = 'Mark Ready' 
}
else if(props.status === 'ready'){
    btnText = 'Send Back'
}
else if(props.status === 'out'){
    btnText = 'Being Delivered'
}


// Create list of all orders being prepared
    const isPreparing = preparing.map(order => 
        <Order 
            btnColor = '#008a00'
            btnFont = '#fff'
            btnText = {btnText} 
            forName = {order.forName}
            mins = {order.mins} 
            placed = {order.placed} 
            address = {order.address}
            id = {order.id}
            changeStatus = {props.changeStatus}
             />
    )

// Create list of all orders marked as ready
    const isReady = ready.map(order => 
            <Order 
                btnColor = '#e4e3e5'
                btnFont = '#000'
                btnText = {btnText}
                key = {order.id}
                forName = {order.forName} 
                mins = {order.mins} 
                placed = {order.placed} 
                address = {order.address} 
                id = {order.id}
                changeStatus = {props.changeStatus}


                />
        )

    // Create list of all orders out for delivery
        const isOut = out.map(order => 
                <InTransitOrder 
                    btnColor = '#e4e3e5'
                    btnFont = '#9e9ea0' 
                    btnText = {btnText} 
                    miles = {0.24}
                    key = {order.id}
                    forName = {order.forName}
                    driverName = {order.driverName} 
                    placed = {order.placed} 
                    address = {order.address} />
            )

    return(
        <div className ='card'> 
          <h1 style={{ backgroundColor: props.color, }}> {props.title} </h1>
          {props.status === 'preparing' && isPreparing}
          {props.status === 'ready' && isReady}
          {props.status === 'out' && isOut}
        </div>
    )
}