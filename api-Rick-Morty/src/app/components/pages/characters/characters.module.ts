import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgOptimizedImage } from '@angular/common';

import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { CharacterDetailsComponent } from '@characters/character-details/character-details.component';
import { CharacterComponent } from '@characters/character.component';



const myComponents = [
  CharacterDetailsComponent, 
  CharacterListComponent,
  CharacterComponent 
];

@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule, InfiniteScrollModule, NgOptimizedImage],
  exports: [...myComponents],
})
export class CharactersModule {}
