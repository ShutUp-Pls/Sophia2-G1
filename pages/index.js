import { Component } from 'react'
import Diagrama from '../components/Diagrama'
import Input from '../components/Input.js'

const datos = require('../components/datosTest.json');

const leerDatos = (archivoJson, tipo) => {
  var data = [];
  if(tipo == 0){
    for(var i=0; i<archivoJson.length; i++){
      data.push({name:archivoJson[i].id, pop:archivoJson[i].men});
    }
  }
  else if(tipo == 1){
    for(var i=0; i<archivoJson.length; i++){
      data.push({name:archivoJson[i].id, pop:archivoJson[i].pop});
    }
  }
  else{
    data = leerDatos(archivoJson, 1);
  }
  return data;
}
const data = leerDatos(datos);

class App extends Component {
  render() {
    return (
      <div>
        <Input />
        <Diagrama datos={data}/>
      </div>
    )
  }
}
export default App;
