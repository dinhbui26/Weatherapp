import React from "react";
function Home() {
    return (
        <div
        style={{
            width:800,
            height:400, 
            background: `url('${process.env.PUBLIC_URL}/img/cloud.png')`
  }}>
            <h1>Welcome to my website</h1>
            <h2>Find weather in your location or cities around the world</h2>
        
            
        </div>
    )
}
export default Home;