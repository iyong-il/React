import { useState } from 'react';
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
    }
}`

export default function GraphqlMutationPage() {

    const router = useRouter();

    const[writer,setWriter] = useState("");
    const[title,setTitle] = useState("");
    const[contents,setContents] = useState("");
    
    const[callGraphql] = useMutation(CREATE_BOARD);
    
    const onClickGraphqlApi = async () => {
        // const result = await axios.get("http://koreanjson.com/posts/1"); // <= rest-api 방식
        
        try {
            const result = await callGraphql({
                variables: {
                    writer: writer,
                    title: title,
                    contents: contents
                }
            })
            console.log(result);
            alert("게시글 등록에 성공했어요")
            alert("상세페이지로 이동해 볼까요?")
            router.push(`/05-08-dynamic-routed-input/${result.data.createBoard.number}`);
            // 템플릿 리터럴
        } catch(error) {
            alert(error.message)
        }
        
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
        <div>
            작성자: <input type="text" onChange={onChangeWriter} />
            제목: <input type="text" onChange={onChangeTitle} />
            내용: <input type="text" onChange={onChangeContents} />

            <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기</button>
        </div>
    )
}