import React from "react"
import Loadable from 'react-loadable'
import Loading from '../Loading'
import enhance from './LoginPage/LoginPage.enhancer'

const LoadableComponent = Loadable({
  loader: () => import('./LoginPage'),
  loading: Loading,
})

export default () => <LoadableComponent />
