import { Component, OnInit, Input } from "@angular/core";
import { Monoplaza } from "../monoplaza";
import { MonoplazasService } from "../monoplaza.service";
import { MessageService } from "../message.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-monoplaza-detail",
  templateUrl: "./monoplaza-detail.component.html",
  styleUrls: ["./monoplaza-detail.component.css"]
})
export class MonoplazaDetailComponent implements OnInit {
  // @Input() and @Output() allow Angular to share data between the parent context and child directives or components
  monoplaza: Monoplaza;

  constructor(
    private monoplazaService: MonoplazasService,
    private route: ActivatedRoute,
    private location: Location,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getMonoplaza();
  }
  save(km_rec: string): void {
    const doc = {
      id: this.monoplaza.id,
      piloto: this.monoplaza.piloto,
      km_rec: parseInt(km_rec),
      pitstop: this.monoplaza.pitstop
    };
    this.monoplazaService.updateMonoplaza(doc).subscribe(() => this.goBack());
  }
  /*
  Para recuperar el documento por el Id reicibido como parámetro
  */
  getMonoplaza(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.messageService.add(`MonoplazasComponent: Selected monoplaza id=${id}`);
    this.monoplazaService.getMonoplaza(id).subscribe(monoplaza => {
      const monoplazaTmp: any = monoplaza;
      this.monoplaza = monoplazaTmp;
    });
  }
  goBack(): void {
    this.location.back();
  }
}
