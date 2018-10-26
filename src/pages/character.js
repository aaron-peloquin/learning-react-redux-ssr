import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../Navigation'

const character = (props) => {
  console.log("Component Props", props)
  const { id, char, query } = props

  return <Fragment>
    <Head>
      <title>Character {id}</title>
    </Head>
    <Navigation />
    <h1>Character: {id}</h1>
  </Fragment>
}

const mapStateToProps = (state, props) => {
  console.log("props", props)
  const {id} = props
  return {char:state.characters[id]}
}

export default connect(mapStateToProps)(character)