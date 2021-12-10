import ApiCall from './apicall/ApiCall'
import styled from 'styled-components'

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


