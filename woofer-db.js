
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDqur1A7d7jxPIDOjS4Rjum6uGizSOgcus',
  authDomain: 'joke-a-tron-9000-46ef7.firebaseapp.com',
  databaseURL: 'https://joke-a-tron-9000-46ef7.firebaseio.com',
  projectId: 'joke-a-tron-9000-46ef7',
  storageBucket: 'joke-a-tron-9000-46ef7.appspot.com',
  messagingSenderId: '976711736145'
}
firebase.initializeApp(config)
firebase.auth().signInAnonymously()

// CREATE a new woof in Firebase
function createWoofInDatabase (woof) {
  window.alert('' + woof.text)
  window.alert('' + woof.created_at)
  firebase.database().ref('woofs').push({
    "created_at": woof.created_at,
    "text": woof.text
  })
}

// READ from Firebase when woofs are added, changed, or removed
// Write a function for each 'on' method and call addWoofRow,
// updateWoofRow, and deleteWoofRow to update the page. Make
// sure to pass the right parameters (hint: these functions are
// defined in woofer-ui.js).
function readWoofsInDatabase () {
  // TODO read new, changed, and deleted Firebase records
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  // TODO update the record in Firebase
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  // TODO delete the record from Firebase
}

// Load all of the data
readWoofsInDatabase()
