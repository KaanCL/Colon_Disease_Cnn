import React,{useCallback,useState,useEffect} from 'react';
import './App.css';
import Dropzone from './Component/Dropzone';
import Button from "react-bootstrap/Button"; 

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

  const handleFileDrop = (filePath) =>{setFile(filePath)}


  useEffect(()=>{
    if(file){
       handleData()
    }
  })


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
    <h1>Seçilen Görüntü: {file['path']}</h1>
    {result && <h1>Sonuç: {result}</h1>}
    </div>
  );
}

export default App;
