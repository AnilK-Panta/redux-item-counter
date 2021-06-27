import React from 'react'
import { buyIceCream } from '../redux/iceCream/iceCreamAction'
import { connect } from 'react-redux'

function IceCreamComponent(props){
    return(
        <>
        <h2>No of IceCream - {props.numOfIceCream}</h2>
        <button onClick={props.buyIceCream}>Sell IceCream</button>
        </>
    )
}

const mapStateToProps = (state) =>{
    return{
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamComponent)