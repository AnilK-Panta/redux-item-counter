import React from 'react';
import { connect } from 'react-redux'
import {buyCake} from '../redux/cakes/cakeAction'

function CakeComponent(props){
    return(
        <>
        <h2>Number of cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Sell Cake</button>
        </>
    )
}

const mapStateToProps = (state) =>{
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProp = dispatch =>{
    return{
        buyCake: () => dispatch(buyCake())
    }
}



export default connect(mapStateToProps, mapDispatchToProp)(CakeComponent)