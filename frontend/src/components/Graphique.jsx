import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '< 10 ans',
    uv: 4000,
    Age: 1,
    amt: 2400,
  },
  {
    name: '10 - 20 ans',
    uv: 3000,
    Age: 2,
    amt: 2210,
  },
  {
    name: '20 - 30 ans',
    uv: 2000,
    Age: 3,
    amt: 2290,
  },
  {
    name: '30 - 40 ans',
    uv: 2780,
    Age: 4,
    amt: 2000,
  },
  {
    name: '40 - 50 ans',
    uv: 1890,
    Age: 5,
    amt: 2181,
  },
  {
    name: '50 - 60 ans',
    uv: 2390,
    Age: 6,
    amt: 2500,
  },
  {
    name: '< 60 ans',
    uv: 3490,
    Age: 7,
    amt: 2100,
  },
];

class Graph extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="75%">
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
            top: 5,
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
          <Bar dataKey="Age" fill="#ADD8E6" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
export default Graph;