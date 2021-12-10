import ApiCall from './apicall/ApiCall'
import styled from 'styled-components'
const StyledLink = styled.div`
  display: inline-block;
  padding: 6px 6px ;
  margin-top: 15px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color:rgba(4,96,219,0.5);
  cursor: pointer;
  & a{
    text-decoration: none;
    font-size: 20px;
    font-weight: 800;
    color: #d5d5d5;
  }
`
const Container = styled.div`
  margin-top: -3%;
  padding: 2%;

`

export default function Home() {

  return (
    <Container>
      <ApiCall />
    </Container>
  )
}


