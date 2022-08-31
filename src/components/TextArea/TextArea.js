import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import './TextArea.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function TextArea(props) {
  //using state to store input value 
  const [text, setText] = useState('');
  const [alertType, setAlertType] = useState({alertStatus: 'none', alertMsg:"", alertType:""});

  const onTextChange = (e) => {
    setText(e.target.value);
  }
  
  const changeToUpperCase = () => {
    setText(text.toLocaleUpperCase());
    setAlertType({alertStatus: 'block', alertMsg:"Text changed to upper case", alertType:"success"});
    setTimeout(() => {
      setAlertType({alertStatus: 'none', alertMsg:"", alertType:""});
    } , 1500);
  }
  const changeToLowerCase =() => {
    setText(text.toLocaleLowerCase());
  }
  const capitalizeFirstLetter = () => {
    setText(text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));
  }
  const clearText = () => {
    window.saveText = text;
    setText("");
  }
  const UndoText = () => {
    if(window.saveText !== undefined) {
      setText(window.saveText);
      window.saveText = undefined;
    }
    else {
      setText(text);
      setAlertType({alertStatus: 'block', alertMsg:"Please enter some text / clear the text to undo", alertType:"warning"});
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
