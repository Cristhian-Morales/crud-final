document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const validEmail = 'correo@correo.com';
    const validPassword = '123456';

    
    const enteredEmail = document.getElementById('email').value;
    const enteredPassword = document.getElementById('password').value;

    
    if (enteredEmail === validEmail && enteredPassword === validPassword) {
    
        window.location.href = 'adminindex.html'; 
    } else {
    
        alert('Email o contraseña incorrectos.');
    }
});
