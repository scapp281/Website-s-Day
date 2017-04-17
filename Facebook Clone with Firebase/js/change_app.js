var config = {
    apiKey: "https://change-this-to-your-firebase.firebaseio.com/",
    authDomain: "https://change-this-to-your-firebase.firebaseio.com/",
    databaseURL: "https://change-this-to-your-firebase.firebaseio.com/",
    storageBucket: "https://change-this-to-your-firebase.firebaseio.com/",
    messagingSenderId: "https://change-this-to-your-firebase.firebaseio.com/"
};

var checkin = document.getElementById("checkin");
checkin.addEventListener("click", function () {
    if (config.databaseURL == "https://change-this-to-your-firebase.firebaseio.com/") {
        window.location.assign('change.html');
    } else {
        firebase.initializeApp(config);
        window.location.assign('index.html');
    }
});
