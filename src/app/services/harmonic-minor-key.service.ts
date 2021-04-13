import { DatabaseService } from './database.service';
import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestorePaths } from '../shared/constants/firestore-paths';

@Injectable({
  providedIn: 'root'
})
export class HarmonicMinorKeyService extends DatabaseService {

  constructor(
    @Inject(AngularFirestore) afs: AngularFirestore
  ) {
    super(
      afs,
      FirestorePaths.harmonicMinorKeys
    )
  }
}
