import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const baseURL = "https://tokyotrainnow.herokuapp.com/api/current-railway/odpt.Railway:Toei.Asakusa"

type Train = {
  trainNumber: string,
  trainType: string,
  carComposition: number,
  delay: number,
  ascending: boolean,
  destination: string
}

type Section = {
  title: string,
  stationId: string,
  stationCode: string,
  trains: Train[]
}

type TrainResponse = {
    title: string,
    lineCode: string,
    color: string,
    operator: string,
    sections: Section[],
    ascendingTitle: string,
    descendingTitle: string,
    operatorUpdateTime: string,
    railwayUpdateTime: string,
    trainTypeUpdateTime: string,
    trainDate: string,
    validSeconds: number
}

const Trains = () => {
  const [trains, setTrains] = React.useState<TrainResponse>({
    title: "",
    lineCode: "",
    color: "",
    operator: "",
    sections: [{
      title: "",
      stationId: "",
      stationCode: "",
      trains: []
    }],
    ascendingTitle: "",
    descendingTitle: "",
    operatorUpdateTime: "",
    railwayUpdateTime: "",
    trainTypeUpdateTime: "",
    trainDate: "",
    validSeconds: 300
  })

  React.useEffect(() => {
    axios.get(baseURL).then((reponse) => {
        setTrains(reponse.data)
    })
  }, [])
  console.log(trains)

  return (
    <div>
      <h1>Trains</h1>
      <div style={{ backgroundColor: trains.color }}>
        {trains.operator} {trains.title} ({trains.lineCode})
      </div>
      <div>
        {trains.sections.map((section) =>
          <div>
            <div>{section.stationCode} {section.title}</div>
          </div>
        )}
      </div>
      <nav>
        <Link to="/">Top</Link>
      </nav>
    </div>
  )
}

export default Trains;
