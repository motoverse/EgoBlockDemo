import React from 'react'
import { User } from '../models/User'
import game from '../assets/game.gif'

interface Props {
    user: User
}

export default function Game(props: Props) {
    const user = props.user;
    return (
        <div>
            <div className='text-primary'>User: {user.uid}</div>
            <div className='d-flex align-items-center'>
                <div>NFTs Count:</div>
                <div className={`badge ms-2 rounded-pill bg-danger`}>{user?.tokens?.length || 0}</div>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <img className='mw-100' src={game} alt='game' style={{ boxShadow: '20px 20px 50px grey' }} />
            </div>
        </div>

    )
}
