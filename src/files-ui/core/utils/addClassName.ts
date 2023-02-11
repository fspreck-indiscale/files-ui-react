/**
 * If className is given, adds class name in string format to a base class name
 * @param baseClassName the base class name
 * @param className the class name to be added
 * @returns a new class name obtained by adding the second paramater
 */
export const addClassName = (
    baseClassName: string,
    className: string | undefined
): string => {
    let result: string = baseClassName;
    if (className) {
        result = `${result} ${className}`;
    }
    return result;
}