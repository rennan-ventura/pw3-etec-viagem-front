import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastroViagemComponent } from '../cadastro-viagem/cadastro-viagem.component';
import { DetalhesViagemComponent } from '../detalhes-viagem/detalhes-viagem.component';
import { ExclusaoViagemComponent } from '../exclusao-viagem/exclusao-viagem.component';
import { ListagemViagemComponent } from '../listagem-viagem/listagem-viagem.component';

export const routes: Routes = [
  {path: 'cadastro-viagem', component: CadastroViagemComponent},
  {path: 'detalhes-viagem/:id', component: DetalhesViagemComponent},
  {path: 'exclusao-viagem/:id', component: ExclusaoViagemComponent},
  {path: '', component: ListagemViagemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
