
// let firstName = document.getElementById("first_name").value; 
// shows no value in alert if i put this outside function body
// instead of inside

function addfunc(e) {
    
    let credentialsArr = [];
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    credentialsArr.push(firstName);
    credentialsArr.push(lastName);
    credentialsArr.push(email);
    credentialsArr.push(password);

    alert(credentialsArr[0]);

    document.getElementById("fn1").innerHTML = credentialsArr[0];
    document.getElementById("ln1").innerHTML = credentialsArr[1];
    document.getElementById("em1").innerHTML = credentialsArr[2];
    document.getElementById("pass1").innerHTML = credentialsArr[3];
    e.preventDefault();

    
    
}
