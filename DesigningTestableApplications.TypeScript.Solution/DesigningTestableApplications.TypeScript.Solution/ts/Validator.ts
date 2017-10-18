class Validator implements IValidator {
    private readonly presupuestoMaximo : number = 10000;

    alcanzaPresupuesto(cotizacionEquipo: number, precioJugador: number): boolean {
        return cotizacionEquipo + precioJugador <= this.presupuestoMaximo;
    }
}