const FLOWERJS = (function auxiliar2() {
    //Esta funcion no va a estar disponible para el usuario
    function validar() {
        return true;
    }
    return {
        sumar: function (a) {
            validar();
            return a + 10000;
        },
        mostrar: function (r) {
            console.log("%c" + r, "color: orangered; font-size: 20px");
        }
    }
})();