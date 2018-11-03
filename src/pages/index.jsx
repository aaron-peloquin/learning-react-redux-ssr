import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import Head from 'next/head'

import Ele from '../components/Ele'

import editCharacter from '../store/dispatcher/editCharacter'

let index = (props) => {
  const { dispatch, title } = props
  return <Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    <h1 onClick={()=>{
      editCharacter(dispatch,2,{name:"New Name",image:"https://example.com/image.png"})
    }
    }>Home</h1>
    <Ele />
  </Fragment>
}

  index.getInitialProps = async ({ req }) => {
    const title = "Home"
    return { title }
  }

export default connect()(index)