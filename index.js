const fs = require('fs');
const path = require('path');

function readDirectory(dirPath, args, recursive, ignore=[]) {
    fs.readdir(dirPath, (err, files) => {
        if (err) return console.error(`Erreur lors de la lecture du dossier: ${err}`);
        files.forEach(file => {
            if (ignore.includes(file) || ignore.includes(path.join(dirPath, file))) return;
            const modulePath = path.join(dirPath, file);
            fs.stat(modulePath, (err, stats) => {
                if (err) return console.error(`Erreur lors de la lecture du fichier: ${err}`);
                if (stats.isDirectory() && recursive === true) {
                    readDirectory(modulePath, args, recursive, ignore);
                } else if (path.extname(file) === '.js') {
                    try {
                        require(modulePath)(...args);
                    } catch (err) {
                        console.error(`Erreur lors du chargement du module ${modulePath}: ${err.message}`);
                    }
                }
            });
        });
    });
}

module.exports = (dirPath, args, recursive=false, ignore=[]) => {
    const absoluteDirPath = path.resolve(dirPath);
    
    readDirectory(absoluteDirPath, args, recursive, ignore)
}
