import { Injectable } from '@angular/core';
import { EChartsOption } from 'echarts';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  mockData: EChartsOption[] = [
    {
      title: {
        left: '0',
        text: 'Pie Diagram 1',
        subtext: 'Mocking Data',
        textAlign: 'left',

      },
      tooltip: {},
      trigger: 'item',

      series: [
        {
          name: 'mock data 1',
          data: [
            { value: 820, name: 'val 1' },
            { value: 932, name: 'val 2' },
            { value: 901, name: 'val 3' },
            { value: 934, name: 'val 4' },
            { value: 1290, name: 'val 5' },
            { value: 1330, name: 'val 6' },
            { value: 1320, name: 'val 7' },
          ].sort((a, b) => a.value - b.value),
          radius: '55%',
          center: ['50%', '50%'],
          type: 'pie',
          itemStyle: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
          roseType: 'radius',
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: () => Math.random() * 200,
        },
      ],
    },
    {
      title: {
        right: '0%',
        text: 'Pie Diagram 2',
        subtext: 'Mocking Data',
        textAlign: 'right',
      },
      tooltip: {},
      trigger: 'item',
      series: [
        {
          data: [
            { value: 8120, name: 'val 1' },
            { value: 9321, name: 'val 2' },
            { value: 9201, name: 'val 3' },
            { value: 9344, name: 'val 4' },
            { value: 1290, name: 'val 5' },
            { value: 1330, name: 'val 6' },
            { value: 1320, name: 'val 7' },
          ],
          type: 'pie',
        },
      ],
    },
    {
      title: {
        left: '50%',
        text: 'Pie Diagram 3',
        subtext: 'Mocking Data',
        textAlign: 'center',
      },
      tooltip: {},
      trigger: 'item',
      series: [
        {
          data: [
            { value: 80, name: 'val 1' },
            { value: 92, name: 'val 2' },
            { value: 91, name: 'val 3' },
            { value: 94, name: 'val 4' },
            { value: 190, name: 'val 5' },
            { value: 130, name: 'val 6' },
            { value: 120, name: 'val 7' },
          ],
          type: 'pie',
        },
      ],
    },
    {
      title: {
        text: 'Bar Diagram 1',
        subtext: 'Mocking Data',
        bottom: '0'
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'bar',
        },
      ],
    },
    {
      title: {
        left: '50%',
        text: 'Bar Diagram 2',
        subtext: 'Mocking Data',
        textAlign: 'center',
      },

      legend: {
        align: 'auto',
        bottom: 10,
      },
      tooltip: {},
      dataset: {
        // Provide a set of data.
        source: [
          ['product', '2015', '2016', '2017'],
          ['Matcha Latte', 43.3, 85.8, 93.7],
          ['Milk Tea', 83.1, 73.4, 55.1],
          ['Cheese Cocoa', 86.4, 65.2, 82.5],
          ['Walnut Brownie', 72.4, 53.9, 39.1],
        ],
      },
      // Declare an x-axis (category axis).
      // The category map the first column in the dataset by default.
      xAxis: { type: 'category' },
      // Declare a y-axis (value axis).
      yAxis: {},
      // Declare several 'bar' series,
      // every series will auto-map to each column by default.
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],

    },
    {
      title: {
        right: '0',
        text: 'Bar Diagram 3',
        subtext: 'Mocking Data',
        textAlign: 'right',
      },

      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [
            { value: 80, name: 'val 1' },
            { value: 92, name: 'val 2' },
            { value: 91, name: 'val 3' },
            { value: 94, name: 'val 4' },
            { value: 190, name: 'val 5' },
            { value: 130, name: 'val 6' },
            { value: 120, name: 'val 7' },
          ],
          type: 'bar',
        },
      ],
    }
  ]
  constructor() { }
  getOptions(index: number): EChartsOption {
    return this.mockData[index];
  }
}
