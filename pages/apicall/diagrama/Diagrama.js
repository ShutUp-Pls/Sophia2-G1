import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class Diagrama extends Component {
  render() {
    return (
      <ResponsiveContainer width="70%" aspect={3}>
        <LineChart
          width={1000}
          height={500}
          data={this.props.datos}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={this.props.datoEnX} stroke='#000000' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="mentions" stroke="#000000" activeDot={{ r: 9 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
export default Diagrama