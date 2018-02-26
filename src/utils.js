import React from 'react'
import { branch, renderComponent } from 'recompose'
import { isLoaded } from 'react-redux-firebase'
import md5 from 'md5'
import Loading from './components/Loading'

export const required = value => (value ? undefined : 'Required')

export const validateEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const profileAvatarUrl = profile => (
  profile.avatarUrl ||
  'https://www.gravatar.com/avatar/'+md5(profile.email||'')+'?d=mm'
)

export const spinnerWhile = condition =>
  branch(condition, renderComponent(Loading))

export const spinnerWhileLoading = propNames =>
  spinnerWhile(props =>
    !!propNames.find(name => !isLoaded(props[name]))
  )
