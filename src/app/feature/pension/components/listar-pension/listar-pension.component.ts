import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PensionService } from './../../shared/service/pension.service';
import { Pension } from './../../shared/model/pension';


@Component({
  selector: 'app-listar-pension',
  templateUrl: './listar-pension.component.html',
  styleUrls: ['./listar-pension.component.css']
})
export class ListarPensionComponent implements OnInit {
  public listaPensiones: Observable<Pension[]>;

  constructor(protected pensionService: PensionService) { }

  ngOnInit() {
    this.listaPensiones = this.pensionService.consultar();
  }

}
