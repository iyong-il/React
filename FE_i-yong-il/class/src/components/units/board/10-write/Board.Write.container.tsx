import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client'
import BoardWriteUI from './Board.Write.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './Board.Write.queries'
import { useRouter } from 'next/router';
import { IBoardWriteProps, IMyvariables } from './BoardWrite.types';



export default function BoardWrite(props: IBoardWriteProps) {

    const router = useRouter()

    const[writer,setWriter] = useState("");
    const[title,setTitle] = useState("");
    const[contents,setContents] = useState("");
    
    const[data,setData] = useState({});
    const[callGraphql] = useMutation(CREATE_BOARD);
    const[updateBoard] = useMutation(UPDATE_BOARD);
    
    const onClickGraphqlApi = async () => {
        // const result = await axios.get("http://koreanjson.com/posts/1"); // <= rest-api 방식
        const result = await callGraphql({
            variables: {
                writer,
                title,
                contents
            }
        })
        console.log(result);
        setData(result.data.createBoard);
        router.push(`/10-01-typescript-boards/${result.data.createBoard.number}`)
};

    const onClickUpdate = async () => {

      

      const myvariables: IMyvariables = {
        number: Number(router.query.number)
      }
        if(writer)myvariables.writer = writer
        if(title)myvariables.title = title
        if(contents)myvariables.contents = contents

        const result = await updateBoard({
            variables: myvariables
        })
        router.push(`/10-01-typescript-boards/${result.data.updateBoard.number}`)
        // router.push(`/08-05-boards/${router.query.number}`) => 이것도 가능
} 

    const onChangeWriter = (event : ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event : ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event : ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value)
    }

    return (
        <BoardWriteUI
            onChangeWriter = {onChangeWriter}
            onChangeTitle = {onChangeTitle}
            onChangeContents = {onChangeContents}
            onClickGraphqlApi ={onClickGraphqlApi}
            onClickUpdate={onClickUpdate}
            data = {data}
            isEdit={props.isEdit}
            boardData={props.boardData}

        />
    );
}