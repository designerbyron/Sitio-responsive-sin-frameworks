let overlay = document.getElementById("overlay"),
    btnCerrar = document.getElementById("btn-cerrar"),
    popUp = document.getElementById("popup");


let enlaceContacto = document.getElementById("enlace-contacto");
enlaceContacto.addEventListener("click", function(){
    overlay.classList.add("active");
    popUp.classList.add("active");
});

btnCerrar.addEventListener("click", function(){
    overlay.classList.remove("active");
    popUp.classList.remove("active")
});
window.addEventListener("click", function(e){
   if(e.target == overlay){
        overlay.classList.remove("active");
        popUp.classList.remove("active");
   }
});

    //   Listo menu de hambuergesa Javascript Puro

    // Look for .hamburger
    var hamburger = document.getElementById("main-hamburger");
var mostrarNavegacion = document.getElementById("navegacion_tablet_pc");

    // On click
    hamburger.addEventListener("click", function() {

        // Toggle class "is-active"
        
        hamburger.classList.toggle("is-active");
        // Do something else, like open/close menu
        mostrarNavegacion.classList.toggle("mostrar_navegacion_movil");


    });
