import React from "react"
import Loadable from 'react-loadable'
import Loading from '../Loading'
import enhance from './SignupPage/SignupPage.enhancer'

const LoadableComponent = Loadable({
  loader: () => import('./SignupPage'),
  loading: Loading,
})

export default () => <LoadableComponent />
