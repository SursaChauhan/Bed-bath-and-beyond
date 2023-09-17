// Function for user sign-up
document.querySelector(".account form").addEventListener("submit", signUp);

var userDataBase = JSON.parse(localStorage.getItem("userDataBase")) || [];
var flag = false;

function signUp(event) {
    event.preventDefault();

    let email = document.querySelector(".account #email").value;
    let password = document.querySelector(".account #password").value;

    let userData = {
        userEmail: email,
        userPassword: password,
    };

    if (userDataBase.length !== 0) {
        let arr = JSON.parse(localStorage.getItem("userDataBase")) || [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].userEmail === email) {
                flag = true;
                break;
            }
        }

        if (flag) {
             alert("User already exists!!");
            // p.textContent = "User already exist!!"
            // p.style.color = "red" 
        } else {
            var p = document.querySelector("#status");
            userDataBase.push(userData);
            localStorage.setItem("userDataBase", JSON.stringify(userDataBase));
            // alert("Signup Successful !! Enter Login Credentials");
            p.textContent = "Signup Successful !! Enter Login Credentials";
            p.style.color = "green"
            document.querySelector(".account #email").value = "";
            document.querySelector(".account #password").value = "";
        }
    } else {
        userDataBase.push(userData);
        localStorage.setItem("userDataBase", JSON.stringify(userDataBase));
        alert("Signup Successful!! Enter Login Credentials");
        document.querySelector(".account #email").value = "";
        document.querySelector(".account #password").value = "";
    }
  }
   
    document.getElementById("setNewPasswordButton").addEventListener("click", function() {
    window.location.href = "reset.html";
   });
   // Function for user login
    document.querySelector(".Sign form").addEventListener("submit", logIn);

   function logIn(event) {
    event.preventDefault();

    let email = document.querySelector(".Sign #email").value;
    let password = document.querySelector(".Sign #password").value;
    var p = document.querySelector("#Lstatus")

    let arr = JSON.parse(localStorage.getItem("userDataBase"));

    for (let i = 0; i < arr.length; i++) {
        if (
            arr[i].userEmail === email &&
            arr[i].userPassword === password
        ) {
            flag = true;
        
            // alert("Login Successful!!");
            p.textContent = "Login Successful!!"
            p.style.color = "green" 
            setTimeout(() => {
                 window.location.href = "index.html";
            }, 800);

            break;
        }
    }

    if (!flag) {
        // alert("Wrong Credentials!!");
        p.textContent = "Wrong Credentials!!"
        p.style.color = "red" 
    }
  }
   
 document.getElementById("forgotPasswordLink").addEventListener("click", function(event) {
    event.preventDefault(); 
    window.location.href = "reset.html";
  });

document.getElementById("continueWithGoogleButton").addEventListener("click", function() {
    var googleAuthUrl = "https://accounts.google.com/o/oauth2/auth?" +
        "client_id=YOUR_CLIENT_ID" + 
        "&redirect_uri=YOUR_REDIRECT_URI" + 
        "&scope=email" + 
        "&response_type=token";
    window.open(googleAuthUrl, "GoogleOAuth", "width=600,height=400");
});

// document.getElementById("resetPasswordButton").addEventListener("click", function() {
   
//     var resetPasswordMessage = document.getElementById("resetPasswordMessage");
//      resetPasswordMessage.style.display = "reset password";
    
// })


document.addEventListener("DOMContentLoaded", function() {
    
    // var btn = document.getElementById("btn");
    var cross = document.getElementById("cross");
    var loginPage = document.getElementById("login_page");
  
    // btn.addEventListener("click", function() {
    //   // Show the "login_page" element
    //   document.body.style.width = "60%";
    // });
  
    cross.addEventListener("click", function() {
       loginPage.style.display = "none";
    //    loginPage.parentNode.remove();
     window.location.href = "index.html";
    });
  });
  
 


  