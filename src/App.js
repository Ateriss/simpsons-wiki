import React, { useEffect, useState } from "react";
import { Header } from "./header/header";
import  {Back} from "./Back/Back";
import { Personajes } from "./Personajes/Personajes";
import { Box } from "./Box/Box";


function App() {

  const [personajes, setPersonajes] = useState([]);

  const initialUrl = "https://apisimpsons.fly.dev/api/personajes";

  const FetchPersonajes = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data=> setPersonajes(data.docs))
    .catch(error => console.log('error'))
  };

  useEffect(() =>{
    FetchPersonajes(initialUrl);
  })


  return (
    <div>
 
    <Header/>

    <Box>
    <Personajes personajes={personajes} />
    </Box>

    </div>
  );
}

export default App;
