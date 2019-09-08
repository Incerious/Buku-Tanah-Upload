  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDyd1pKbzefWywaSCpSTPYVFlvHoLTtSxA",
    authDomain: "databtupload.firebaseapp.com",
    databaseURL: "https://databtupload.firebaseio.com",
    projectId: "databtupload",
    storageBucket: "databtupload.appspot.com",
    messagingSenderId: "646114807048",
    appId: "1:646114807048:web:5d2b0e944b6cf98d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  db.settings = ({ timestampsInSnapshots: true});