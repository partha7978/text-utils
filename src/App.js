import './App.css';
import AnimatedText from './components/AnimatedText/AnimatedText';
import NavBar from './components/NavBar/NavBar';
import TextArea from './components/TextArea/TextArea';
import { useState } from 'react';

function App() {

  // defining the state for theme change
  const [theme, setTheme] = useState(false);
  return (
    <>
      <NavBar logoName="TEXTUTIL" theme={theme} setTheme={setTheme}/>
      <AnimatedText text="Welcome to TextUtils" secondaryText="I can do all kind of text manipulations"/>
      <TextArea label="Enter text here" />
    </>
  );
}

export default App;
