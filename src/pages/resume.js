import React from 'react'
import Layout from "../components/layout"
import { Document } from 'react-pdf'
// import { rhythm, scale } from '../utils/typography'
// import Navbar from '../components/navbar'
// import {useStaticQuery, graphql} from 'gatsby'

class Resume extends React.Component {

    render () {
        return (
            <Layout location={this.props.location} title={`Samuel Robertson Resume`}>
                <div>
                    <Document file="../../static/SamuelRobertsonResume.pdf" />
                </div>

            </Layout>
        )
    }
}

export default Resume