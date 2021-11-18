import { Component } from 'react'
import Input from './inputjson/input/Input'
import Link from 'next/link'
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

class App extends Component {
  render() {
    return (
      <div>
        <Input />
        <StyledLink>
          <Link href="./apicall/ApiCall">ir a apicall</Link>
        </StyledLink>
      </div>
    )
  }
}
export default App;
