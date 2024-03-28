import React, {useState} from 'react'
import axios from 'axios'
import { config } from '../constants';
import { useDispatch } from 'react-redux';
import { closeModal } from '../app/features/modalSlice';
import { setDocument } from '../app/features/documentSlice';
import {toast } from 'react-toastify';


function FileInput() {
  
  const [file, setFile] = useState();
  const [loading,setLoading] = useState(false);
  
  const dispatch = useDispatch();

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  const isValidFileType = (fileName) => {
    const allowedExtensions = ['.pdf', '.txt', '.docx'];
    const ext = fileName.substring(fileName.lastIndexOf('.'));
    return allowedExtensions.includes(ext.toLowerCase());
  };


  async function handleSubmit(event) {
    event.preventDefault();
    const url = config.BASEURL + '/document/create';
    const formData = new FormData();
    formData.append('file', file);
   
    const configHeaders = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    setLoading(true)
    axios.post(url, formData, configHeaders)
      .then((response) => {
        dispatch(setDocument(response.data));
        setLoading(false);setFile([]);
        dispatch(closeModal());
        toast.success("File uploaded successfully, Now you can start chatting with Document");
      })
      .catch((error) => {
        console.error("Error uploading files: ", error);
        setLoading(false);
        dispatch(closeModal());
        toast.error("Error uploading files");
      });
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      (file) => isValidFileType(file.name)
    );
    setFile(droppedFiles[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <div className="flex justify-center items-center mb-[3rem] mt-[3rem]">
      <div className="max-w-screen-xl w-full px-4">
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <div
      className={`max-w-md mx-auto p-2 bg-white shadow-md rounded-md border-dashed border-2 border-[#5E5ADB] mt-5 ${!loading ? 'relative cursor-pointer' : ''} h-40 z-10`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <label
        htmlFor="fileInput"
        className="cursor-pointer absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-transparent text-gray-600"
      >
        <span className="text-sm">Click or drag & drop to attach PDF files</span>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
          accept=".pdf, .txt, .docx"
        />
      </label>
      </div>

      {file && (
         <div className="flex items-center bg-gray-200 p-4 rounded-md text-center mt-4">
           <span>{file.name}</span>
         </div>
      )}

      <button
        type="submit"
        className="bg-[#5E5ADB] text-white py-2 px-4 rounded-md mb-4 mr-4 mt-4 cursor-pointer hover:bg-[#3933f5] transition duration-200 ease-in-out w-[80%] block mx-auto"
        disabled={!file || loading}
        onClick={handleSubmit}
        style = {{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
      >
        Submit
      </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default FileInput