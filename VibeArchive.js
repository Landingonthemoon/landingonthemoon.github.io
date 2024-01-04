// signup button
document.addEventListener('DOMContentLoaded', function() {
    var signupElement = document.getElementById('signup');

    signupElement.addEventListener('click', function() {
        window.location.href = 'Signup.html'; 
    });
});

// login button 
document.addEventListener('DOMContentLoaded', function() {
    var signupElement = document.getElementById('login');

    signupElement.addEventListener('click', function() {
        window.location.href = 'Login.html'; 
    });
});

// Home button 
document.addEventListener('DOMContentLoaded', function() {
    var signupElement = document.getElementById('home');

    signupElement.addEventListener('click', function() {
        window.location.href = 'VibeArchive.html'; 
    });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼의 기본 제출 동작 방지

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var messageElement = document.getElementById('loginMessage');

    // 서버에 로그인 요청을 보내는 코드가 여기에 위치해야 합니다.
    // 아래는 로그인 검증 로직을 가정한 예시 코드입니다.
    if (username === "user" && password === "pass") {
        // 로그인 성공
        messageElement.textContent = "Log in Successfully";
        setTimeout(function() {
            window.location.href = 'homepage.html'; // 홈페이지로 리디렉션
        }, 2000); // 2초 후 페이지 이동
    } else {
        // 로그인 실패
        messageElement.textContent = "Your ID or password is incorrect";
    }
});


function check(form2)
{
    if (form2.userid.value == "1" && form2.userpassword.value == "1") {
        alert ("You log in successfully");
        window.open('VibeArchive.html');
        window.close('login.page.html');
    } else if (form2.userid.value == "" || form2.userpassword.value == "") {
        alert("You didn't enter ID or password. Try again");
    } else {
        alert("Error UserID or Password. Try Again");
    }
}

// function check(form1)
// {
//     if (form1.userid.value == "1" && form1.userpassword.value == "1") {
//         alert ("Created the account successfully");
//         window.open('VibeArchive.html');
//         window.close('login.page.html');
//     } else if (form1.userid.value == "" || form1.userpassword.value == "") {
//         alert("You didn't enter ID or password. Try again");
//     } else {
//         alert("Error UserID or Password. Try Again");
//     }
// }

function check() {
    var form = document.getElementById('signupForm');
    var userid = form.userid.value;
    var userpassword = form.userpassword.value;

    if (userid !== "" && userpassword !== "") {
        alert("Created the account successfully");
        window.open('VibeArchive.html');
        // Note: window.close might not work as expected due to browser security restrictions
    } else {
        alert("You didn't enter ID or password. Try again");
    }
}


