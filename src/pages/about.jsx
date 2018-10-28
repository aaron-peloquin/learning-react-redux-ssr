import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'

import Navigation from '../Navigation'

import addCharacter from '../store/dispatcher/addCharacter'

const about = (props) => {
  const { dispatch } = props

  return <Fragment>
      <Head>
        <title>About</title>
      </Head>
      <Navigation />
      <h1 onClick={()=>{addCharacter(dispatch)}}>About</h1>
    </Fragment>
  }

export default connect()(about)