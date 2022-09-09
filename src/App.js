import './App.css';
import AnimatedText from './components/AnimatedText/AnimatedText';
import NavBar from './components/NavBar/NavBar';
import TextArea from './components/TextArea/TextArea';
import { useState } from 'react';

function App() {

  // defining the state for theme change
  const [theme, setTheme] = useState(false);

  if(theme === true) {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
  }
  else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000000";
  }
  return (
    <>
      <NavBar logoName="TEXTUTIL" theme={theme} setTheme={setTheme}/>
      <AnimatedText text="Welcome to TextUtils" secondaryText="I can do all kind of text manipulations"/>
      <TextArea label="Enter text here" />
    </>
  );
}

export default App;
