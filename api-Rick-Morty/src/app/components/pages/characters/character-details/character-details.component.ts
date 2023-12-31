import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, take } from 'rxjs';

import { Character } from '@app/shared/interfaces/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit{

  character$!: Observable<Character>;
  constructor(
    private route:ActivatedRoute,
    private characterSvc:CharacterService,
    private location:Location
    ) {}

  ngOnInit(): void {

    this.route.params.pipe(take(1))
    .subscribe((params) => {
      const id = params['id'];
      this.character$ = this.characterSvc.getDetails(id);
    });
  }

  onGoBack(): void {
    this.location.back();
  }

  
}
