import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions';

function HooksCakeContainer() {
    const numOfCakes = useSelector((state) => state.numOfCakes )
    const dispatch = useDispatch();
    return (
    <div>
        <h2>Number oF Cakes - { numOfCakes }</h2>
        <button onClick={() => dispatch(buyCake())}>Buy Cake Via Hooks</button>
    </div>
  )
}

export default HooksCakeContainer