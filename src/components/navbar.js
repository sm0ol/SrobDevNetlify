import React from 'react'
import { rhythm } from '../utils/typography'
import { Link } from "gatsby"
import './navbar.scss';

class Navbar extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className="navbar__container">
                    <button className="navbar__button-neumorphic"><Link to="/">Home</Link></button>
                    {/* <button className="navbar-button-neumorphic" component={Link} to={'/'}><span>Resume</span></button>
                    <button className="navbar-button-neumorphic" component={Link} to={'/'}><span>Portfolio</span></button> */}
                
            </div>
        )
    }
}
export default Navbar