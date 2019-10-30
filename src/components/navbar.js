import React from 'react'
import { rhythm } from '../utils/typography'
import { Link, graphql } from "gatsby"
import styled from "styled-components";

const StyledLink = styled(props => <Link {...props} />)`
    a {
        color: black;
    }
`;

const NavButton = {
    background: `none`,
    border: `none`,
    cursor: `pointer`
}

const LinkStyle = {
    border: `none`,
    textDecoration: `none`
}

class Navbar extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const navlinks = this.props.navlinks;
        console.log(`TCL: Navbar -> render -> navlinks`, navlinks)

        return (
            <div 
                style={{
                    borderRadius: `30px`,
                    margin: `5px`,
                    background: `#ffffff`, 
                    width: `auto`,
                    position: `sticky`,
                    height: rhythm(1.5),
                    display: `flex`,
                    flexFlow: `row`,
                    flexGrow: `1`,
                    justifyContent: `center`,
                    boxShadow: `0px 0px 5px 5px rgba(0,0,0,0.50)`,
                    width: `100%`,
                    maxWidth: rhythm(30),
                    marginLeft: `auto`,
                    marginRight: `auto`,
                }}>
                    {/* <button style={NavButton}><Link to='/'>Home</Link></button> */}
                    {/* <button style={NavButton} component={Link} to={'/'}>Home</button>
                    <button style={NavButton}><Link style={LinkStyle} to='/resume'>Resume</Link></button> */}
                    <nav>
                        <ul>
                            {navlinks.map(link => (
                                <li key={link.name}>

                                </li>
                            ))}
                        </ul>
                    </nav>
            </div>
        )
    }
}
export default Navbar