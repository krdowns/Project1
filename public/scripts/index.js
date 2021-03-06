function makeBalls(){
    console.log('balls')
    let color = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

    for (let i=6; i>=0; i--) {
    $(".top").append(
        `<div class="ball" style="background-color:${color[i]}"><h3 id="number">${i+1}</h3><div>`
        )
    }
}

function resetWindow() {
    location.reload();
}

$(".signout-button").click(resetWindow);

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    $('.profile-button').css('display', 'inline-block');
    $('.signout-button').css('display', 'inline-block');
    makeBalls();
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    $('.profile-button').css('display', 'none');
    $('.signout-button').css('display', 'none');     
    });
}