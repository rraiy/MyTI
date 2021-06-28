import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from '../../firebase.config';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;