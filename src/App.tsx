import './App.css'
// import {Router} from "./router.tsx";
import {SoundBar} from "./components/sound-bar/sound-bar.tsx";
// import ReactPlayer from 'react-player'
// import {useEffect, useRef, useState} from "react";
// import axios from "axios";
import ava from './assets/images/ava.jpg'
import {useEffect, useState} from "react";
import axios from "axios";


export const App = () => {
    const [track, setTrack] = useState('');
    useEffect(() => {
        axios.get('http://localhost:3000/track').then((res) => setTrack(res.data.download))
    }, [])
    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '100vh',
    }}>
        <SoundBar title={'Title'} author={'Author'} poster={ava} track={track} nextTrack={() => {
        }} prevTrack={() => {
        }}/>
    </div>
//     const [track, setTrack] = useState('');
//     const playerRef = useRef<ReactPlayer | null>(null);
//     useEffect(() => {
//         axios.get('http://localhost:3000/track').then((res)=> setTrack(res.data.download))
//     }, [])
//     const handlePlay = () => {
//         if (playerRef.current) {
//             playerRef.current.getInternalPlayer().play()
//         }
//     };
//
//     return <div>
//         <ReactPlayer
//             ref={playerRef}
//             controls={false}
//             url={track}
//         />
//         <button onClick={handlePlay}>play</button>
//
//     </div>
}

export default App
