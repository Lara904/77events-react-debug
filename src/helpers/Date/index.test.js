
import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            const date = new Date("2022-01-01");
            const result = getMonth(date);
            expect(result).toBe("janvier");
        });
        
        it("the function return juillet for 2022-07-08 as date", () => {
            const date = new Date("2022-07-08");
            const result = getMonth(date);
            expect(result).toBe("juillet");
        });

        // Tests supplémentaires pour améliorer la couverture
        it("the function return décembre for 2022-12-31 as date", () => {
            const date = new Date("2022-12-31");
            const result = getMonth(date);
            expect(result).toBe("décembre");
        });

        it("the function return mars for 2022-03-15 as date", () => {
            const date = new Date("2022-03-15");
            const result = getMonth(date);
            expect(result).toBe("mars");
        });

        it("the function return juin for 2023-06-01 as date", () => {
            const date = new Date("2023-06-01");
            const result = getMonth(date);
            expect(result).toBe("juin");
        });
    });
});
