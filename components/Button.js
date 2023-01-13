import React from 'react'

export default function Button(props){
    return(
        <div> 
            <button 
            onClick={ () => props.changeStatus(props.id) }
            id = {props.id}
            style={{ 
                backgroundColor: props.backgroundColor, 
                color: props.color,
                }}> {props.text}
                </button>
        </div>
    )
}