import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../Navigation'

const index = (props) => {
  const { dispatch, chars } = props
  let editing = new Array()
  let charI = 0
  return <Fragment>
    <Head>
      <title>Characters List</title>
    </Head>
    <Navigation />
    <h1>Characters</h1>
    <ul>
      {chars.map((char,k)=>{
        charI++
        if(typeof editing[k] == 'undefined') {
          editing[k] = false
        }
        return <li key={k}>
          <Link href={`/character/${k}`}>{char.name}</Link>
        </li>
      })}
    </ul>
  </Fragment>
}

const mapStateToProps = state => {
  return {chars:state.characters}
}

export default connect(mapStateToProps)(index)