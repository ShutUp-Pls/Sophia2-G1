import { Component } from 'react'
import Input from './inputjson/input/Input'
import Link from 'next/link'
class App extends Component {
  render() {
    return (
      <div>
        <Input />
        <Link href="./apicall/ApiCall">ir a apicall</Link>
      </div>
    )
  }
}
export default App;
