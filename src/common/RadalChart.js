import React from "react";
import * as XLSX from "xlsx";
// import xlss from "../SampleFile.xlsx";
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
export const RadalChart = () => {
  // let fileName = xlss;
  var workbook = XLSX.readFile("../SampleFile.xlsx");
  let worksheet = workbook.Sheets[workbook.SheetNames[0]];

  for (let index = 2; index < 7; index++) {
    const Fruit = worksheet[`A${index}`].v;
    const Status = worksheet[`B${index}`].v;

    console.log(Fruit, Status);
  }

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
