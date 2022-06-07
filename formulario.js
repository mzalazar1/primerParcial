window.onload = function() {
   //validacion nombre
    var nombre = document.getElementById('name');

    var nombreError = document.getElementById('nameError');
    
    nombre.addEventListener('blur', validateNombre);
    nombre.addEventListener('focus', clearNombreError);

    function clearNombreError(e) {
        nombreError.classList.add('hiddenError');
    }

    
    function validateNombre(e) {
        var x = nombre.value;
        if(x.length < 3) {
            nombreError.classList.remove('hiddenError');
        }
    }

    //validacion apellido
    var apellido = document.getElementById('ape');

    var apellidoError = document.getElementById('apeError');
    
    apellido.addEventListener('blur', validateApellido);
    apellido.addEventListener('focus', clearApellidoError);

    function clearApellidoError(e) {
        apellidoError.classList.add('hiddenError');
    }

    
    function validateApellido(e) {
        var x = apellido.value;
        if(x.length < 3) {
            apellidoError.classList.remove('hiddenError');
        }
    }

};
  
  //validacion mail
  var email = document.getElementById('mail');
  var emailError = document.getElementById('mailError');

 var regexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ ;

 email.addEventListener('blur', validateEmail);
 email.addEventListener('focus', clearEmailError);

 function clearEmailError(e) {
    emailError.classList.add('hiddenError');
}

function validateEmail(e) {
    if(!email.value.match(regexp)) {
        emailError.classList.remove('hiddenError');
    } 
}


  //validacion edad
  var edad = document.getElementById('edad');
  var edadError = document.getElementById('edadError');
  
  edad.addEventListener('blur', validateEdad);
  edad.addEventListener('focus', clearEdadError);

  function clearEdadError(e) {
    edadError.classList.add('hiddenError');
}


function validateEdad(e) {
    var x = edad.value;
    if(x < 0) {
        edadError.classList.remove('hiddenError');
    } else if(x > 100) {
        edadError.classList.remove('hiddenError');
    }
}

//e.preventDefault();