import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../Navigation'

const index = (props) => {
  const { id, char } = props

  console.log("Character", id, char)

  return <Fragment>
    <Head>
      <title>Character {id}</title>
    </Head>
    <Navigation />
    <h1>Character {id}</h1>
  </Fragment>
}

const mapStateToProps = (state, props) => {
  const {id} = props
  return {char:state.characters[id]}
}

export default connect(mapStateToProps)(index)