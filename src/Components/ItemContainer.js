import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'


const ItemContainer= (props)=>{
    return(
        <>
            <h2>Items - {props.item}</h2>
            <button onClick={props.buyItem}>buy Item</button>
        </>
    )
}

const mapStateToProps = (state, ownProps)=>{
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream

    return{
        item: itemState
    }
}
const mapDispatchToProp = (dispatch, ownProps)=>{
    const dispatchFunction= ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())

    return{
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(ItemContainer) 