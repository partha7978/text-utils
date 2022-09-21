import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import './TextArea.css';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// for popup msg
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function TextArea(props) {
  //* using state to store input value 
  const [text, setText] = useState('');
  //* alert msg starts
  const [alertType, setAlertType] = useState({alertStatus: false, alertMsg:"", alertType:""});

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertType({alertStatus: false});
  };
  const showAlertMsg = (alertMsg, alertType) => {
    setAlertType({alertStatus: true, alertMsg:alertMsg, alertType: alertType});
    setTimeout(() => {
      setAlertType({alertStatus: false,alertMsg:alertMsg, alertType: alertType});
    }, 1500);
  }
  //* alert msg ends 
  //! General operation functions
  const onTextChange = (e) => {
    setText(e.target.value);
  }
  const changeToUpperCase = () => {
   if(text.length === 0){
    showAlertMsg("Please enter some text", "warning");
   }
   else if(text.split('').map(char => char.toUpperCase()).join('') === text){
      showAlertMsg("Already text is in uppercase", "warning");
   }
   else {
    setText(text.toLocaleUpperCase());
    showAlertMsg("Converted to uppercase", "success");
   }
  }
  const changeToLowerCase =() => {
    if(text.length === 0){
      showAlertMsg("Please enter some text", "warning");
    }
    else if(text.split('').map(char => char.toLowerCase()).join('') === text){
      showAlertMsg("Already text is in lowercase", "warning");
    }
    else {
     setText(text.toLocaleLowerCase());
     showAlertMsg("Converted to lowercase", "success");
    }
  }
  const capitalizeFirstLetter = () => {
    setText(text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));
    if(text.length === 0) {
      showAlertMsg("Please enter some text", "warning");
    }
    else if(text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") === text) {
     showAlertMsg("Already the words are capitalized", "warning");
    }
    else {
      setText(text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));
      showAlertMsg("Words capitalized", "success");
    }
  }
  const trimText = () => {
    setText(text.split(" ").filter(word => word !== "").join(" "));
    // setText(text.split(/[  ]+/).join(" "));   OR USE THIS
   if(text.length > 0){
    showAlertMsg("Extra space removed", "success");
    }
    else{
      showAlertMsg("Please enter some text", "warning");
    }
  }
  const clearText = () => {
    if(text.length === 0) {
      showAlertMsg("Nothing to clear", "warning");
    }
    else {
      setText("");
      window.saveText = text;
      setText(""); 
      showAlertMsg("Text cleared", "success");
    }
  }
  const UndoText = () => {
    if(window.saveText !== undefined) {
      setText(window.saveText);
      window.saveText = undefined;
      showAlertMsg("Undo", "success");
    }
    else {
      setText(text);
      if(text.length === 0) {
        showAlertMsg("No text found for undo", "warning");
      }
      else {
       showAlertMsg("Please clear the text first", "warning");
      }
      // setAlertType({alertStatus: 'block', alertMsg:"Please enter some text / clear the text to undo", alertType:"warning"});
    }
  }
  // todo: copyToClipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    if(text.length === 0) {
      showAlertMsg("No text found for copy", "error");
    }
    else {
      showAlertMsg("Text copied to clipboard", "success");
    }
  }
  return (
    <div className="container">
    {/* for alert msg */}
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={alertType.alertStatus} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={alertType.alertType} sx={{ width: '100%' }}>
              {alertType.alertMsg}
            </Alert>
          </Snackbar>
        </Stack>
        <div className="textarea-container">
          {/* for text area */}
          <Box
            component="form"
            sx={{
            "& .MuiTextField-root": { m: 1, width: "85vw" },  borderRadius: "10px"
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
            sx={{backgroundColor: props.theme === true ? '#171717':'#F0F0F0',"& label": {color: props.theme === true ? '#ffffff':'#000000'},  borderRadius: "10px"}}
            // sx={{"& label": {color: "secondary.main"}}}
            onChange = {onTextChange}
            id="filled-multiline-static"
            label={props.label}
            multiline
            inputProps={{ style: { color: props.theme === true ? '#ffffff':'#000000' } }}
            rows={8}
            //   defaultValue="Default Value"
            value={text}
            placeholder="Write here"
            variant="filled"
            />
        </Box>

          <div className="buttonSection">
            <button style={{backgroundColor:  props.theme === true ? "#171717" : "white", color:  props.theme === true ? "#ffffff" : "#000000"}} onClick={changeToUpperCase}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 18a.75.75 0 01-.75-.75V4.66L7.3 6.76a.75.75 0 11-1.1-1.02l3.25-3.5a.75.75 0 011.1 0l3.25 3.5a.75.75 0 01-1.1 1.02l-1.95-2.1v12.59A.75.75 0 0110 18z" clipRule="evenodd" />
              </svg>
            UpperCase
            </button>
            <button style={{backgroundColor:  props.theme === true ? "#171717" : "white", color:  props.theme === true ? "#ffffff" : "#000000"}} onClick={changeToLowerCase}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 2a.75.75 0 01.75.75v12.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V2.75A.75.75 0 0110 2z" clipRule="evenodd" />
              </svg>
            LowerCase
            </button>
            <button style={{backgroundColor:  props.theme === true ? "#171717" : "white", color:  props.theme === true ? "#ffffff" : "#000000"}} onClick = {capitalizeFirstLetter}>
              CapitalizeFirstLetter
            </button>
            <button style={{backgroundColor:  props.theme === true ? "#171717" : "white", color:  props.theme === true ? "#ffffff" : "#000000"}} onClick = {trimText}>
              Trim
            </button>
            <button style={{backgroundColor:  props.theme === true ? "#171717" : "white", color:  props.theme === true ? "#ffffff" : "#000000"}} onClick = {clearText}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
              </svg>
            Clear
            </button>
            <button style={{backgroundColor:  props.theme === true ? "#171717" : "white", color:  props.theme === true ? "#ffffff" : "#000000"}} onClick = {UndoText}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            Undo
            </button>
            <button style={{backgroundColor:  props.theme === true ? "#171717" : "white", color:  props.theme === true ? "#ffffff" : "#000000"}} onClick = {copyToClipboard}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
              </svg>
            Copy
            </button>
          </div>
        </div>
        <div className="TextSummarySection">
          <div className="text-summary-container">
            <div className="TextSummary">
              <h3>Your Text Summary</h3>
              <span><b>{text.split(' ').filter((word) => {return word.length !== 0}).length }</b> words & <b>{text.length}</b> characters</span>
              <span><b>{0.008 * (text.split(' ').filter((word) => {return word.length !== 0}).length )}</b> minutes reading time</span>
            </div>
          </div>
          <div className="ViewText">
            <div className="previewHeading">
              <h3>Preview Your Text</h3>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
              </svg>
            </div>
            <span>{text}</span>
          </div>
        </div>
    </div>
  );
}

