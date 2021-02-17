import React from 'react'
import { UserFrame, UserVideo } from '../../styled'

function MyFrame({ camRef }: any) {
  return (
    <UserFrame size="small">
      Loading...
      <UserVideo size="small" id="cam" ref={camRef}></UserVideo>
    </UserFrame>
  )
}

export default MyFrame
