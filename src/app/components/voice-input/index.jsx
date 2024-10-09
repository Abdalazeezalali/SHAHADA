import {useState} from"react"
import useSpeechToText from "../../hooks/useSpeechToText"
import Lottie from "lottie-react"
import test1 from "../../../../public/animations/test2.json"
const VoiceInput=()=>{
    const [textInput,setTextInput]=useState("")
    const {isListening,transcript,startListening,stopListening}=useSpeechToText({continuous:true})
    const startStopListening=()=>{
        isListening ? stopVoiceInput() : startListening()
    }
    const stopVoiceInput=()=>{
        setTextInput(prevVal=>prevVal +(transcript.length ?(prevVal.length?" ":"") +transcript :""))
        stopListening()
    }
    return(
        <div className="flex flex-col items-center pt-5 gap-2">
        <button className="p-2 rounded-full " onClick={()=>{startStopListening()}} style={{backgroundColor:isListening?"rgba(255,0,0,0.8)":"rgba(0,255,0,0.45)"}}>{isListening ? "Stop listening" :"Speak"}</button>
            <textarea className="border-2 border-gray-500 resize-none w-60 h-24 rounded-md text-black" value={isListening? textInput + (transcript.length ?(textInput.length ?" " : " ")+transcript : " " ) :textInput} onChange={(e)=>{setTextInput(e.target.value)}} disabled={isListening}/>
            <Lottie  animationData={test1}className="mx-auto mb-4 w-72 shadow-lg" />
            <button className="bg-indigo-600 p-2 rounded-full"style={{display:isListening?"block":"none"}}>Good Work</button>
            <p>Ashadu an la ilaha ila allah wa ashadu ana mohammed rasoul allah</p>
            <b className="capitalize">This sentence means: I bear witness that there is no god but God and I bear witness that Muhammad is the Messenger of God.</b>
        </div>
    )
}
export default VoiceInput