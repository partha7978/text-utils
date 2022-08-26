import './App.css';
import AnimatedText from './components/AnimatedText/AnimatedText';
import NavBar from './components/NavBar/NavBar';
import TextArea from './components/TextArea/TextArea';

function App() {
  return (
    <>
      <NavBar logoName="TEXTUTIL"/>
      <AnimatedText text="Welcome to TextUtils" secondaryText="I can do all kind of text manipulations"/>
      <TextArea label="Enter text here" />
    </>
  );
}

export default App;
