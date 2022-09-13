import React from 'react'
import { User } from '../models/User'

interface Props {
    user: User
}

export default function Game(props: Props) {
    const user = props.user;
    return (
        <div>
            <h2 className='text-secondary'>Game</h2>
            <div>User: {user.uid}</div>
            <div className='d-flex align-items-center'>
                <div>NFTs Count:</div>
                <div className={`badge ms-2 rounded-pill bg-success`}>{user?.tokens?.length || 0}</div>
            </div>
        </div>

    )
}
