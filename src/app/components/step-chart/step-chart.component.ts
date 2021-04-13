import { ScaleDegrees } from '../../shared/models/key.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'step-chart',
  templateUrl: './step-chart.component.html',
  styleUrls: ['./step-chart.component.scss']
})
export class StepChartComponent implements OnInit {
  @Input() steps: ScaleDegrees;
  @Input() mood: string;

  constructor() { }

  ngOnInit(): void {}

}
