import React, { useState, useEffect } from "react"

const NavBar = () => {
    const [active, setActive] = useState(false)
    const [navBarActiveClass, setNavBarActiveClass] = useState('')
  
    useEffect(() => {
      active
      ? setNavBarActiveClass('is-active')
      : setNavBarActiveClass('')
    }, [active])
  
    const toggleHamburger = () => {
      setActive(!active)
    }

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <p>Benjamin Durand</p>
                    </a>
                    <span
                        className={`navbar-burger burger ${navBarActiveClass}`}
                        data-target="navbarMenu"
                        onClick={() => toggleHamburger()}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenu" className={`navbar-menu ${navBarActiveClass}`}>
                    <div className="navbar-end">
                        <a className="navbar-item">About</a>
                        <a className="navbar-item">Profile</a>
                        <a className="navbar-item">Blog</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar