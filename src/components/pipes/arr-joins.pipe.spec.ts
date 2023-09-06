import { ArrayJoinsPipe } from "./arr-joins.pipe";

describe("ArrayJoinsPipe", () => {
    it("create an instance", () => {
        const pipe = new ArrayJoinsPipe();
        expect(pipe.transform([["a", "b"]])).toEqual(["ab"]);
        expect(pipe.transform([["a", "b"]], "-")).toEqual(["a-b"]);
        expect(pipe.transform([["a", "b"]], "-", "!")).toEqual(["a-b!"]);
        expect(pipe.transform([["a", "b"]], "-", "!", "not:")).toEqual([
            "not:a-b!",
        ]);
    });
});
