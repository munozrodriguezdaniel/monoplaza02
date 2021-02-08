import { Component, OnInit } from "@angular/core";
import { Monoplaza } from "../monoplaza";
import { MonoplazasService } from "../monoplaza.service";
import { MessageService } from "../message.service";

@Component({
  selector: "app-monoplaza",
  templateUrl: "./monoplaza.component.html",
  styleUrls: ["./monoplaza.component.css"]
})
export class MonoplazaComponent implements OnInit {
  monoplazas: Monoplaza[];
  monoplazasApi = null;
  monoplazaTmp: any;

  constructor(
    private monoplazaService: MonoplazasService,
    private messageService: MessageService
  ) {}

  getMonoplazasApi() {
    this.monoplazaService.getMonoplazaApi().subscribe(monoplazas => {
      this.monoplazasApi = monoplazas;
      this.monoplazas = this.monoplazasApi;
    });
  }

  delete(monoplaza: Monoplaza): void {
    /* filter crea otro array filtrando los elementos que sean distintos de el "monoplaza" recibido.
    Se trata de que el array en memoria conincida con el server
    */
    this.monoplazas = this.monoplazas.filter(h => h !== monoplaza);
    this.monoplazaService.deleteMonoplaza(monoplaza).subscribe();
  }

  add(piloto2: string, km_rec2: string, pitstop2: string): void {
    const pilotot = piloto2.trim();
    const km_rect = parseInt(km_rec2);
    let pitstopt = true;

    if (pitstop2 == "true") {
      pitstopt = true;
    } else {
      pitstopt = false;
    }

    const newDoc: any = {
      piloto: pilotot,
      km_rec: km_rect,
      pistop: pitstopt
    };
    this.monoplazaService.addMonoplaza(newDoc).subscribe(monoplaza => {
      this.monoplazaTmp = newDoc;
      this.monoplazas.push(this.monoplazaTmp);
    });
  }

  ngOnInit() {
    this.getMonoplazasApi();
  }
}
