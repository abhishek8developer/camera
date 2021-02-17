import React from 'react'
import MyFrame from './components/MyFrame'
import MainFrame from './components/MainFrame'
import { Button, Span, Input, Flex } from '../styled'
import { IDevice } from '../types'
const ENDPOINT = 'http://localhost:4000'

const cameraVideoSize = {
    width: { ideal: 1280 },
    height: { ideal: 720 }
}

export function getCamStream({ a, v, callback }: any) {
    let nav: any = navigator
    nav.getUserMedia = nav.getUserMedia || nav.webkitGetUserMedia || nav.mozGetUserMedia || nav.msGetUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: v ? { ...cameraVideoSize, ...v } : v, audio: a }).then(function (stream: any) {
            callback(stream)
        })
    }
    return null
}

function LiveFeed() {
    const [meetId, setMeetId] = React.useState('')
    const [data, setData] = React.useState(null)

    const [videoDevices, setVideoDevices] = React.useState<Array<IDevice>>([])
    const [audioDevices, setAudioDevices] = React.useState<Array<IDevice>>([])

    const [videoOrganiser, setVideoOrganiser] = React.useState(false)
    const [deviceId, setDeviceId] = React.useState('')
    const [videoSize, setVideoSize] = React.useState([640, 480])
    const [video, setVideo] = React.useState(false)
    const [invertX, setInvertX] = React.useState(false)
    const [invertY, setInvertY] = React.useState(false)
    const [audio, setAudio] = React.useState(false)
    const [img, setImg] = React.useState('')
    const camRef = React.useRef<any>(null)
    const mainCamRef = React.useRef<any>(null)

    function manipulatevideoVideo() {
        if (audio || video) {
            getCamStream({
                a: audio,
                v: deviceId ? { deviceId } : video,
                callback: (stream: any) => {
                    const video = (document as any).getElementById('cam')
                    camRef.current.srcObject = stream
                    camRef.current.play()
                    let canvas: any = document.createElement('canvas')
                    canvas.width = video.getBoundingClientRect().width
                    canvas.height = video.getBoundingClientRect().height
                    console.log(canvas)
                    canvas.getContext('2d').drawImage(video, 0, 0)
                    const data = canvas.toDataURL('image/png')
                    setImg(data)
                }
            })
        }
        if (!video && camRef.current && mainCamRef.current) {
            mainCamRef.current.srcObject = {}
            camRef.current.srcObject = {}
        }
    }

    async function getDevices() {
        try {
            let devices = await navigator.mediaDevices.enumerateDevices()
            let fetchedVideoDevices: Array<IDevice> = []
            let fetchedAudioDevices: Array<IDevice> = []
            devices.forEach((device) => {
                let d = device
                if (device.kind == 'videoinput') {
                    fetchedVideoDevices.push(d)
                }
                if (device.kind == 'audioinput') {
                    fetchedAudioDevices.push(d)
                }
            })
            setVideoDevices(fetchedVideoDevices)
            setAudioDevices(fetchedAudioDevices)

        } catch (e) {
            console.error('Error fetching devicces: ', e)
        }
    }

    React.useEffect(() => {
        getDevices()
        let h: number = window.innerHeight
        let w: number = window.innerWidth
        console.log(h, w);
        
        if(w < h) {
            setVideoSize([Math.floor(w), Math.floor(w*3/4)])
        } else {
            setVideoSize([Math.floor((h-100)*4/3), Math.floor(h-100)])
        }
    }, [])

    React.useEffect(() => {
        manipulatevideoVideo()
    }, [audio, video, deviceId])
    console.log(videoSize);

    return (
        <Flex column className='container'>
            <Flex className='settings'>
                <select onChange={(e: any) => setDeviceId(e.target.value)}>
                    {
                        videoDevices.map((device: IDevice) => (
                            <option value={device.deviceId}>{device?.label?.split('(')[0]}</option>
                        ))
                    }
                </select>
                <Button onClick={() => setInvertX(!invertX)}>Invert Image X</Button>
                <Button onClick={() => setInvertY(!invertY)}>Invert Image Y</Button>
            </Flex>
            {/* <Flex alignItemsCenter>
                <Button variant="primary" onClick={() => { }}>
                    Start a Meeting
                </Button>
                <Span>or</Span>
                <Input placeholder="Enter Meeting code" />
                <Button variant="default">
                    Join
                </Button>
            </Flex>
            {meetId ? `MeetingId: ${meetId.substr(0, 3)} ${meetId.substr(3, 4)} ${meetId.substr(7, 3)}` : ''} */}
            <Span></Span>
            <Flex wrap justifyContentCenter>
                <MainFrame
                    camRef={camRef}
                    invertX={invertX}
                    invertY={invertY}
                    audio={audio}
                    video={video}
                    setAudio={setAudio}
                    setVideo={setVideo}
                    videoSize={videoSize}
                >
                    {/* <MyFrame camRef={camRef} /> */}
                </MainFrame>
            </Flex>
            <img src={img} />
        </Flex>
    )
}

export default LiveFeed
