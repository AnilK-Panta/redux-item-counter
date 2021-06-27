import React from 'react'
import { connect } from 'react-redux'


const ItemContainer= (props)=>{
    return(
        <>
            <h2>Items - {props.item}</h2>
        </>
    )
}

const mapStateToProps = (state, ownProps)=>{
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream

    return{
        item: itemState
    }
}

export default connect(mapStateToProps)(ItemContainer) 