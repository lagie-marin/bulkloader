/**
 * Auto-require les modules dans un répertoire et leur passe des arguments.
 * 
 * @param dirPath - Le chemin vers le répertoire contenant les modules.
 * @param args - Les arguments à passer aux modules lors de leur appel.
 */
declare function autoRequire(dirPath: string, args: any[]): void;

export = autoRequire;