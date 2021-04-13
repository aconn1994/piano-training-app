import { AngularFirestore } from '@angular/fire/firestore';
import { BaseService } from './base.service';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeySignature } from '../shared/models/key.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService extends BaseService{

  constructor(
    @Inject(AngularFirestore) afs: AngularFirestore,
    private firestorePath: string
  ) {
    super(afs)
  }

  getKeys() {
    return this.database.collection(this.firestorePath,
      ref => ref
      .orderBy('order', 'asc'))
      .valueChanges() as Observable<KeySignature[]>;
  }
}
