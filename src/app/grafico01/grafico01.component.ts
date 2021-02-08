import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { MonoplazasService } from "../monoplaza.service";

@Component({
  selector: "app-grafico01",
  templateUrl: "./grafico01.component.html",
  styleUrls: ["./grafico01.component.css"]
})
export class Grafico01Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: "column"
    },
    xAxis: {
      categories: []
    },

    series: [
      {
        type: "column",
        data: []
      }
    ],
    noData: {
      style: {
        fontWeight: "bold",
        fontSize: "15px",
        color: "#303030"
      }
    }
  };

  constructor(private monoplazaService: MonoplazasService) {}

  ngOnInit() {
    //  this.getHeroesApi();
    this.getMisDatos();
  }

  /*
Estructura:
{
id: "5",
name: "Bode.",
salary: 84909,
}
  */

  getMisDatos() {
    this.monoplazaService.getMonoplazaApi().subscribe(
      result => {
        const misDatos: any = result;
        const dataSeries = misDatos.map((x: any) => x.km_rec);
        const dataCategorias = misDatos.map((x: any) => x.piloto);
        this.chartOptions.series[0]["data"] = dataSeries;
        this.chartOptions.xAxis["categories"] = dataCategorias;
        Highcharts.chart("miGrafico01", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}
