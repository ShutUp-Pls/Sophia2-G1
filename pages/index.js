import { Component } from 'react'
import Diagrama from '../components/Diagrama'
import Input from '../components/Input.js'
class App extends Component {
  render() {
    return (
      <div>
        <Input />
        <Diagrama />
      </div>
    )
  }
}
export default App;
