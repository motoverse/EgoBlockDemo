import React from 'react'
const LOGIN_LINK = `https://egoblock-b17ad.web.app/demo-app/walletAuth?redirectUrl=${window.location.href}`

export default function NotLoggedInBanner() {

    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <div style={{ fontSize: '10rem' }}>✋</div>
            <p>Login before accessing the Game</p>
            <a href={LOGIN_LINK}>
                <button type="button" className="btn btn-outline-primary me-2">Login</button>
            </a>
        </div>
    )
}
