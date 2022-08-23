import React ,{useState}from 'react'
export default function TextForm(props) {
    const handleUpClick= ()=>{
        console.log("Uppepracase were clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange= (event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    const handleLOClick = (event)=>{
        let newText = text.toLowerCase();
        setText(newText)

    }
    const [text ,setText] = useState("enter text here")
    return (
        <>
    <div className='cointainer' style= {{color: props.mode==='dark'?'white':'black'}}>
           
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">{props.heading}</label>
                
                <textarea className="form-control" value ={text} onChange={handleOnChange} style = {{backgroundColor : props.mode==='light'?'white':'grey'}} id="myBox"  rows="6"></textarea>
            </div>
            
            <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to upperCase</button>
            <button className="btn btn-success mx-2"onClick={handleLOClick}>Convert to upperCase</button>

        </div>
        <div className="cointainer" style= {{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>You have <b>{text.split(" ").length}</b> Words and <b>{text.length} </b>character</p>
            <p>Avg Time To Read"<b> {0.08*text.split(" ").length } </b></p>
            <h1>Preview</h1>
            <p>{text}</p>
            
        </div>
        </>
    )
}
