/// <reference path="./Scripts/typings/jasmine/jasmine.d.ts"/>
/// <reference path="../DesigningTestableApplications.TypeScript.Solution/ts/IValidator.ts" />
/// <reference path="../DesigningTestableApplications.TypeScript.Solution/ts/Validator.ts" />

describe("Validator Tests", () => {
    it("alcanzaPresupuesto si", () => {
        let validator: IValidator = new Validator();
        let resultado: boolean = validator.alcanzaPresupuesto(8000, 1200);
        expect(resultado).toBeTruthy();
    });

    it("alcanzaPresupuesto no", () => {
        let validator: IValidator = new Validator();
        let resultado: boolean = validator.alcanzaPresupuesto(8000, 2400);
        expect(resultado).toBeFalsy();
    });
});