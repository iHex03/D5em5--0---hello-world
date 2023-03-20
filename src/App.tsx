import {useState} from 'react';
import {Header} from './components/Header';
import {Footer} from'./components/Footer';

const App = () => {
  const [name, setName] = useState("Monet");
  const [age, setAge] = useState(40);
  const [bg, setBg] = useState('#FF0000');

  const [list, setList] = useState([
    "O rato roeu a roupa do rei de roma.",
    "Aqui vai uma frase poética...",
    "A inspiração desse programador é pouca!"
  ]);

  const handle20 = () => {
    setAge(20);
    setBg("#00FF00")
  }
  const handle40 = () => {
    setAge(40);
    setBg("#FF0000")
  }
  
  return (
    <div style={{backgroundColor: bg}}>
      <Header name={name} age={age} />

      {age === 40 && 
        <button onClick={handle20}>Tenho 20 anos</button>
      }
      {age === 20 && 
        <button onClick={handle40}>Tenho 40 anos</button>
      }

      <hr />

      <ul>
        {list.map((frase, index)=>(
          <li key={index}>{frase}</li>
        ))}
      </ul>

      <Footer />
    </div>
  )
}

export default App;