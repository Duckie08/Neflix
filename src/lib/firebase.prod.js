import Firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyAWTPFsn2KGY-JTWwOnUGotLeKnuAgg5ng",
    authDomain: "netflix-21710.firebaseapp.com",
    projectId: "netflix-21710",
    storageBucket: "netflix-21710.appspot.com",
    messagingSenderId: "164348614508",
    appId: "1:164348614508:web:fad4f85b2046f235e18549"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };