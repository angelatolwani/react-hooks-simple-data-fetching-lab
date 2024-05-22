// create your App component here
import { useEffect,useState } from "react";

function App() {
    const [imageSource, setImageSource] = useState("");
    const [loadedTag, setLoadedTag] = useState(true);

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(dog => {
            console.log(dog)
            console.log(dog.message)
            setImageSource(dog.message)
            setLoadedTag(false);
        })
    }, [])
    
    if(loadedTag) return <p>Loading...</p>; 
    return <img src={imageSource} alt="A Random Dog"></img>
    // return <div>
    //     <h1>Hello</h1>
    // </div>
}


export default App;