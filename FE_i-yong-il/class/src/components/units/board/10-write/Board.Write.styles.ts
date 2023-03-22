import styled from '@emotion/styled'

interface IWriteInputProps {
  backgroundColor: string
}

 export const WriterInput = styled.input`
  background-color : ${(props) => props.backgroundColor};
`