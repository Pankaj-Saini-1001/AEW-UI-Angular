import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import * as XLSX from 'xlsx';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-chart-app',
  standalone: true,
  imports: [],
  templateUrl: './chart-app.component.html',
  styleUrl: './chart-app.component.css'
})
export class ChartAppComponent {

  data: any[] = [];
  
    public chartinfo : any = {
      type : 'line',
  
      data: {
          labels : [],
          datasets : [
            {
              label : ['Appliances'],
              data  : [],
              backgroundColor: '#6e477f',  
              borderColor: 'black',       
              borderWidth: 1,
              fill : false
            }
        ]
        },
  
        options: {
          aspectRatio: 1.5,
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top',
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Months',
                color:'black'
              },
            },
            y: {
              title: {
                display: true,
                text: 'No. of Items sold',
                color: 'black'
              },
            },
          },
        }
      };
  
    chart : any;
  
    apiData : any[] = [];
  
    http = inject(HttpClient);
  
    constructor(){
      this.loadExcel();
    }
  
    loadExcel() : void{
  
      const filePath = 'assets/excel/appliances.xlsx'; 
  
      fetch(filePath).then((response) => response.arrayBuffer()).then((data) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];                     // Get the first sheet
        const worksheet = workbook.Sheets[sheetName];
        this.data = XLSX.utils.sheet_to_json(worksheet);                 // Convert to JSON don't forget now the fie is in json form
        this.data = XLSX.utils.sheet_to_json(worksheet, { range: 0 });    // starting row
  
        this.assignvalueOfExcel();
      });
    }
  
    assignvalueOfExcel(){
  
      this.chartinfo.data.labels = this.data.map((row: any) => row['Month']);  // Use 'Month' for labels
      this.chartinfo.data.datasets[0].data = this.data.map((row: any) => row['Customers']);  // Use 'Customers' for data
      this.assignValue();
  }
  
    assignValue(){
      this.chart = new Chart('c10' , this.chartinfo);
    }
  }