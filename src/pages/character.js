import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'

import Navigation from '../Navigation'

let character = props => {
  console.log("props?", props)
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
  const {id} = props
  return {char:state.characters[id]}
}

// character.componentDidUpdate = (prevProps, prevState, snapshot) => {
//   console.log("prevProps, prevState, snapshot", prevProps, prevState, snapshot)
// }

const characterWithState = connect(mapStateToProps)(character)
export default characterWithState