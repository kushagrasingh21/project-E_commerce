document.getElementById('show-register').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('form-card').style.display = 'none'; 
    document.getElementById('register-card').style.display = 'block'; 
    document.getElementById('register-card').style.opacity = 0; 
    document.getElementById('register-card').style.transform = 'translateY(-20px)'; 
    setTimeout(() => {
        document.getElementById('register-card').style.opacity = 1; 
        document.getElementById('register-card').style.transform = 'translateY(0)';
    }, 10);
});

document.getElementById('show-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('register-card').style.display = 'none'; 
    document.getElementById('form-card').style.display = 'block'; 
    document.getElementById('form-card').style.opacity = 0; 
    document.getElementById('form-card').style.transform = 'translateY(-20px)'; 
    setTimeout(() => {
        document.getElementById('form-card').style.opacity = 1; 
        document.getElementById('form-card').style.transform = 'translateY(0)'; 
    }, 10);
});

document.getElementById('send-otp').addEventListener('click', function() {
    alert('OTP sent to your mobile number!');
});
