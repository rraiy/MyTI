import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage'; 
import { firebaseConfig } from '../../firebase.config';

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const storage = firebase.storage();