/**
 * Auto-require les modules dans un répertoire et leur passe des arguments.
 * 
 * @param dirPath - Le chemin vers le répertoire contenant les modules.
 * @param args - Les arguments à passer aux modules lors de leur appel.
 * @param recursive - Si `true`, les sous-répertoires seront également parcourus.
 */
declare function bulkloader(dirPath: string, args: any[], recursive: boolean): void;

export = bulkloader;
