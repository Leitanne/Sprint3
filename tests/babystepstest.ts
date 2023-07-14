import { sum } from "../2/baby-stepsts";

describe("sum", () => {
    test("Debe devolver la suma correcta de los números", () => {
    const args: string[] = ["node", "sum.js", "4", "5"];
    expect(sum(args)).toEqual(9);
    });

    test("should return 0 if no numbers are provided", () => {
    const args: string[] = ["node", "sum.js", "", ""];
    expect(sum(args)).toEqual(0);
    });
});
