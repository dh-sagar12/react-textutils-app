import React, { useState } from 'react'
import ReplaceText from './ReplaceText';

const TextForm = (props) => {

    const [text, setText] = useState("");
    let changeText = (event) => {
        let { value } = event.target
        setText(value)
    }
 

    let capitalizeText = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Texts Are Now Capitalized', 'success ')

    }

    let lowercaseText = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    let ReplaceTextFunc = (object)=>{
        if (text.includes(object.find)){
            let updatedText = text.replace(object.find, object.replace)
            return setText(updatedText)
        }
        else
            return null
        }

    let capitaliseFirst = ()=> {
       let listOfWords = text.split(" ");
       let updatedList = []
       console.log(listOfWords);
       for (let i in listOfWords){
            updatedList.push(listOfWords[i].charAt(0).toUpperCase() + listOfWords[i].slice(1));
            console.log(updatedList);
            let updatedText = updatedList.join(" ")
            setText(updatedText)
            
       }
       
    }

    let copyToClipboard =()=>{
        let text = document.getElementById('myTextBox');
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()


        
    }

    let clearText = ()=>{
        setText("")
    }

    return (
        <>
        <div className={"container "+ props.darkMode}>

            <div className="mt-3 ">
                <h4>{props.Heading}</h4>
                <textarea className={"form-control text-form "+props.darkMode} id="myTextBox" rows="8" value={text} onChange={changeText}></textarea>
            </div>
            <div className={"text-summary mb-3 "+ props.darkMode}>
                <h4>Total Characters: {text.length}</h4>
                <h4>Total Words: {text.split(" ").filter((elem)=> elem.length !== 0).length}</h4>
            </div>
            <button disabled={text.length===0}  className="btn btn-outline-primary mx-1 my-1" onClick={capitalizeText}>{props.Button1}</button>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={lowercaseText}>{props.Button2}</button>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={capitaliseFirst}>Capitalize First Letter</button>

            <button disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={copyToClipboard}>Copy Text</button>

            <ReplaceText ReplaceTextFunc= {ReplaceTextFunc} darkMode= {props.darkMode}/>
            <button disabled={text.length===0} className="btn btn-outline-danger mx-1 my-1" onClick={clearText}>Clear Text</button>
            <hr />
            <div className="my-3 pb-4">
                <h2>Your Text Preview</h2>
                <div className="my-2 text-break h-2">
                    <p>{text}</p>
                </div>
            </div>

        </div>
        </>
    )
}

export default TextForm
