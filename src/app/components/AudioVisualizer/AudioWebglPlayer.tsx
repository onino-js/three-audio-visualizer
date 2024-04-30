"use client";
import { useEffect, useRef } from "react"
import { AudioPlayer, AudioVisualizer } from "./audio-visualizer";
import { Track } from "./audio-visualizer/model";

import styles from "./AudioWebglPlayer.module.scss";
// import audioFile from "./full.mp3"

const trackExemple: Track = {
    trackId: "track1",
    title: "Track 1",
    authorId: "author1",
    date: "2022-09-07",
    duration: "3:45",
    url: "/tracks/audio-example/full.mp3",
    // stems: [
    //   {
    //     type: stemType.VOICE,
    //     url: "#url-to-audio-wav.wav",
    //   },
    //   {
    //     type: stemType.DRUMS,
    //     url: "#url-to-audio-wav.wav",
    //   },
    //   {
    //     type: stemType.BASS,
    //     url: "#url-to-audio-wav.wav",
    //   },
    // ],
  };

const AUDIO_ELEMENT_ID = "audio-content";
const VISUALIZER_ELEMENT_ID = "audio-content";

export const AudioWebglPlayer = () => {
    const audioPlayer: any = useRef();
    const isInitialized = useRef(false);

    const initViz = () => {
        audioPlayer.current = new AudioPlayer(AUDIO_ELEMENT_ID,VISUALIZER_ELEMENT_ID, AudioVisualizer)
        audioPlayer.current.loadTrack(trackExemple);
        isInitialized.current = true;
    }
    const onPlay = () => {
        !isInitialized.current && initViz();
        audioPlayer.current.play();
    }
    const onPause = () => {
        audioPlayer.current.pause();
    }
    const onStop = () => {
        audioPlayer.current.stop();
    }
    return <div className={styles.AudioWebglPlayer}>
          <div className={styles.visualizer} id={AUDIO_ELEMENT_ID}></div>
    <div className={styles.audio__controls}>
      <button id="play" onClick={onPlay}>PLAY</button>
      <button id="pause"  onClick={onPause}>PAUSE</button>
      <button id="stop"  onClick={onStop}>STOP</button>
    </div>
    </div>
}