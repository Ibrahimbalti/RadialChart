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
  console.log(exceldata);

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

  const array = exceldata.filter((item) => item.Fruit === "Apple");

  var valueArr = array.map(function (item) {
    return item.Fruit;
  });

  //   var isDuplicate = array.some(function (item, idx) {
  //     return array.indexOf(item) != idx;
  //   });
  //   console.log(isDuplicate);

  return (
    <>
      <div>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
                      <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        1
                      </td>
                      <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        Mark
                      </td>
                      <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        Otto
                      </td>
                      <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        @mdo
                      </td>
                    </tr>
                    <tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
                      <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        2
                      </td>
                      <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        Jacob
                      </td>
                      <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        Thornton
                      </td>
                      <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        @fat
                      </td>
                    </tr>
                    <tr class='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
                      <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        3
                      </td>
                      <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        Larry
                      </td>
                      <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        Wild
                      </td>
                      <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                        @twitter
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
