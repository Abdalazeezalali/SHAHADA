import { useEffect, useRef, useState } from "react"

const useSpeechToText = (options) => {
    const [isListening,setIsListening]=useState(false)
    const [transcript,settranscript]=useState("")
    const recgonitionRef=useRef(null)
    useEffect(() => {
        if(!("webkitSpeechRecognition" in window)){
            document.write("web speech api is not support in your browser")
            return;
        }
        recgonitionRef.current=new window.webkitSpeechRecognition()
        const recgonition=recgonitionRef.current
        recgonition.interimResults=options.interimResults || true
        recgonition.lang=options.lang || "en-US" 
        recgonition.continuous=options.continuous || false
        if("webkitSpeechGrammarList" in window){
            const grammar="#JSGF V1.0; grammar punctuation; public <punc> = . | , | ? | ! | ; | : ;"
            const speechRecognitionList=new window.webkitSpeechGrammarList()
            speechRecognitionList.addFromString(grammar,1)
            recgonition.grammars=speechRecognitionList
        }
        recgonition.onresult=(event)=>{
            let text=""
            for(let i=0;i<event.results.length;i++){
                text +=event.results[i][0].transcript
            }
            settranscript(text)
        }
        recgonition.onerror=(event)=>{
            console.error(event.error)
        }
        recgonition.onend=(event)=>{
            setIsListening(false)
            settranscript("")
        }
        return()=>{
            recgonition.stop()
        }
    }, [])
    const startListening=()=>{
        if(recgonitionRef.current && !isListening){
            recgonitionRef.current.start()
            setIsListening(true)
        }
    }
    const stopListening=()=>{
        if(recgonitionRef.current && isListening){
            recgonitionRef.current.stop()
            setIsListening(false)
        }
    }
  return {
    isListening,transcript,startListening,stopListening
  }
}

export default useSpeechToText
