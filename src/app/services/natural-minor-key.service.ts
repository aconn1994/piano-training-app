import { FirestorePaths } from './../shared/constants/firestore-paths';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatabaseService } from './database.service';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NaturalMinorKeyService extends DatabaseService {

  constructor(
    @Inject(AngularFirestore) afs: AngularFirestore
  ) {
    super(
      afs,
      FirestorePaths.naturalMinorKeys
    )
  }
}
