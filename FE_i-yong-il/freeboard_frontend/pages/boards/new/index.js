import * as S from '../../../styles/emotion'
import { useState } from 'react';



export default function Myfreeboard() {
    
    const[data,setData] = useState("000000")

    const onClickToken = () => {
        const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        // console.log(result);

        setData(result)
    }

    return (
        
        <S.Box>
            <S.Title>회원가입</S.Title>
            <S.WrapperHeader>
                <S.Input type="text" placeholder="이메일을 입력해 주세요." />
                <S.Input type="text" placeholder="이름을 입력해주세요." />
                <S.Input type="password" placeholder="비밀번호를 입력해 주세요." />
                <S.Input type="password" placeholder="비밀번호를 다시 입력해 주세요." />
            </S.WrapperHeader>
                <S.WrapperBody>
                <S.Number type="text"/> - <S.Number type="text"/> - <S.Number type="text"/>
            <S.TokenWrapper>
                <S.Token>{data}</S.Token>
                <S.TokenButton onClick={onClickToken}>인증번호 전송</S.TokenButton>
            </S.TokenWrapper>
                </S.WrapperBody>
        </S.Box>
    )
}