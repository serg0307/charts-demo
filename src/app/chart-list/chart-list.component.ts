import { Component, Input } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.scss']
})
export class ChartListComponent {
  chartsOptions: EChartsOption[] = [];
  constructor(private chartService: ChartService) {}
  ngOnInit(): void {
    for (let index = 0; index < 6; index++) {
      this.chartsOptions.push(this.chartService.getOptions(index));
    }
  }
}
