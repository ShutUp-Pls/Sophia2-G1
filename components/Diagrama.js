import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class Diagrama extends Component {
  render() {
    return (
      <ResponsiveContainer width="50%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={this.props.datos}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={this.props.datoEnX} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={this.props.nombreLinea} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
export default Diagrama