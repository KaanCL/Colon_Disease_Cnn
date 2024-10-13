import React,{useCallback,useState} from 'react';
import './App.css';
import Dropzone from './Component/Dropzone';

function App() {

  const containerStyle={
    display:"flex",
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'40px',
}

  const [file,setFile] = useState("");
  const [result,setResult] = useState("");

  const handleFileDrop = (filePath) =>{
    setFile(filePath)
  }


  const handleData=async() => {

    var formData = new FormData();
    formData.append('file',file);
    console.log(formData)

    try{
      const response = await fetch('http://localhost:5000/upload',{
           method:'POST',
           body:formData
      });
      const data = await response.json();
      console.log('Upload successful:', data);
      setResult(data['Result'])


    }catch(error){
    console.error('Upload failed:', error);
    }
    
  }

  return (
    <div className='container' style={containerStyle}>
     
    <Dropzone onFileDrop={handleFileDrop}></Dropzone>
    <h1>Selected File:{file['path']}</h1>
    {result && <h1>Sonuç: {result}</h1>}
    <button onClick={handleData}>Yükle</button>
    </div>
  );
}

export default App;
