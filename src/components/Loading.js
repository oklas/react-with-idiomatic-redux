import React from 'react'

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginLeft: -220,
  marginTop: -145,
}

export const Loading = () => (
  <img
    style={styles}
    src = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'
  />
)

export default Loading



