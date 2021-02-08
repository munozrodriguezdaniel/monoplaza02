import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Inject } from "@angular/core";

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class Monoplaza {
  private _piloto: string;
  private _km_rec: number;
  private _pitstop: boolean;
  private _num_pitstop: number;

  constructor(
    @Inject(String)
    piloto: string,
    @Inject(Number)
    km_rec: number,
    @Inject(Boolean)
    pitstop: boolean,
    @Inject(Number)
    num_pitstop: number
  ) {
    this._piloto = piloto;
    this._km_rec = km_rec;
    this._pitstop = pitstop;
    this._num_pitstop = num_pitstop;
  }
  get piloto() {
    return this._piloto;
  }
  get km_rec() {
    return this._km_rec;
  }
  get pitstop() {
    return this._pitstop;
  }
  get num_pitstop() {
    return this._num_pitstop;
  }

  media_km_pit() {
    let media = this._km_rec / this._num_pitstop;
    return media;
  }
}
