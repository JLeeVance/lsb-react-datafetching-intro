// create your App component here
import React, { useState , useEffect } from "react"
import DogImage from "./DogImage";

function App(){

    const [ isloading , setIsLoading ] = useState(true)
    const [ dogToRender , setDogToRender ] = useState(null)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp) => resp.json())
        .then((dogObj) => {
            // console.log(dogImg)
            let goodFetch = dogObj.status === "success" ? true : false;
            setDogToRender(dogObj.message);
            if (goodFetch) {
                setTimeout(setIsLoading(false)
                , 10000);
                // setTimeout(setDogToRender(dogObj.message) , 11000)
            };

        })
    } , [] )



    return (
        <div>
            {isloading ? 
            <p 
            style={{ textAlign : "center" , paddingTop : 100}}>Loading...
            </p> :
            <DogImage  dogSrc={dogToRender} /> }

        </div>
    )


}

export default App;