import React, { useState } from 'react';
import { connect } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeAction'

function NewCakeComponent(props) {

    const [number, setNumber] = useState(1)

    return (
        <>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProp = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}



export default connect(mapStateToProps, mapDispatchToProp)(NewCakeComponent)