import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'

import lookupCharacterHash from './../helpers/lookupCharacterHash'

let character = props => {
  const { id, char, query } = props
  console.log("char",char)
  return <Fragment>
    <Head>
      <title>Character {id}</title>
    </Head>
    <h1>Character: {id}</h1>
  </Fragment>
}

const mapStateToProps = (state, props) => {
  const hash = props.router.query.hash||0
  const id = lookupCharacterHash(hash,state.characters)
  const char = state.characters[id]||{}
  return {char}
}

const characterWithState = connect(mapStateToProps)(character)
export default characterWithState