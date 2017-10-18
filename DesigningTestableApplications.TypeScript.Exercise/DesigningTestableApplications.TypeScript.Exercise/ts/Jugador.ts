class Jugador {
    constructor(public nombre: string, public precio: number) {
    }

    toString() : string {
        return `{this.nombre} ($ {this.precio})\n`;
    }
}