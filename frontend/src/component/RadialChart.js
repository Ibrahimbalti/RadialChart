import React from "react";
import { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    subject: "Apple",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Orange",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Pear",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Pineapple",
    A: 99,
    B: 100,
    fullMark: 150,
  },
];
export const RadialChart = () => {
  const [exceldata, setExcelData] = useState([]);
  //   console.log(exceldata);

  useEffect(() => {
    fetch("http://localhost:5000/api/excelfileread")
      .then((res) => res.json())
      .then(
        (data) => {
          setExcelData(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const FruitPerArr = [];
  const eatenArr = [];
  const rottenArr = [];
  const givewayArr = [];
  for (let i of exceldata) {
    for (let j in i) {
      if (j === "fruits_Count") {
        // console.log(i[j]);
        FruitPerArr.push(i[j]);
      }

      if (j === "Eaten") {
        eatenArr.push(i[j]);
      }

      if (j === "Rotten") {
        rottenArr.push(i[j]);
      }

      if (j === "Giveaway") {
        givewayArr.push(i[j]);
      }
    }
  }

  console.log(FruitPerArr);

  const fSum = FruitPerArr.reduce((acc, cur) => acc + cur, 0);
  const eSum = eatenArr.reduce((acc, cur) => acc + cur, 0);
  const rSum = rottenArr.reduce((acc, cur) => acc + cur, 0);
  const gSum = givewayArr.reduce((acc, cur) => acc + cur, 0);

  return (
    <>
      <div className='flex items-center justify-center'>
        <RadarChart
          cx={300}
          cy={250}
          outerRadius={150}
          width={500}
          height={500}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey='subject' />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name='Mike'
            dataKey='A'
            stroke='#8884d8'
            fill='#8884d8'
            fillOpacity={0.6}
          />
          <Radar
            name='Lily'
            dataKey='B'
            stroke='#82ca9d'
            fill='#82ca9d'
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </div>

      <div>
        <div class='flex flex-col'>
          <div class='overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div class='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
              <div class='overflow-hidden'>
                <table class='min-w-full'>
                  <thead class='bg-white border-b'>
                    <tr>
                      <th
                        scope='col'
                        class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                      >
                        Type
                      </th>
                      <th
                        scope='col'
                        class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                      >
                        Total
                      </th>
                      <th
                        scope='col'
                        class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                      >
                        Eaten
                      </th>

                      <th
                        scope='col'
                        class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                      >
                        Rotten
                      </th>
                      <th
                        scope='col'
                        class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                      >
                        Giveaway
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {exceldata.map((item) => {
                      return (
                        <>
                          <tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
                            <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                              {item.Fruit}
                            </td>

                            <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                              {item.fruits_Count}
                            </td>

                            <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                              {item.Eaten}
                            </td>
                            <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                              {item.Rotten}
                            </td>
                            <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                              {item.Giveaway}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
                <div className='flex justify-center gap-60 '>
                  <p className=' flex'>100% {fSum}</p>
                  <p className=''>100% {eSum}</p>
                  <p className=''>100% {rSum}</p>
                  <p className=''>100% {gSum}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
