///<reference path="Jugador.ts"/>
var Equipo = /** @class */ (function () {
    function Equipo() {
        this.jugadores = [];
        this.cotizacion = 0;
    }
    Equipo.prototype.agregarJugador = function (jugador) {
        //Implementar
    };
    Equipo.prototype.quitarJugador = function (jugador) {
        var index = this.jugadores.indexOf(jugador, 0);
        if (index > -1) {
            this.cotizacion -= jugador.precio;
            this.jugadores.splice(index, 1);
        }
    };
    Equipo.prototype.listarJugadores = function () {
        var jugadores = "";
        for (var _i = 0, _a = this.jugadores; _i < _a.length; _i++) {
            var jugador = _a[_i];
            jugadores += jugador.toString();
        }
        return jugadores;
    };
    return Equipo;
}());
//# sourceMappingURL=Equipo.js.map