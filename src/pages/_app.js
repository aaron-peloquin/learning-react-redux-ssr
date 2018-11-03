import App, {Container} from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'

import withReduxStore from './../store/AppWithRedux'

import Navigation from '../components/Navigation'

const MyApp = (props) => {
  const {Component, pageProps, router, reduxStore} = props
  return (
    <Container>
      <Navigation />
      <Provider store={reduxStore}>
        <Component {...pageProps} router={router} />
      </Provider>
    </Container>
  )
}

export default withReduxStore(MyApp)