import { replace } from "ramda";
import encodeForUrl from "./encodeForUrl";

describe("test of encodeForUrl function", () => {
    it("should render test-space", () => {
        const resultExpected = encodeForUrl("test space");
        expect(resultExpected).toBe("test-space");
    });

    it("should render teste", () => {
        const resultExpected = encodeForUrl("testé");
        expect(resultExpected).toBe("teste");
    });

    it("should render recupere", () => {
        const resultExpected = encodeForUrl("récupéré");
        expect(resultExpected).toBe("recupere");
    });

    it("should render ii", () => {
        const resultExpected = encodeForUrl("îï");
        expect(resultExpected).toBe("ii");
    });

    it("should render oo", () => {
        const resultExpected = encodeForUrl("ôö");
        expect(resultExpected).toBe("oo");
    });

    it("should render uu", () => {
        const resultExpected = encodeForUrl("ûü");
        expect(resultExpected).toBe("uu");
    });

    it("should render yy", () => {
        const resultExpected = encodeForUrl("ŷÿ");
        expect(resultExpected).toBe("yy");
    });

    it("should render aaa", () => {
        const resultExpected = encodeForUrl("àầâ");
        expect(resultExpected).toBe("aaa");
    });

    it("should render a", () => {
        const resultExpected = encodeForUrl("ầ");
        expect(resultExpected).toBe("a");
    });

    it("should render aaa-eeee-ii-oo-uu-yy", () => {
        const resultExpected = encodeForUrl("àầä éèêë îï ôö ûü ŷÿ");
        expect(resultExpected).toBe("aaa-eeee-ii-oo-uu-yy");
    });

    it("should render patisserie", () => {
        const resultExpected = encodeForUrl("pàầätisserie");
        expect(resultExpected).toBe("paaatisserie");
    });
});
