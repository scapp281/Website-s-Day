var config = {
    apiKey: "AIzaSyDgAWcossegiFuJBN7k63LHmcD24xUiPOw",
    authDomain: "facebook-clone-with-firebasse.firebaseapp.com",
    databaseURL: "https://facebook-clone-with-firebasse.firebaseio.com",
    storageBucket: "facebook-clone-with-firebasse.appspot.com",
    messagingSenderId: "881789000386"
};

if (config.databaseURL == "https://change-this-to-your-firebase.firebaseio.com/") {
    alert("請將MyFirebaseRef裡面的'change-this-to-your-firebase'部份換成自己的連結，然後你可以將這個alert刪除。")
} else {
    firebase.initializeApp(config);
}
// Initialize Firebase
//    var config = {
//        apiKey: "AIzaSyDgAWcossegiFuJBN7k63LHmcD24xUiPOw",
//        authDomain: "facebook-clone-with-firebasse.firebaseapp.com",
//        databaseURL: "https://change-this-to-your-firebase.firebaseio.com/",
//        storageBucket: "facebook-clone-with-firebasse.appspot.com",
//        messagingSenderId: "881789000386"
//    };
