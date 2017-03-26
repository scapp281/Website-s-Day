var createAccount = function(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    sweetAlert("Oops...", "ErrorCode: "+ errorCode + ",\n ErrorMessage: " + errorMessage +" ",  "error");
    console.error({ ErrorCode: errorCode, ErrorMessage: errorMessage });
  });
}

var login = function(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    sweetAlert("Oops...", "ErrorCode: " + errorCode + " , \ nErrorMessage: " + errorMessage + "error");
    console.error({ ErrorCode: errorCode, ErrorMessage: errorMessage });
  });
}

var logout = function() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    location.assign("/");
  }, function(error) {
    // An error happened.
    console.error("Error logging user out");
  });
}

$(document).ready(function() {
  $("#register").click(function(e) {
    e.preventDefault();
    var email = $("#registerEmail").val();
    var password = $("#registerPassword").val();
    if (email && password) {
      createAccount(email, password)
    }
  });

  $("#login").click(function(e) {
    e.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();
    if (email && password) {
      login(email, password)
    }
  });

  $("#logout").click(function() {
    logout();
  });
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    if (location.pathname !== "/views/loggedin.html") {
      location.assign("/views/loggedin.html");
    }
    console.log(user, "in observable");
    $(".currentUserEmail").html(user.email);
  } else {
    if (location.pathname !== "/") {
      location.assign("/");
    }
    console.error("No user signed in");
  }
});
