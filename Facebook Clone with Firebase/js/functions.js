function checkForm(form) {
    var gender = "";
    if ($('#genderFemale').prop('checked')) {
        gender = "Female";
    } else if ($('#genderMale').prop('checked')) {
        gender = "Male";
    }

    if (form.firstname.value == "") {
        alert("Please fill out your first name.")
    } else if (form.lastname.value == "") {
        alert("Please fill out your last name.")
    } else if (form.contact.value != form.reenter.value) {
        alert("Your contact information doesn't match. Please check it again.")
    } else if (form.password.value == "") {
        alert("Please fill out your password.")
    } else if (form.birthmonth.value == "none" || form.birthday.value == "none" || form.birthyear.value == "none") {
        alert("Please fill out your birthday.")
    } else if (gender == "") {
        alert("Please choose your gender.")
    } else {
        registerUser(form, gender);
    }
}

function registerUser(form, gender) {
    var email = form.contact.value;
    var password = form.password.value;

    //will add to Authentication --> User
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    });

    //detect auth user and save it
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

            firebase.database().ref('users/' + user.uid).set({
                email: form.contact.value,
                firstname: form.firstname.value,
                lastname: form.lastname.value,
                birthday: {
                    birthmonth: form.birthmonth.value,
                    birthday: form.birthday.value,
                    birthyear: form.birthyear.value
                },
                gender: gender,
                userID: user.uid,
                password: form.password.value
            });
        } else {
            // No user is signed in.
        }
    });
}

var login = document.getElementById('login');
login.addEventListener('click', authSignin);

var signout = document.getElementById('signout');
login.addEventListener('click', signout);

function authSignin() {
    var email = document.getElementById('username').value;
    var password = document.getElementById('pwd').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (user) {

            var uid = user.uid
            console.log(uid);
            console.log('sd');

            window.location.replace('homepage.html');
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;


        });
}

function signout() {
    firebase.auth.signOut().then(function () {
            console.log('logout')
        }, function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        }

    );
}
