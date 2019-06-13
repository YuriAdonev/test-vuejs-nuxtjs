import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
    const config = {
        apiKey: 'AIzaSyBxHlk8KXQrHXnldRsKnbtd09uTHBSgxHw',
        authDomain: 'test-vue-nuxt.firebaseapp.com',
        databaseURL: 'https://test-vue-nuxt.firebaseio.com',
        projectId: 'test-vue-nuxt',
        storageBucket: 'test-vue-nuxt.appspot.com',
        messagingSenderId: '916852278747'
    }
    firebase.initializeApp(config);
}

const fireDb = firebase.firestore();

export {fireDb}