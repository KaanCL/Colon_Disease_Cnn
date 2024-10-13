import React,{useCallback,useState} from 'react';
import {useDropzone} from 'react-dropzone';

function Dropzone({onFileDrop}) {

  const [imageUrl,setImageUrl]=useState("");

  const dropzoneStyle = {
    width:"50%",
    border: '2px dashed #cccccc',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '5px'
  };

  const onDrop = useCallback(acceptedFiles => {
    const selectedFile = acceptedFiles[0]
    const fileURL = URL.createObjectURL(selectedFile);

    onFileDrop(selectedFile)
    setImageUrl(fileURL)

  }, [])
  const {getRootProps,getInputProps,isDragActive} = useDropzone({onDrop,multiple:false,accept:"image/*"})

  return (
    <div  {...getRootProps()} style={dropzoneStyle}>
      <input {...getInputProps()}/>
      {
       isDragActive ?
       <h2>Görüntüyü bırakın...</h2> :
       <h2>Görüntüyü buraya sürükleyip bırakın veya seçmek için tıklayın</h2>

      }
       {imageUrl && <img src={imageUrl} alt="Selected File" style={{ marginTop: '20px', maxWidth: '100%' }} />}
    </div>

  )
}

export default Dropzone