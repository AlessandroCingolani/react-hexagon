import './GameBoard.scss'

function GameBoard() {


  return (
   
    <main>
      <div id='game-board' className='hex-container'>
      <div className="row">
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
        </div>
        <div className="row">
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
        </div>
        <div className="row">
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
        </div>
        <div className="row">
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
        </div>
        <div className="row">
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
        </div>
      </div>
    </main>
  
    
  )
}

export default GameBoard