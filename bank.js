document.getElementById('login-button').addEventListener('click', function () {
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;
    
    // uesr password set
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // valid ki na check this
    if (userEmail == 'suzit@gmail.com' && userPassword == 'suzit') {
        window.location.href = 'index.html';
      
        // console.log('valid password')
    }
})