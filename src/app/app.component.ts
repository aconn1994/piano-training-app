import { NaturalMinorKeyService } from './services/natural-minor-key.service';
import { MajorKeyService } from './services/major-key.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { KeySignature } from './shared/models/key.model';
import { HarmonicMinorKeyService } from './services/harmonic-minor-key.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  majorKeysObservable: Observable<KeySignature[]>;
  naturalMinorKeysObservable: Observable<KeySignature[]>;
  harmonicMinorKeysObservable: Observable<KeySignature[]>;

  constructor(
    private majorKeyService: MajorKeyService,
    private naturalMinorKeyService: NaturalMinorKeyService,
    private harmonicMinorKeyService: HarmonicMinorKeyService
  ) {
    this.majorKeysObservable = this.majorKeyService.getKeys();
    this.naturalMinorKeysObservable = this.naturalMinorKeyService.getKeys();
    this.harmonicMinorKeysObservable = this.harmonicMinorKeyService.getKeys();
  }
}
