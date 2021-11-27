import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'President 1',
    profile1: 40,
    profile2: 24,
    amt: 20,
  },
  {
    name: 'President 2',
    profile1: 30,
    profile2: 13,
    amt: 22,
  },
  {
    name: 'President 3',
    profile1: 20,
    profile2: 98,
    amt: 24,
  },
  {
    name: 'President 4',
    profile1: 27,
    profile2: 39,
    amt: 20,
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
          className="text-light"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="profile1" fill="#8884d8" />
          <Bar dataKey="profile2" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
export default Graph;