/// <reference path="./Scripts/typings/jasmine/jasmine.d.ts"/>
/// <reference path="../DesigningTestableApplications.TypeScript.Solution/ts/IValidator.ts" />
/// <reference path="../DesigningTestableApplications.TypeScript.Solution/ts/IEquipo.ts" />
/// <reference path="../DesigningTestableApplications.TypeScript.Solution/ts/Equipo.ts" />

describe("Equipo Tests", () => {
    it("agregarJugador", () => {
        let validator = jasmine.createSpyObj("validator", ["alcanzaPresupuesto"]);
        validator.alcanzaPresupuesto.and.returnValue(true);
        let equipo: Equipo = new Equipo(<IValidator>validator);

        let jugador: Jugador = new Jugador("Lionel Messi", 6000);

        equipo.agregarJugador(jugador);

        expect(equipo.cotizacion).toBe(6000);
        expect(equipo.jugadores.length).toBe(1);

        expect(validator.alcanzaPresupuesto).toHaveBeenCalledWith(0, 6000);
    });
});