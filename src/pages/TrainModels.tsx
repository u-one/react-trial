import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const baseUrl = "https://uone-train-model-manager-dev.herokuapp.com/api/trainmodel/all"

type TrainResponse = TrainModel[]

type TrainModel = {
    trainModelId: number,
    category: string,
    series: string,
    name: string,
    productName: string,
    productType: number,
    maker: string,
    productCode: string,
    price: number,
    jan: number,
    obtainedPrice: number,
    obtainedPriceWithTax: number,
    obtainedPlace: string,
    obtainedDate: string,
    obtainedType: number,
    manageId: string,
    comment: string,
    tags: string
}

const TrainModels = () => {
  const [trains, setTrains] = React.useState<TrainResponse>(
    [
          {
              trainModelId: 0,
              category: "",
              series: "",
              name: "",
              productName: "",
              productType: 0,
              maker: "",
              productCode: "",
              price: 0,
              jan: 0,
              obtainedPrice: 0,
              obtainedPriceWithTax: 0,
              obtainedPlace: "",
              obtainedDate: "",
              obtainedType: 0,
              manageId: "",
              comment: "",
              tags: ""
          }
      ]
  )

  React.useEffect(() => {
    axios.get(baseUrl).then((reponse) => {
        setTrains(reponse.data)
    })
  }, [])
  console.log(trains)

  return (
    <div>
      <h1>Trains</h1>
      <div>
        {trains.map((trainmodel) =>
          <div>
            <div>{trainmodel.trainModelId}</div>
            <div>{trainmodel.category}</div>
            <div>{trainmodel.name}</div>
          </div>
        )}

      </div>
      <nav>
        <Link to="/">Top</Link>
      </nav>
    </div>
  )
}

export default TrainModels;

