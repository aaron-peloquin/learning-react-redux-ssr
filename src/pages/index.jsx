import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import Head from 'next/head'

import Ele from '../components/Ele'

import editCharacter from '../store/dispatcher/editCharacter'

const index = (props) => {
  const { dispatch } = props
  
  return <Fragment>
    <Head>
      <title>Home</title>
    </Head>
    <h1 onClick={()=>{
      editCharacter(dispatch,2,{name:"New Name",image:"https://example.com/image.png"})
    }
    }>Home</h1>
    <Ele />
  </Fragment>
}

export default connect()(index)