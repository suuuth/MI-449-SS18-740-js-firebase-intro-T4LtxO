
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
  var ref = firebase.database().ref('woofs')
  .on('value', function (woofSnapshot) {
    if (woofSnapshot.exists()) {
      var keys = Object.keys(woofSnapshot.val())
      console.log('Keys: ' + keys)
      for (var i = 0; i < keys.length; i++) {
        var thisWoof = Object.keys(woofSnapshot.val())[i]
        firebase.database().ref('woofs/'+thisWoof+'')
        .on('value', function (snapshot) {
          var woofKey = snapshot.key
          var woof = snapshot.val()
          addWoofRow(woofKey, woof)
        })
      }
    }
  })
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  firebase.database().ref('woofs/'+woofKey+'/text').set(
    '' + woofText
  )
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  firebase.database().ref('woofs/'+woofKey+'').remove()
}

// Load all of the data
readWoofsInDatabase()
