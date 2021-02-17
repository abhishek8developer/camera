import React from 'react'
import { UserFrame, UserVideo, MainFrameWrapper, Action } from '../../styled'
import { FaMicrophone, FaMicrophoneSlash, FaPhone, FaVideo } from 'react-icons/fa'

const style = {
  icons: {
    color: '#727272',
    margin: 5,
    border: '1px solid #727272',
    borderRadius: '50%',
    padding: 5,
    height: 25,
    width: 25
  }
}

function MainFrame({ children, invertX, invertY, videoSize, camRef, audio, video, setAudio, setVideo }: any) {
  return (
    <MainFrameWrapper>
      <UserFrame size="big">
        {video ? 'Loading feed...' : 'Enable Video.'}
        <UserVideo
          invertX={invertX}
          invertY={invertY}
          style={{ height: videoSize[1], width: videoSize[0] }}
          size="big"
          id="cam"
          ref={camRef}
        />
      </UserFrame>
      <Action>
        {video && audio ? (
          <FaMicrophone style={style.icons} onClick={() => setAudio(false)} />
        ) : video && !audio ? (
          <FaMicrophoneSlash style={style.icons} onClick={() => setAudio(true)} />
        ) : null}
        {/* <FaPhone style={{ transform: 'rotate(90deg)', ...style.icons }} /> */}
        <FaVideo
          style={{ background: video ? 'red' : 'transparent', ...style.icons }}
          onClick={() => setVideo(!video)}
        />
      </Action>
      {/* {video ? <div style={{ position: 'absolute', bottom: 10, right: 10 }}>{children}</div> : null} */}
    </MainFrameWrapper>
  )
}

export default MainFrame
