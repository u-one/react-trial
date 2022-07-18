import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl'
import TrainModelTextField from "../components/TrainModelTextField";
import TrainModelSelectField from "../components/TrainModelSelectField";
import Button from '@mui/material/Button'
import { useForm, SubmitHandler } from "react-hook-form";
import { TrainModelForm } from "../types/TrainModelForm";
import { ProductTypes } from "../types/ProductTypes";
import { ObtainTypes } from "../types/ObtainedTypes";
import { trainModelApi } from "../libs/webapiClient";
import { TrainModel } from "../types/TrainModel";

const TrainModelDetail = () => {

    const { trainModelId } = useParams();

    const defaultTrainModel = {
                trainModelId: 0,
                category: "-",
                series: "-",
                name: "-",
                productName: "-",
                productType: 0,
                maker: "-",
                productCode: "-",
                price: 0,
                jan: 0,
                obtainedPrice: 0,
                obtainedPriceWithTax: 0,
                obtainedPlace: "-",
                obtainedDate: "-",
                obtainedType: 0,
                manageId: "-",
                comment: "-",
                tags: "-"
            }


    const {setValue, control, handleSubmit} = useForm<TrainModelForm>({"defaultValues": defaultTrainModel});


    useEffect(() => {
        if (!trainModelId) {
            return 
        }

        trainModelApi.get<TrainModel>(trainModelId).then((reponse) => {
            Object.entries(reponse.data).map(([key, value]) => {
                setValue(key, value !== null ? value : '');
            });
            console.log(reponse.data)
        })
    }, [])

    const onSubmit: SubmitHandler<TrainModelForm> = data => console.log(data);

    return (
        <div>
            <h1>車両</h1>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
                <FormControl fullWidth>
                    <TrainModelTextField label="ID" name="trainModelId" control={control}/>
                    <div>
                    <TrainModelTextField name="category" label="分類"  control={control}/>
                    <TrainModelTextField name="series" label="系統" control={control} />
                    <TrainModelTextField name="name" label="名称" control={control} />
                    </div>
                    <div>
                    <TrainModelTextField name="maker" label="メーカー" control={control}/>
                    <TrainModelTextField name="productCode" label="品番" control={control}/>
                    <TrainModelTextField name="productName" label="製品名" control={control}/>

                    <TrainModelSelectField name="productType" label="形態" values={ProductTypes} control={control}/>
                    <TrainModelTextField name="jan" label="JAN"  control={control}/>
                    </div>
                    <TrainModelTextField name="price" label="定価" control={control}/>
                    <div>
                    <TrainModelTextField name="obtainedPrice" label="購入価格（税抜）"  control={control}/>
                    <TrainModelTextField name="obtainedPriceWithTax" label="購入価格（税込）" control={control}/>
                    <TrainModelSelectField name="obtainedType" label="入手形式" values={ObtainTypes} control={control}/>
                    <TrainModelTextField name="obtainedDate" label="入手日"  control={control}/>
                    <TrainModelTextField name="obtainedPlace" label="入手場所"  control={control}/>
                    </div>
                    <div>
                    <TrainModelTextField name="manageId" label="管理ID"  control={control}/>
                    <TrainModelTextField name="comment" label="コメント"  control={control}/>
                    </div>
                    <div>
                    <TrainModelTextField name="tags" label="タグ" control={control}/>
                    </div>
                    <Button onClick={handleSubmit(onSubmit)}>更新</Button>
                </FormControl>
            </Box>

            <nav>
                <Link to="/">Top</Link>
            </nav>
        </div>
    )
}

export default TrainModelDetail;

