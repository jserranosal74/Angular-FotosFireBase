import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
//import * as firebase from 'firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FileItem } from '../models/file-item';


@Injectable()
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';

  constructor( private db: AngularFirestore ) { }


  cargarImagenesFirebase( imagenes: FileItem[] ) {

    // for ( const item of imagenes ) {

    //   item.estaSubiendo = true;
    //   if ( item.progreso >= 100 ) {
    //     continue;
    //   }

    //   const storage = getStorage();
    //   const storageRef = ref(storage, `${ this.CARPETA_IMAGENES }/${ item.nombreArchivo }`);

    //   const uploadTask = uploadBytesResumable(storageRef,item);

    //   uploadTask.on( storage.TaskEvent.STATE_CHANGED,
    //           ( snapshot: firebase.storage.UploadTaskSnapshot ) =>
    //                       item.progreso = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
    //           ( error ) => console.error('Error al subir', error ),
    //           () => {

    //             console.log('Imagen cargada correctamente');
    //             item.url = uploadTask.snapshot.downloadURL;
    //             item.estaSubiendo = false;
    //             this.guardarImagen({
    //               nombre: item.nombreArchivo,
    //               url: item.url
    //             });
    //           });


    // }

  }


  private guardarImagen( imagen: { nombre: string, url: string } ) {

    this.db.collection(`/${ this.CARPETA_IMAGENES }`)
            .add( imagen );

  }

}
