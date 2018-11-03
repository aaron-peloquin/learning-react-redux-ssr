import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'

import addCharacter from '../store/dispatcher/addCharacter'

let about = (props) => {
  const { dispatch, title } = props

  return <Fragment>
          <Head>
            <title>{title}</title>
          </Head>

      <h1 onClick={()=>{addCharacter(dispatch)}}>About</h1>
    </Fragment>
  }

  about.getInitialProps = async ({ req }) => {
  const title = "About"
  return { title }
}
  
export default connect()(about)