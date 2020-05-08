import React from 'react'
import { Link } from "gatsby"
import './navbar.scss';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar__container">
                    <button className="navbar__button-neumorphic"><Link to="/">Home</Link></button>
            </div>
        )
    }
}
export default Navbar