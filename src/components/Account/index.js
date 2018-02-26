import React from "react"
import Loadable from 'react-loadable'
import Loading from '../Loading'
import enhance from './AccountPage/AccountPage.enhancer'

const LoadableComponent = Loadable({
  loader: () => import('./AccountPage'),
  loading: Loading,
})

export default () => <LoadableComponent />
