import './app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title/Title';
import GameBoard from './components/GameBoard/GameBoard';


function App() {


  return (
    <div className='main-container'>
      <div className="container">
       <Title></Title>
       <GameBoard></GameBoard>
      </div>
    </div> 
  )
}

export default App
