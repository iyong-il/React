import { useState } from 'react';
import { useMutation } from '@apollo/client'
import BoardWriteUI from './Board.Write.presenter'
import { CREATE_BOARD } from './Board.Write.queries'

export default function BoardWrite() {

    const[writer,setWriter] = useState("");
    const[title,setTitle] = useState("");
    const[contents,setContents] = useState("");
    
    const[data,setData] = useState("");
    const[callGraphql] = useMutation(CREATE_BOARD);
    
    const onClickGraphqlApi = async () => {
        // const result = await axios.get("http://koreanjson.com/posts/1"); // <= rest-api 방식
        const result = await callGraphql({
            variables: {
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result);
        
        setData(result.data.createBoard.message);
};

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return (
        <BoardWriteUI
            onChangeWriter = {onChangeWriter}
            onChangeTitle = {onChangeTitle}
            onChangeContents = {onChangeContents}
            onClickGraphqlApi ={onClickGraphqlApi}
            data = {data}
        />
    );
}