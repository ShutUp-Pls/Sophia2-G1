import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const datos = require('./datosTest.json');

const leerDatos = (archivoJson) => {
  var data = [];
  for(var i=0; i<archivoJson.length; i++){
    data.push({name:archivoJson[i].id, pop:archivoJson[i].pop});
  }
  return data;
}
const data = leerDatos(datos);

/*
const data = [
  {
    name: datos[0].id,
    pop: datos[0].pop
  },
  {
    name: datos[1].id,
    pop: datos[1].pop
  },
  {
    name: datos[2].id,
    pop: datos[2].pop
  },
  {
    name: datos[3].id,
    pop: datos[3].pop
  },
  {
    name: datos[4].id,
    pop: datos[4].pop
  },
  {
    name: datos[5].id,
    pop: datos[5].pop
  },
  {
    name: datos[6].id,
    pop: datos[6].pop
  },
]
*/

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