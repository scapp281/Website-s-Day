$(document).ready(function () {
    var config = {
        apiKey: "https://change-this-to-your-firebase.firebaseio.com/",
        authDomain: "https://change-this-to-your-firebase.firebaseio.com/",
        databaseURL: "https://change-this-to-your-firebase.firebaseio.com/",
        storageBucket: "https://change-this-to-your-firebase.firebaseio.com/",
        messagingSenderId: "https://change-this-to-your-firebase.firebaseio.com/"
    };


    if (config.databaseURL == "https://change-this-to-your-firebase.firebaseio.com/") {
        window.location.assign('Public/change.html');
    } else {
        firebase.initializeApp(config);
        window.location.assign('index.html');
    }
})
