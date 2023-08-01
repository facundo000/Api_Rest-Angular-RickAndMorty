import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggler',
  template: `
  <div class="cont">
    <a class="navbar-brand nav-logo" style="padding-left: 33px;" routerLink="/">
      Rick<span style="color: #029108;">&</span>Morty<span style="color: #029108;">APP</span>
    </a>
    <button
      (click)="setActive()"
      class="navbar-toggler cont__toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
      >
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
  <div 
    class="cont__list cont__list--activo"
    [ngClass]="{ 'cont__list--activo' : active}"
    >
    <ul class="cont__ul">
      <li class="cont__li"><a class="cont__a">Enlace 1</a></li>
      <li class="cont__li"><a class="cont__a">Enlace 2</a></li>
      <li class="cont__li"><a class="cont__a">Enlace 3</a></li>
    </ul>
  </div>`,

  styleUrls: ['./toggler.component.scss'],
})
export class TogglerComponent implements OnInit{
  
  public active : boolean = false;

  constructor() { };

  ngOnInit(): void { };

  setActive(): void {
    this.active = !this.active
  };
}