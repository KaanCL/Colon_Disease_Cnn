import React,{useCallback,useState} from 'react';
import './App.css';
import Dropzone from './Component/Dropzone';

function App() {

  const [file,setFile] = useState("");

  const handleFileDrop = (filePath) =>{

    setFile(filePath)
  }

  const containerStyle={
      display:"flex",
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      marginTop:'40px',
  }

  return (
    <div className='container' style={containerStyle}>
     
    <Dropzone onFileDrop={handleFileDrop}></Dropzone>
    <h1>Selected File:{file}</h1>
    </div>
  );
}

export default App;
