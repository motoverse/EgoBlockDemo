import React from 'react'

export default function Header() {
    const loginLink = `https://egoblock-b17ad.web.app/demo-app/walletAuth?redirectUrl=${window.location.href}`
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-primary text-decoration-none">
                    EgoBlock - Demo Application
                </a>

                <div className="col-md-3 text-end">
                    <a href={loginLink}>
                        <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    </a>
                </div>
            </header>
        </div>
    )
}
