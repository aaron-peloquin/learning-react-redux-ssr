import App, {Container} from 'next/app'
import React from 'react'
import withReduxStore from '../store/AppWithRedux'
import { Provider } from 'react-redux'

const MyApp = (props) => {
  const {Component, pageProps, reduxStore} = props
  return (
    <Container>
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    </Container>
  )
}

export default withReduxStore(MyApp)