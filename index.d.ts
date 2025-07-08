/**
 * Auto-require modules in a directory and pass them arguments.
 * 
 * @param dirPath - The path to the directory containing the modules.
 * @param args - The arguments to pass to the modules when calling them.
 * @param recursive - If `true`, subdirectories will also be searched.
 * @param ignore - An array of module names to ignore.
 */
declare function bulkloader(dirPath: string, args: any[], recursive: boolean, ignore: string[]): void;

export = bulkloader;
