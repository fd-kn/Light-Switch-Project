import { useState } from "react";

function App() {

  const [light, setLight] = useState('Off')
  const [photo, setPhoto] = useState('./off.png')
  const [count, setCount] = useState(0)

  const lightSwitch = () => {
    if(light === 'Off'){
      setLight('On');
      setPhoto('./on.png')
    }else{
      setLight('Off')
      setPhoto('./off.png')
    }

    setCount(count + 1)
  }
  

  return (
    <div className="App">
      <h1>Switch: {light}</h1>
      <button className={count%5===0? "border" : "no-border"} onClick={lightSwitch}><img src = {photo} alt = 'bulb' /></button>
      <h1>Count: {count} </h1>
    </div>
  );
}

export default App;
