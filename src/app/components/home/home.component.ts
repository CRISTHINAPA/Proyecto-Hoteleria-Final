import { Component } from '@angular/core';
import { MantenimientoService } from '../../servicios/mantenimiento.service';
import { Habitaciones } from '../../models/habitaciones';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  habitaciones: Habitaciones[] = [];
  constructor(
    public mantenimientoService: MantenimientoService,
    ){}

  ngOnInit(){
    this.habitaciones = this.mantenimientoService.getHabitaciones();
  }
}