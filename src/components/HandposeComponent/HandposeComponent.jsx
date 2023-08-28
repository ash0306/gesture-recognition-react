import React, {useRef, useState} from 'react'
import './HandposeComponent.css'
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from '../utilities';
import * as fp from 'fingerpose';

function HandposeComponent() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const [msg,setMsg] = useState(null);

    const runHandpose = async () => {
        const net = await handpose.load();
        console.log("Handpose model loaded.");
        
        setInterval(() => {
            detect(net);
        }, 100);
    };
    
    const detect = async (net) => {
        if(
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ){
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            //make the hand detections
            const hand = await net.estimateHands(video);
            console.log(hand);

            if(hand.length > 0) {
                const GE = new fp.GestureEstimator([
                    fp.Gestures.VictoryGesture,
                    fp.Gestures.ThumbsUpGesture,
                ])

                const gesture = await GE.estimate(hand[0].landmarks, 8);
                console.log(gesture);

                if(gesture.gestures !== undefined && gesture.gestures.length > 0){
                    setMsg(gesture.gestures[0].name);
                } 
                else{
                    setMsg("No Gesture");
                }
            }
            else{
                setMsg("No Hand");
            }

            //draw the mesh
            const ctx = canvasRef.current.getContext("2d");
            drawHand(hand, ctx);
        }
    };

    runHandpose();

  return (
    <div className='cam-display'>
        <Webcam ref={webcamRef}/>
        <canvas ref={canvasRef}/>

        {msg && <div className='gesture-name'>{msg}</div>}
    </div>
  )
}

export default HandposeComponent