/**
 * Use this function in order to remove the void type after a function who can throw an Error
 *
 * @param elementToKeep {Any} the element to return
 * @returns elementToKeep
 */
export default function removeTypeVoidIfIsFound<TypeToKeep>(
    elementToKeep: TypeToKeep | void
): TypeToKeep {
    return elementToKeep!;
}
