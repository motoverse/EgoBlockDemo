import React from 'react'
import { User } from '../models/User'

interface Props {
    user: User
}

export default function Game(props: Props) {
    return (
        <div>
            <h2 className='text-secondary'>Game</h2>
            <div>User: {props.user.uid}</div>
        </div>

    )
}
