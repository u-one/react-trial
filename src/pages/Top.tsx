import { Link } from "react-router-dom"

const Top = () => {
  return (
      <div>
          <h1>Top</h1>
          <nav>
            <Link to="/Game">Game</Link>
            <br />
            <Link to="/Trains">Trains</Link>
            <br />
            <Link to="/TrainModels">TrainModels</Link>

          </nav>
      </div>
  )
}

export default Top;
