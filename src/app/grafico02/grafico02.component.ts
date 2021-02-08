import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { MonoplazasService } from "../monoplaza.service";
import { Monoplaza } from "../monoplaza";

@Component({
  selector: "app-grafico02",
  templateUrl: "./grafico02.component.html",
  styleUrls: ["./grafico02.component.css"]
})
export class Grafico02Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  pilotos: Array<Monoplaza> = [];
  pilotosApi = null;
  pilotoTmp: any;

  chartOptions: Highcharts.Options = {
    chart: {
      type: "spline"  
    },
    xAxis: {
      categories: []
    },

    series: [
      {
        type: "spline",
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
    this.getMisDatos();
  }

  getMisDatos() {
    this.monoplazaService.getMonoplazaApi().subscribe(
      result => {
        const misDatos: Array<Monoplaza> = [];
        let api = null;
        api = result;
        for (let m of api) {
          let p = new Monoplaza(
            m.id,
            m.piloto,
            m.km_rec,
            m.pitstop,
            m.num_pitstop
          );
          misDatos.push(p);
        }
        const dataSeries = misDatos.map((x: Monoplaza ) => x.media());
        const dataCategorias = misDatos.map((x: Monoplaza ) => x.piloto);
        this.chartOptions.series[0]["data"] = dataSeries;
        this.chartOptions.xAxis["categories"] = dataCategorias;
        Highcharts.chart("miGrafico01", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}
