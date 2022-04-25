import React, {useState} from "react";
import Weather from './Weather';


function City() {
    const [name,setName]= useState({});
    async function fetchCity() {
        var name= document.getElementById('name').value;
         await fetch(`${process.env.REACT_APP_API_URL}/weather?q=${name}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then(response => response.json())
        .then(result => {
            setName(result)
            console.log(result);
        });
    }
    return (
        <div className="City">
            <input placeholder="City Name" id='name'/>
            <button onClick={fetchCity}>Fetch</button>

            {(typeof name.main != 'undefined') ? (
                <Weather weatherData={name}/>
            ): (
                <div></div>
            )}
      
      
    </div>
  );
}
export default City;