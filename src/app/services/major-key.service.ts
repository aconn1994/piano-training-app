import { FirestorePaths } from './../shared/constants/firestore-paths';
import { DatabaseService } from './database.service';
import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MajorKeyService extends DatabaseService{

  constructor(
    @Inject(AngularFirestore) afs: AngularFirestore
  ) {
    super(
      afs,
      FirestorePaths.majorKeys);
  }
}
