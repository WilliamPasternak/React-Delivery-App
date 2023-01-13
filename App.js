import React from 'react'
import Header from './components/Header'
import Card from './components/Card'



export default function App(){ 
    const [orders, setOrders] = React.useState([
        {id:1, driverName: 'D-Jacob B.', forName: 'Jacob B.', mins: 27, placed: '1:30PM', address: '450 Madison Ave',  status: 'preparing' },
        {id:2, driverName: 'D-Mike M.', forName: 'Mike M.', mins: 42, placed: '2:40PM', address: '240 Lexington Ave', status: 'preparing' },
        {id:3, driverName: 'D-Jenny R.', forName: 'Jenny R.', mins: 55, placed: '3:15PM', address: '335 Park Ave',  status: 'preparing'},
        {id:4, driverName: 'D-Sam J.', forName: 'Sam J.',  mins: 28, placed: '1:45PM', address: '120 Park Ave',  status: 'preparing'},
        {id:5, driverName: 'D-Ben L.', forName: 'Ben L.',  mins: 30, placed: '2:30PM', address: '218 7th Ave', status: 'preparing'},
        {id:6, driverName: 'D-Jake W.', forName: 'Jake W.',  mins: 22,  placed: '1:30PM', address: '124 West 57th Street', status: 'preparing' },
        {id:7, driverName: 'D-Liz T.', forName: 'Liz T.',  mins: 16,  placed: '1:30PM', address: '423 West 55th Street', status: 'out' },
    ])
     
    function changeStatus(id){
        let currentOrder = orders.filter(order => order.id === id)
        currentOrder[0].status = `${currentOrder[0].status === 'preparing' ? 'ready' : 'preparing'}`
        setOrders(prevValue => [...prevValue],currentOrder[0])
    }

    // Filter orders into their respective types
    const preparing = orders.filter(order => order.status === 'preparing')
    const ready = orders.filter(order => order.status === 'ready')
    const out = orders.filter(order => order.status === 'out')
    
    return(
        <div>
            <Header />
            <main>
               <Card title = {`Preparing Order (${preparing.length})`} color = '#fa9802' orders={orders} status = 'preparing' changeStatus = {changeStatus}  />
               <Card title = {`Ready for Delivery (${ready.length})`} color ='#008a00' orders={orders} status = 'ready' changeStatus = {changeStatus} />
               <Card title = {`Out for Delivery (${out.length})`} color ='#1e5bd1' orders={orders} status = 'out' changeStatus = {changeStatus} />     
            </main>
        </div>
    )
}