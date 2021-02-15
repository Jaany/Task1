import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';



function App() {

  const [photo, setPhoto] = useState("");
  const [clientId, setClientId] = useState("b79d009ec0a36fceefd796ecf2c8f7981dba4259264bcf5db2cadc07100b697d");

  const [result, setResult] = useState([]);



  function handleChange(event){
      setPhoto(event.target.value);
  }


  
  function handleSubmit(event) {
      console.log(photo);

      const url = "https://api.unsplash.com/search/photos?&query="+photo+"&client_id="+clientId;

      axios.get(url)
      .then((response) => {
        console.log(response);
        setResult(response.data.results)
      });
  }


  return (
    <div className="App" >
      <br></br>
        <label style = {{fontSize:'30px'}}>Image Search</label><br></br>
        <input type = "text" placeholder = "Search image here .."   style = {{width:'500px', height:'20px'}}  onChange = {handleChange} />
          <button  style = {{width:'70px', height:'26px'}}  onClick = {handleSubmit} >Search</button>
<br></br>
          {result.map((photo) => (
             <img src = {photo.urls.small} style = {{
              marginTop:'60px',
              marginLeft:'-10px' ,
              padding:'0 8px ',
              verticalalign: 'middle'
      
              }} />
  ))}
      </div>
  );
}

export default App;

