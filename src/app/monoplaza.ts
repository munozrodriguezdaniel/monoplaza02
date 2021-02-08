export class Monoplaza {
  id: number;
  piloto: string;
  km_rec: number;
  pitstop: boolean;
  num_pitstop: number;

  constructor(
    id: number, 
    piloto: string,
    km_rec: number,
    pitstop: boolean,
    num_pitstop: number
  ) {
    this.id = id;
    this.piloto = piloto;
    this.km_rec = km_rec;
    this.pitstop = pitstop;
    this.num_pitstop = num_pitstop;
  }
  media() {
    let media : number = this.km_rec / this.num_pitstop;
    return decimales(media, 2);
  }
}

function decimales(x, posiciones = 0) {
  var s = x.toString();
  var decimalLength = s.indexOf(".") + 1;
  var numStr = s.substr(0, decimalLength + posiciones);
  return Number(numStr);
}