import { replace, pipe } from "ramda";
// voir pourquoi les â pose problème
//  voir si faut les séparer => /â/g, /à/g et /ä/g au lieu de /[àâä]/g
const replaceAWithAccentByA = replace(/[àäâ]/g, "a");
const replaceEWithAccentByE = replace(/[éèêë]/g, "e");
const replaceIWithAccentByI = replace(/[îï]/g, "i");
const replaceOWithAccentByO = replace(/[ôö]/g, "o");
const replaceUWithAccentByU = replace(/[ûü]/g, "u");
const replaceYWithAccentByY = replace(/[ŷÿ]/g, "y");

const replaceSpaceByDash = replace(/ /g, "-");

const encodeForUrl = pipe(
    replaceSpaceByDash,
    replace(/[àầä]/g, "a"), // obliger d'ajouter cette fonction qui fait doublon mais sinon marche pas
    replaceAWithAccentByA,
    replaceEWithAccentByE,
    replaceIWithAccentByI,
    replaceOWithAccentByO,
    replaceUWithAccentByU,
    replaceYWithAccentByY
);

export default encodeForUrl;
