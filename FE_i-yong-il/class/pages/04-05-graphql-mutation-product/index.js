import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller:$seller, createProductInput:$createProductInput){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationProduct() {
    
    const[seller,setSeller] = useState("")
    const[name,setName] = useState("")
    const[detail,setDetail] = useState("")
    const[price,setPrice] = useState("")
    
    const[data,setData] = useState("")
    const[createProduct] = useMutation(CREATE_PRODUCT)
  
    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {
                seller: seller,
                createProductInput: {
                    name: name,
                    detail: detail,
                    price: Number(price)
             }
         }
     })
     console.log(result)
     setData(result.data.createProduct.message)
 }

 const onChangeSeller = (event) => {
    setSeller(event.target.value)
 }

 const onChangeName = (event) => {
    setName(event.target.value) 
 }

 const onChangeDetail = (event) => {
    setDetail(event.target.value)
 }

 const onChangePrice = (event) => {
    setPrice(event.target.value)
 }

 return (
    <>
        판매자: <input type="text" onChange={onChangeSeller}/>
        상품명: <input type="text" onChange={onChangeName}/>
        상품내용: <input type="text" onChange={onChangeDetail}/>
        상품가격: <input type="number" onChange={onChangePrice}/>
        <div>{data}</div>
        <button onClick={onClickSubmit}>상품 등록하기</button>
    </> 
    )
 }