//booleanas para mostrar contenido.
isInfo = false;
isHabi = false;
isExp = false;
isDatos = false;
duracionAnim = 500;
//col-1
document.getElementById('mostrarInfo').onclick = function () {
    if (!isInfo) {
        document.getElementById('col-1').style.animationName = "opacidadAnim";
        document.getElementById('col-1').style.animationDuration = "0.5s";
        document.getElementById('col-1').style.display = "block";
        isInfo = true;
    } else {        
        isInfo = false;
        document.getElementById('col-1').style.animationName = "opacidadAnimOff";
        document.getElementById('col-1').style.animationDuration = "0.5s";
        setTimeout(() => {
            document.getElementById('col-1').style.display = "none";
        }, duracionAnim);
    }   
}

document.getElementById('clicDatos').onclick = function () {
    if (!isDatos) {
        document.getElementById('datos-personales').style.animationName = "opacidadAnim";
        document.getElementById('datos-personales').style.animationDuration = "0.5s";
        document.getElementById('datos-personales').style.display = "block";
        isDatos = true;
    } else {        
        isDatos = false;
        document.getElementById('datos-personales').style.animationName = "opacidadAnimOff";
        document.getElementById('datos-personales').style.animationDuration = "0.5s";
        setTimeout(() => {
            document.getElementById('datos-personales').style.display = "none";
        }, duracionAnim);
    }
}

document.getElementById('clicExp').onclick = function () {
    if (!isExp) {
        document.getElementById('experiencia-laboral').style.animationName = "opacidadAnim";
        document.getElementById('experiencia-laboral').style.animationDuration = "0.5s";
        document.getElementById('experiencia-laboral').style.display = "block";
        isExp = true;
    } else {
        
        isExp = false;
        document.getElementById('experiencia-laboral').style.animationName = "opacidadAnimOff";
        document.getElementById('experiencia-laboral').style.animationDuration = "0.5s";
        setTimeout(() => {
            document.getElementById('experiencia-laboral').style.display = "none";
        }, duracionAnim);

    }
}

document.getElementById('clicHabi').onclick = function () {
    if (!isHabi) {
        document.getElementById('habilidades').style.animationName = "opacidadAnim";
        document.getElementById('habilidades').style.animationDuration = "0.5s";
        document.getElementById('habilidades').style.display = "block";
        isHabi = true;
    } else {

        isHabi = false;

        document.getElementById('habilidades').style.animationName = "opacidadAnimOff";
        document.getElementById('habilidades').style.animationDuration = "0.5s";
        setTimeout(() => {
            document.getElementById('habilidades').style.display = "none";
        }, duracionAnim);
    }
}

document.getElementById('portfolio').onclick = function () {
    document.getElementById('portfolio-hide').style.display = "block";
}

document.getElementById('portfolio-hide').onmouseleave = function () {
    document.getElementById('portfolio-hide').style.display = "none";
}