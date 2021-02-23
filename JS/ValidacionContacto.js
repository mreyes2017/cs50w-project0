function validarContacto() {

    var formulario = document.addForm4;
    var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (formulario.txtNombre.value == "") {
        document.getElementById("alerta4").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor Ingresar su Nombre</div>';
        formulario.txtNombre.focus();
        return false;
    } else {
        document.getElementById("alerta4").innerHTML = "";
    }

    if (formulario.txtCorreo.value == "") {
        document.getElementById("alerta4").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor Ingresar su Correo</div>';
        formulario.txtCorreo.focus();
        return false;
    } else {
        document.getElementById("alerta4").innerHTML = "";
    }


    if (!exp.test(document.getElementById("txtCorreo").value)) {
        document.getElementById("alerta4").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Correo Inválido</div>';
        alert("Ingresar Correo Correctamente!!!")
        formulario.txtCorreo.focus();
        return false;
    } else {
        document.getElementById("alerta4").innerHTML = "";
    }


    if (formulario.txtNumero.value == "") {
        document.getElementById("alerta4").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor Ingresar su Número</div>';
        formulario.txtNumero.focus();
        return false;
    } else {
        document.getElementById("alerta4").innerHTML = "";
    }

    if (isNaN(document.getElementById("txtNumero").value)) {
        alert("Solo se utilizan números para el teléfono");
        document.getElementById("alerta4").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>SOLO NUMEROS</div>';
        formulario.txtNumero.focus();
        return false;
    } else {
        document.getElementById("alerta4").innerHTML = "";
    }

    /*
    if (formulario.txtAsunto.value == "") {
        document.getElementById("alerta4").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Agregar asunto</div>';
        formulario.txtAsunto.focus();
        return false;
    } else {
        document.getElementById("alerta4").innerHTML = "";
    }*/

    if (formulario.txtMensaje.value == "") {
        document.getElementById("alerta4").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Ingrese su mensaje</div>';
        formulario.txtMensaje.focus();
        return false;
    } else {
        document.getElementById("alerta4").innerHTML = "";
    }
    //--------------------------------------------------


    formulario.submit();
}

function SoloNumeros(e) {
    var key, teclado, numeros, especiales, tecladoEspecial;
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key);
    numeros = "0123456789";
    especiales = "8-37-38-46";
    tecladoEspecial = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
            tecladoEspecial = true;
        }
    }

    if (numeros.indexOf(teclado) == -1 && !tecladoEspecial) {
        document.getElementById("txtNumero").style.borderColor = "red";
        //alert("Solo Números");
        return false;
    } else {
        document.getElementById("txtNumero").style.borderColor = "";
    }
}

function SoloLetras(e) {
    var key, teclado, letras, especiales, tecladoEspecial;
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = " abcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-38-46-164";
    tecladoEspecial = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
            tecladoEspecial = true;
            break;
        }
    }

    if (letras.indexOf(teclado) == -1 && !tecladoEspecial) {
        //document.getElementById("txtNumero").style.borderColor = "red";
        //alert("Solo Letras");
        return false;
    }
}