Note: remember to change Database => Rules 

{
  "rules": {
    ".read": true,
    ".write": true
  }
}

//create a child node users and add data under userid
firebase.database().ref('users/' + user.uid).set({ email: form.contact.value});


// create child node under parent node
const dbRefObject = firebase.database().ref().child('object');

// reference child of Parent "object"
const dbRefList = dbRefObject.child('hobbie');

//sync object change
dbRefObject.on('value', snap => {
    preObject.inner = JSON.stringify(snap.val(), null, 3);
});


dbRefList.on('child_added', snap => {
   const li = document.createElement('li');
   li.innerText = snap.val();
   li.id = snap.key;
   ulList.appendChild(li);
});

dbRefList.on('child_change', snap => {
    const liChanged = document.getElementById(snap.key);
    liChanged.innerText = snap.val();
});

dbRefList.on('child_removed', snap => {
    const liRemoved = document.getElementById(snap.key);
    liRemoved.remove();
});
console.log(snap.val));


