import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHighcharts = typeof Highcharts === 'object';
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    plotOptions: {
      series: {
        marker: {
          enabled: false
        }
      }
    },
    series: [{
      data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654],
      type: 'spline'
    }]
  }; // required
 // chartCallback: Highcharts.ChartCallbackFunction = function(chart) {} // optional function, defaults to null
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngular = false; // optional boolean, defaults to false
}
