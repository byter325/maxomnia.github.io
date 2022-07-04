import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';

class MyCar extends React.Component {
  render() {
    return <h2>Soy el carro {this.props.color}</h2>
  }
}

function Car(props) {
  return <li>I am a {props.brand}</li>
}

function House(props) {
  const explode = () => { alert("EXPLOSION!!!!!!!!") }
  const cars = [{ id: 0, brand: 'Ford' }, { id: 1, brand: 'Benz' }, { id: 1, brand: 'Beamer' }]
  return (
    <>
      <h1>Quien esta viviendo en mi casa?</h1>
      <p>{props.data.y}</p>
      <MyCar color="rojo" />
      <button onClick={explode}>Deine Mutter</button>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  )
}

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleEvent = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({...values, [name]:value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(inputs)
  }

  return (
    <form onSubmit={handleEvent}>
      <label>Enter your name 
        <input type="text" name="username" value={inputs.username || ""} onChange={handleEvent}></input>
      </label>
      <label>Enter your age
        <input type="number" name="age" value={inputs.age || ""} onChange={handleEvent}></input>
      </label>
    <input type="submit"/>
    </form>
  )
}

function MySelectForm(){
  const [myCar, setMyCar] = useState("Ford");
  
  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

const data = { x: "One", y: "Two" }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MySelectForm />);