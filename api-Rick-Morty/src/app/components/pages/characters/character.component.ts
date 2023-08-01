import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Character } from "@app/shared/interfaces/character.interface";

@Component({
    selector: 'app-character',
    template: `
            <div class="image">
                <a [routerLink]="['/character-details', character.id]">
                <img [ngSrc]="character.image" [alt]="character.image" class="card-img-top" style="opacity: 1;" width="450" height="450">
                </a>
            </div>`,
        changeDetection:ChangeDetectionStrategy.OnPush,
})

export class CharacterComponent{
    @Input()
    character!: Character;
      
}