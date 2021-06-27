import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux/cakes/cakeAction'

function HookCakeContainer(){
    const noOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return(
        <>
        <h2>Num of cakes - {noOfCakes}</h2>
        <button onClick={()=> dispatch(buyCake())}>Buy Cakes</button>
        </>
    )
}

export default HookCakeContainer