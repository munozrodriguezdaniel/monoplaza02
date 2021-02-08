import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MonoplazaComponent } from "./monoplaza/monoplaza.component";
import { MonoplazaDetailComponent } from "./monoplaza-detail/monoplaza-detail.component";
import { Grafico01Component } from "./grafico01/grafico01.component";
import { Grafico02Component } from "./grafico02/grafico02.component";

const routes: Routes = [
  { path: "monoplaza", component: MonoplazaComponent },
  { path: "grafico", component: Grafico01Component },
  { path: "grafico2", component: Grafico02Component },
  { path: "detail/:id", component: MonoplazaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
