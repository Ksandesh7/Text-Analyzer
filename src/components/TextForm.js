import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("UpperCase clicked")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        // console.log("LowerCase clicked")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () => {
        let Text = document.getElementById("mybox");
        Text.select();
        navigator.clipboard.writeText(Text.value);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const findMostFrequentWord = () => {

        const words = text.toLowerCase().match(/\b\w+\b/g)
        const wordCountMap = {};

        if(words) {
            words.forEach((word) => {
                wordCountMap[word] = (wordCountMap[word] || 0) + 1;
            });
        }

        let maxCount = 0;
        let mostFrequent ='';

        for(const word in  wordCountMap) {

            if(wordCountMap[word] > maxCount) {
                maxCount = wordCountMap[word];
                mostFrequent = word;
            }
        }
        
        setMostFrequentWord(mostFrequent);
        props.showAlert("Frequently used word updated", "success");
    }


    const handleOnChange = (event) => {
        // console.log("handle on change clicked");
        let newText = event.target.value;
        setText(newText);
    }


    const [text, setText] = useState('');
    const [mostFrequentWord, setMostFrequentWord] = useState('');
    return (
    <>
        <div className='container' style={{color: props.mode==='light'? 'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey': 'white', color:props.mode=== 'dark'?'white': 'black'}} id="mybox" rows="8" ></textarea>
                <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1 my-1' onClick={findMostFrequentWord}>Find Frequent Word</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleClear}>Clear</button>
            </div>
        </div>

        <div className='container' style={{color: props.mode==='light'? 'black':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(' ').filter((element)=>{return element.length!==0}).length}-Words & {text.length}-Characters</p>
            <p>{parseFloat(0.008 * text.split(' ').length)} minutes read</p>

            <h2>Most Frequent word</h2>
            <p>{mostFrequentWord}</p>

            <h2>Preview</h2>
            <p>{text.length>0 ? text:"Enter something in the textBox to Preview"}</p>
        </div>
    </>
  )
}
