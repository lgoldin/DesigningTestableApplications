var Jugador = /** @class */ (function () {
    function Jugador(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    Jugador.prototype.toString = function () {
        return "{this.nombre} ($ {this.precio})\n";
    };
    return Jugador;
}());
//# sourceMappingURL=Jugador.js.map