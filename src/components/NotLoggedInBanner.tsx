import React from 'react'
import loginIcon from '../assets/login.svg'
const LOGIN_LINK = `https://egoblock-b17ad.web.app/motoverse/walletAuth?redirectUrl=${window.location.href}`

export default function NotLoggedInBanner() {

    return (
        <div className='d-flex flex-column align-items-center justify-content-center mt-5'>
            <img src={loginIcon} style={{ width: '200px' }} alt="login" />
            <p>Login before accessing the Game</p>
            <a href={LOGIN_LINK}>
                <button type="button" className="btn btn-outline-primary me-2">Login</button>
            </a>
        </div>
    )
}
