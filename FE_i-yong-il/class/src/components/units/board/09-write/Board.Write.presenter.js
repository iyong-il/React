import * as S from './Board.Write.styles'

export default function BoardWriteUI(props) {
    
    return (
        <div>
            <h1>{props.isEdit ? "수정" : "등록"} 페이지</h1>
            작성자: <S.WriterInput type="text" onChange={props.onChangeWriter} defaultValue={props.boardData?.fetchBoard.writer}/>
            제목: <input type="text" onChange={props.onChangeTitle} defaultValue={props.boardData?.fetchBoard.title}/>
            내용: <input type="text" onChange={props.onChangeContents} defaultValue={props.boardData?.fetchBoard.contents}/>
            <div>{props.data?._id}</div>
            <div>{props.data?.number}</div>
            <div>{props.data?.message}</div>
            <button 
            onClick={props.isEdit ? props.onClickUpdate : props.onClickGraphqlApi}>
                {props.isEdit ? "수정" : "등록"} 하기
            </button>
        </div>
    )
}