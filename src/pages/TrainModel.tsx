import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'



const baseUrl = "https://uone-train-model-manager-dev.herokuapp.com/api/trainmodel/"

type TrainResponse = TrainModel

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

const TrainModel = () => {
    const { trainModelId } = useParams();

    const [train, setTrain] = React.useState<TrainResponse>(
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
    )

    React.useEffect(() => {
        axios.get(baseUrl+trainModelId).then((reponse) => {
            setTrain(reponse.data)
        })
    }, [])
    console.log(train)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    };

    const handleProductTypeChange = (event: SelectChangeEvent) => {
    };

    const productTypes = [
        {
            value: '0',
            label: '-',
        },
        {
            value: '1',
            label: '単品',
        },
        {
            value: '2',
            label: 'セット',
        },
        {
            value: '3',
            label: 'オリジナル',
        },
    ]

    const obtainTypes = [
        {
            value: '0',
            label: '-',
        },
        {
            value: '1',
            label: '新品',
        },
        {
            value: '2',
            label: '中古',
        },
    ]

    return (
        <div>
            <h1>車両</h1>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
                <FormControl fullWidth>
                    <TextField id="trainmodelId" label="ID" value={train.trainModelId} onChange={handleChange} variant="outlined" />
                    <div>
                    <TextField id="category" label="分類" value={train.category} onChange={handleChange} />
                    <TextField id="series" label="系統" value={train.series} onChange={handleChange} />
                    <TextField id="" label="名称" value={train.name} onChange={handleChange} />
                    </div>
                    <div>
                    <TextField id="" label="メーカー" value={train.maker} onChange={handleChange} />
                    <TextField id="" label="品番" value={train.productCode} onChange={handleChange} />
                    <TextField id="" label="製品名" value={train.productName} onChange={handleChange} />
                    <TextField id="" select label="形態" value={train.productType} onChange={handleChange}>
                        {productTypes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                        ))}
                    </TextField>
                    <TextField id="" label="JAN" value={train.jan} onChange={handleChange} />
                    </div>
                    <TextField id="" label="定価" value={train.price} onChange={handleChange} />
                    <div>
                    <TextField id="" label="購入価格（税抜）" value={train.obtainedPrice} onChange={handleChange} />
                    <TextField id="" label="購入価格（税込）" value={train.obtainedPriceWithTax} onChange={handleChange} />
                    <TextField id="" select label="入手形態" value={train.obtainedType} onChange={handleChange}>
                        {obtainTypes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                        ))}
                    </TextField>
                    <TextField id="" label="入手日" value={train.obtainedDate} onChange={handleChange} />
                    <TextField id="" label="入手場所" value={train.obtainedPlace} onChange={handleChange} />
                    </div>
                    <div>
                    <TextField id="" label="管理ID" value={train.manageId} onChange={handleChange} />
                    <TextField id="" label="コメント" value={train.comment} onChange={handleChange} />
                    </div>
                    <div>
                    <TextField id="" label="タグ" value={train.tags} onChange={handleChange} />
                    </div>
                </FormControl>
            </Box>

            <nav>
                <Link to="/">Top</Link>
            </nav>
        </div>
    )
}

export default TrainModel;

