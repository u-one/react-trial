import React from "react"
import { styled } from '@mui/material/styles';
import axios from "axios"
import { Link } from "react-router-dom"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const baseUrl = "https://uone-train-model-manager-dev.herokuapp.com/api/trainmodel/all"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="right">分類</StyledTableCell>
                            <StyledTableCell align="right">系統</StyledTableCell>
                            <StyledTableCell align="right">名称</StyledTableCell>
                            <StyledTableCell align="right">製品名</StyledTableCell>
                            <StyledTableCell align="right">形態</StyledTableCell>
                            <StyledTableCell align="right">メーカー</StyledTableCell>
                            <StyledTableCell align="right">品番</StyledTableCell>
                            <StyledTableCell align="right">定価</StyledTableCell>
                            <StyledTableCell align="right">JAN</StyledTableCell>
                            <StyledTableCell align="right">購入価格（税抜）</StyledTableCell>
                            <StyledTableCell align="right">購入価格（税込）</StyledTableCell>
                            <StyledTableCell align="right">入手場所</StyledTableCell>
                            <StyledTableCell align="right">入手日</StyledTableCell>
                            <StyledTableCell align="right">入手タイプ</StyledTableCell>
                            <StyledTableCell align="right">管理ID</StyledTableCell>
                            <StyledTableCell align="right">コメント</StyledTableCell>
                            <StyledTableCell align="right">タグ</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {trains.map((row) => (
                            <StyledTableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.trainModelId}
                                </TableCell>
                                <TableCell align="right">{row.category}</TableCell>
                                <TableCell align="right">{row.series}</TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.productName}</TableCell>
                                <TableCell align="right">{row.productType}</TableCell>
                                <TableCell align="right">{row.maker}</TableCell>
                                <TableCell align="right">{row.productCode}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.jan}</TableCell>
                                <TableCell align="right">{row.obtainedPrice}</TableCell>
                                <TableCell align="right">{row.obtainedPriceWithTax}</TableCell>
                                <TableCell align="right">{row.obtainedPlace}</TableCell>
                                <TableCell align="right">{row.obtainedDate}</TableCell>
                                <TableCell align="right">{row.obtainedType}</TableCell>
                                <TableCell align="right">{row.manageId}</TableCell>
                                <TableCell align="right">{row.comment}</TableCell>
                                <TableCell align="right">{row.tags}</TableCell>
                                <TableCell align="right"><Link to={`/trainModel/${row.trainModelId}`}>Edit</Link></TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            <nav>
                <Link to="/">Top</Link>
            </nav>
        </div>
    )
}

export default TrainModels;

