import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, Area, AreaChart } from 'recharts';

const resultData = [
    {
      "name": "Student 1",
      "physics": 85,
      "chemistry": 78,
      "math": 92,
      "biology": 88
    },
    {
      "name": "Student 2",
      "physics": 76,
      "chemistry": 81,
      "math": 79,
      "biology": 72
    },
    {
      "name": "Student 3",
      "physics": 90,
      "chemistry": 88,
      "math": 94,
      "biology": 91
    },
    {
      "name": "Student 4",
      "physics": 65,
      "chemistry": 70,
      "math": 60,
      "biology": 68
    },
    {
      "name": "Student 5",
      "physics": 88,
      "chemistry": 92,
      "math": 89,
      "biology": 90
    },
    {
      "name": "Student 6",
      "physics": 72,
      "chemistry": 75,
      "math": 70,
      "biology": 66
    },
    {
      "name": "Student 7",
      "physics": 95,
      "chemistry": 89,
      "math": 96,
      "biology": 94
    },
    {
      "name": "Student 8",
      "physics": 80,
      "chemistry": 82,
      "math": 78,
      "biology": 79
    },
    {
      "name": "Student 9",
      "physics": 60,
      "chemistry": 65,
      "math": 58,
      "biology": 62
    },
    {
      "name": "Student 10",
      "physics": 84,
      "chemistry": 77,
      "math": 85,
      "biology": 83
    }
  ]

const salaryData = [
    {
      "name": "Alice",
      "salary": 50000,
      "bonus": 5000
    },
    {
      "name": "Bob",
      "salary": 60000,
      "bonus": 6000
    },
    {
      "name": "Charlie",
      "salary": 55000,
      "bonus": 4500
    },
    {
      "name": "David",
      "salary": 70000,
      "bonus": 7000
    },
    {
      "name": "Eve",
      "salary": 65000,
      "bonus": 5200
    }
  ]
  
  

const ResultsCharts = () => {
    return (
        <div className='flex justify-center mt-20'>
            <div className="">
            <LineChart width={730} height={250} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip/>
                <Line dataKey="math" stroke='green'></Line>
                <Line dataKey="chemistry" stroke='red'></Line>
                <Line dataKey="physics" stroke='blue'></Line>
                <Line dataKey="biology" stroke='indigo'></Line>
            </LineChart>

            <br />
            <br />
            <br />

            <BarChart width={730} height={250} data={resultData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="physics" fill="#8884d8" />
                <Bar dataKey="chemistry" fill="#82ca9d" />
                <Bar dataKey="math" fill="#823831" />
            </BarChart>

            <br />
            <br />
            <br />

            <AreaChart width={730} height={250} data={salaryData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="salary" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="bonus" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>

            <br />
            <br />
            <br />
            </div>
        </div>
    );
};

export default ResultsCharts;