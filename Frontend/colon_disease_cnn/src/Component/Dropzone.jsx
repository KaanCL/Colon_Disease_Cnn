import React,{useCallback,useState} from 'react';
import {useDropzone} from 'react-dropzone';

function Dropzone({onFileDrop}) {

  const [file,setFile] = useState("");

  const dropzoneStyle = {
    width:"50%",
    border: '2px dashed #cccccc',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '5px'
  };

  const onDrop = useCallback(acceptedFiles => {
    var filePath = acceptedFiles[0]['path']
    setFile(filePath)
    console.log(filePath)
    onFileDrop(filePath)
 
  
  }, [])
  const {getRootProps,getInputProps,isDragActive} = useDropzone({onDrop})

  return (
    <div  {...getRootProps()} style={dropzoneStyle}>
      <input {...getInputProps()}/>
      {
       isDragActive ?
       <h2>Görüntüyü sürükleyin...</h2> :
       <h2>Görüntüyü buraya sürükleyip bırakın veya seçmek için tıklayın</h2>

      }
    </div>

  )
}

export default Dropzone