import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'


const listCharacters = (props) => {
  const { dispatch, chars } = props
  let editing = new Array()
  let charI = 0
  return <Fragment>
    <h1>Characters</h1>
    <ul>
      {chars.map((char,k)=>{
        charI++
        if(typeof editing[k] == 'undefined') {
          editing[k] = false
        }
        return <li key={k}>
          <Link as={`/character/${char.hash}`} href={`/character?hash=${char.hash}`}><a>{char.name}</a></Link>
        </li>
      })}
    </ul>
  </Fragment>
}

const mapStateToProps = state => {
  return {chars:state.characters}
}

export default connect(mapStateToProps)(listCharacters)