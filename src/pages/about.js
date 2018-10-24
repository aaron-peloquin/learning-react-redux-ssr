import React, { Fragment } from 'react'

import Head from 'next/head'

import Navigation from './../Navigation'

import addCharacter from './../store/dispatcher/addCharacter'

export default () => <Fragment>
  <Head>
    <title>About</title>
  </Head>
  <Navigation />
  <h1 onClick={()=>{
    alert("addCharacter!")
    addCharacter()
  }}>About</h1>
</Fragment>
