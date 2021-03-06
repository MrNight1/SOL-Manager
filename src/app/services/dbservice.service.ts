import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private db: AngularFirestore) { }

  addItem(path: string, item: any) {
    this.db.collection(path).add(item).then(
      (docRef) => {
        console.log('Exito: ', docRef.id);
      }
    );
  }

  updateItem(path: string, item: any) {
    this.db.doc(path).update(item).then(
      (docRef) => {
        console.log('Exito');
      }
    );
  }

  getAllItems(path: string): Observable<any[]> {
    let items: Observable<any[]>;

    // This is one way for getting data without documents id

    /*this.items = af.collection('eventos').valueChanges();
    this.items.subscribe(result => {
      console.log('Array content: ', result);
    });*/

    // This is another way for getting but it includes id documents
    items = this.db.collection(path).snapshotChanges().pipe(map(
      changes => {
        return changes.map( a => {
          const data = a.payload.doc.data();
          data['id'] = a.payload.doc.id;
          return data;
        });
      }
    ));
    return items;
  }
}
