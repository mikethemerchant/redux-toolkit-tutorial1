import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement
} from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => dispatch(increment())}>+</button>
            {count}
            <button onClick={() => dispatch(decrement())}>-</button>
        </>
    )
}