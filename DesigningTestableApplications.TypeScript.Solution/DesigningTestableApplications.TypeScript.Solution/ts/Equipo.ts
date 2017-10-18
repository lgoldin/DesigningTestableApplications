///<reference path="Jugador.ts"/>

class Equipo implements IEquipo {
    jugadores: Jugador[];
    cotizacion: number;

    private validator: IValidator;

    constructor(validator: IValidator) {
        this.validator = validator;
    }

    agregarJugador(jugador: Jugador): void {
        if (this.jugadores.length < 8 && this.validator.alcanzaPresupuesto(this.cotizacion, jugador.precio)) {
            this.jugadores.push(jugador);
            this.cotizacion += jugador.precio;
        }
    }

    quitarJugador(jugador: Jugador): void {
        let index: number = this.jugadores.indexOf(jugador, 0);
        if (index > -1) {
            this.cotizacion -= jugador.precio;
            this.jugadores.splice(index, 1);
        }
    }

    listarJugadores(): string {
        let jugadores: string = "";

        for (let jugador of this.jugadores) {
            jugadores += jugador.toString();
        }

        return jugadores;
    }
}