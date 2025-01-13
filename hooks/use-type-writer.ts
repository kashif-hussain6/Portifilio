import {useState , useEffect} from "react";



export function useTypeWriter(text:string , speed:number = 50){

    const [displayedText , setDisplayedText] = useState("");
    const [isComplete , setIsComplete] = useState(false);
    useEffect(()=>{
        let i=0;
        const timer =  setInterval(()=>{
            if(i < text.length){

                setDisplayedText((prev)=> prev + text.charAt(i));
                i++;

            } else {
                clearInterval(timer);
                setIsComplete(true);
            }   
        },
            speed);
            return () => clearInterval(timer);

    },[ text,speed]);

    return {displayedText , isComplete};
} 