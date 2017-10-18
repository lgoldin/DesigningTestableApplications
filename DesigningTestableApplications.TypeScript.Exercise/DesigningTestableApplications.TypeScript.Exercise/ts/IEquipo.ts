interface IEquipo {
    agregarJugador(jugador: Jugador) : void;
    quitarJugador(jugador: Jugador): void;
    listarJugadores() : string;
}