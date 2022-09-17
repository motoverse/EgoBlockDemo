import React from 'react'
import banner from '../assets/banner.png'

export default function Header() {

    return (
        <div style={{ backgroundImage: `url(${banner})` }} className="border-bottom">

            {/* <div className="container" > */}
            <header className="d-flex align-items-center py-3 ms-4">
                <a href="/" className="rounded-pill mb-2 mb-md-0 text-primary text-decoration-none bg-light p-1"
                    style={{ boxShadow: '5px 5px 10px var(--bs-light)' }}>
                    <h5 className='m-0'>EgoBlock - Demo Application</h5>
                </a>

            </header>
            {/* </div> */}
        </div>
    )
}

