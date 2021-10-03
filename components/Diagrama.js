import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const datos = require('./datosTest.json');

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

class Diagrama extends Component {
  render() {
    return (
      <ResponsiveContainer width="50%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pop" stroke="#8884d8" activeDot={{ r: 8 }} />

        </LineChart>
      </ResponsiveContainer>
    );
  }
}
export default Diagrama