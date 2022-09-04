import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import './TextArea.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function TextArea(props) {
  //using state to store input value 
  const [text, setText] = useState('');
  const [alertType, setAlertType] = useState({alertStatus: 'none', alertMsg:"", alertType:"success"});
  //? Here in the alertType Ive provided a default value of success instead of "" Because it's showing error in console that
  //todo: Warning: Failed prop type: Invalid prop `severity` of value `` supplied to `ForwardRef(Alert)`, expected one of ["error","info","success","warning"].
  

  const onTextChange = (e) => {
    setText(e.target.value);
  }
  
  const changeToUpperCase = () => {
   if(text.length === 0){
     setAlertType({alertStatus: 'block', alertMsg:"Please enter some text", alertType:"error"});
     setTimeout(() => {
        setAlertType({alertStatus: 'none', alertMsg:"", alertType:"success"});
      }, 1500);
   }
   else if(text.split('').map(char => char.toUpperCase()).join('') === text){
      setAlertType({alertStatus: 'block', alertMsg:"Already text is in uppercase", alertType:"warning"});
      setTimeout(() => {
          setAlertType({alertStatus: 'none', alertMsg:"", alertType:"success"});
        }, 1500);
   }
   else {
    setText(text.toLocaleUpperCase());
    setAlertType({alertStatus: 'block', alertMsg:"Converted to uppercase", alertType:"success"});
    setTimeout(() => {
        setAlertType({alertStatus: 'none', alertMsg:"", alertType:"success"});
      }, 1500);
   }
  }
  const changeToLowerCase =() => {
    if(text.length === 0){
      setAlertType({alertStatus: 'block', alertMsg:"Please enter some text", alertType:"error"});
      setTimeout(() => {
         setAlertType({alertStatus: 'none', alertMsg:"", alertType:"success"});
       }, 1500);
    }
    else if(text.split('').map(char => char.toLowerCase()).join('') === text){
       setAlertType({alertStatus: 'block', alertMsg:"Already text is in lowercase", alertType:"warning"});
       setTimeout(() => {
           setAlertType({alertStatus: 'none', alertMsg:"", alertType:"success"});
         }, 1500);
    }
    else {
     setText(text.toLocaleLowerCase());
     setAlertType({alertStatus: 'block', alertMsg:"Converted to lowercase", alertType:"success"});
     setTimeout(() => {
         setAlertType({alertStatus: 'none', alertMsg:"", alertType:"success"});
       }, 1500);
    }
  }
  const capitalizeFirstLetter = () => {
    setText(text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));
  }
  const trimText = () => {
    setText(text.split(" ").filter(word => word !== "").join(" "));
    // setText(text.split(/[  ]+/).join(" "));   OR USE THIS
   if(text.length > 0){
    setAlertType({alertStatus: 'block', alertMsg:"Extra space removed", alertType:"success"});
    setTimeout(() => {
      setAlertType({alertStatus: 'none', alertMsg:"", alertType:"success"});
    }, 1500);
    }
    else{
      setAlertType({alertStatus: 'block', alertMsg:"Please enter some text", alertType:"warning"});
      setTimeout(() => {
        setAlertType({alertStatus: 'none', alertMsg:"", alertType:"success"});
      }, 1500);
    }
  }
  const clearText = () => {
    if(text.length === 0) {
      setAlertType({alertStatus: 'block', alertMsg:"Nothing to clear", alertType:"warning"});
      setTimeout(() => {
        setAlertType({alertStatus: 'none', alertMsg:"", alertType:"success"});
      }, 1500);
    }
    else {
      setText("");
      window.saveText = text;
      setText(""); 
      setAlertType({alertStatus: 'block', alertMsg:"Text cleared", alertType:"success"});
      setTimeout(() => {
        setAlertType({alertStatus: 'none', alertMsg:"", alertType:"success"});
      }, 1500);
    }
  }
  const UndoText = () => {
    if(window.saveText !== undefined) {
      setText(window.saveText);
      window.saveText = undefined;
    }
    else {
      setText(text);
      if(text.length === 0) {
        setAlertType({alertStatus: 'block', alertMsg:"No text found for undo", alertType:"warning"});
        setTimeout(() => {
          setAlertType({alertStatus: 'none', alertMsg:"", alertType:"success"});
        } , 1500);
      }
      else {
        setAlertType({alertStatus: 'block', alertMsg:"Please clear the text first", alertType:"warning"});
        setTimeout(() => {
          setAlertType({alertStatus: 'none', alertMsg:"", alertType:"success"});
        } , 1500);
      }
      // setAlertType({alertStatus: 'block', alertMsg:"Please enter some text / clear the text to undo", alertType:"warning"});
    }
  }
  // todo: copyToClipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    if(text.length === 0) {
      setAlertType({alertStatus: 'block', alertMsg:"No text found for copy", alertType:"error"});
      setTimeout(() => {
        setAlertType({alertStatus: 'none', alertMsg:"", alertType:"success"});
      } , 1500);
    }
    else {
      setAlertType({alertStatus: 'block', alertMsg:"Text copied to clipboard", alertType:"success"});
      setTimeout(() => {
        setAlertType({alertStatus: 'none', alertMsg:"", alertType:"success"});
      } , 1500);
    }
  }
   
  return (
    <div className="container">
        <Box
            component="form"
            sx={{
            "& .MuiTextField-root": { m: 1, width: "85vw" },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
            onChange = {onTextChange}
            id="filled-multiline-static"
            label={props.label}
            multiline
            rows={8}
            //   defaultValue="Default Value"
            value={text}
            placeholder="Write here"
            variant="filled"
            />

        </Box>

        <div className="buttonSection">
          <button onClick={changeToUpperCase}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M10 18a.75.75 0 01-.75-.75V4.66L7.3 6.76a.75.75 0 11-1.1-1.02l3.25-3.5a.75.75 0 011.1 0l3.25 3.5a.75.75 0 01-1.1 1.02l-1.95-2.1v12.59A.75.75 0 0110 18z" clipRule="evenodd" />
            </svg>
          UpperCase
          </button>
          <button onClick={changeToLowerCase}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M10 2a.75.75 0 01.75.75v12.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V2.75A.75.75 0 0110 2z" clipRule="evenodd" />
            </svg>
          LowerCase
          </button>
          <button onClick = {capitalizeFirstLetter}>
            CapitalizeFirstLetter
          </button>
          <button onClick = {trimText}>
            Trim
          </button>
          <button onClick = {clearText}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
            </svg>
          Clear
          </button>
          <button onClick = {UndoText}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          Undo
          </button>
          <button onClick = {copyToClipboard}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
            </svg>
          Copy
          </button>
        
        </div>
        <div className="alertMsg">
          <div style={{display: alertType.alertStatus}}>
            <Stack sx={{ width: '100%'}} spacing={2}>
              <Alert severity={alertType.alertType}>{alertType.alertMsg}</Alert>
            </Stack>
          </div>
        </div>
        <div className="TextSummarySection">
          <div className="TextSummary">
            <h3>Your Text Summary</h3>
            <span><b>{text.length < 1 && text.includes('') ? 0 : text.split(' ').length }</b>words & <b>{text.length}</b> characters</span>
            <span><b>{0.008 * (text.length < 1 && text.includes('') ? 0 : text.split(' ').length)}</b> minutes reading time</span>
          </div>
          <div className="ViewText">
            <div className="previewHeading">
              <h3>Preview Your Text</h3>
            </div>
            <span>{text}</span>
          </div>
        </div>
      
    </div>
  );
}
