exports.mod = (mod_info) => {
    logger.logInfo(`   [MOD] Loading: ${mod_info.name} (${mod_info.version}) by ${mod_info.author}`);
    let itemsCache = fileIO.readParsed(global.db.user.cache.items);						// read from server cache (items)
    let settingsFile = require("../settings.json");							        // read from settings.json file
    let gameplaySettings = settingsFile.gameplay;                                   // for tidying up code/abstraction	
    //var consoleLog = "";                                                          // TODO: for external logging

    if (gameplaySettings.reducinRecoil == true) {                                   // if 'reducinRecoil' var in settings.json is set to true, execute script
        for (let item in itemsCache.data) {
            let cacheData = itemsCache.data[item];								    // for tidying up code/abstraction	

            if (cacheData._parent === "5447b5f14bdc2d61278b4567" ||                 // Assault Rifles parent ID
                cacheData._parent === "5447bed64bdc2d97278b4568" ||                 // Machineguns parent ID
                cacheData._parent === "5447b5e04bdc2d62278b4567" ) {                // Submachineguns parent ID
                if (typeof gameplaySettings.recoilRate_1 == "number" && gameplaySettings.recoilRate_1 >= 0) {
                    cacheData._props.CameraRecoil = cacheData._props.CameraRecoil - (cacheData._props.CameraRecoil * gameplaySettings.recoilRate_1);
                    //consoleLog += "Recoil set to " + recoilRate_1 + "\n";         // TODO: for external logging
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: 'recoilRate_1' variable has no value/is not a number/set to 0! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                }
            }

            if (cacheData._parent === "5447b5fc4bdc2d87278b4567" ||                 // Assault Carbines parent ID
                cacheData._parent === "5447b6254bdc2dc3278b4568" ||                 // Bolt-Action Rifles parent ID
                cacheData._parent === "5447b5cf4bdc2d65278b4567" ) {                // Pistols parent ID    
                if (typeof gameplaySettings.recoilRate_2 == "number" && gameplaySettings.recoilRate_2 >= 0) {   
                    cacheData._props.CameraRecoil = cacheData._props.CameraRecoil - (cacheData._props.CameraRecoil * gameplaySettings.recoilRate_2);
                    //consoleLog += "Recoil set to " + recoilRate_2 + "\n";         // TODO: for external logging
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: 'recoilRate_2' variable has no value/is not a number/set to 0! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                } 
            }

            if (cacheData._parent === "5447b6194bdc2d67278b4567" ||                 // Marksman Rifles parent ID
                cacheData._parent === "5447b6094bdc2dc3278b4567" ) {                // Shotguns parent ID    
                if (typeof gameplaySettings.recoilRate_3 == "number" && gameplaySettings.recoilRate_3 >= 0) {                 
                    cacheData._props.CameraRecoil = cacheData._props.CameraRecoil - (cacheData._props.CameraRecoil * gameplaySettings.recoilRate_3);
                    //consoleLog += "Recoil set to " + recoilRate_3 + "\n";         // TODO: for external logging
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: 'recoilRate_3' variable has no value/is not a number/set to 0! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                } 
            }

            if (cacheData._id === "5e81ebcd8e146c7080625e15") {                     // Grenade Launcher item ID         
                if (typeof gameplaySettings.recoilRate_4 == "number" && gameplaySettings.recoilRate_4 >= 0) {               
                    cacheData._props.CameraRecoil = cacheData._props.CameraRecoil - (cacheData._props.CameraRecoil * gameplaySettings.recoilRate_4);
                    //consoleLog += "Recoil set to " + recoilRate_4 + "\n";         // TODO: for external logging
                } else {
                    logger.logError(`[MOD] ${mod_info.name}: 'recoilRate_4' variable has no value/is not a number/set to 0! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
                    return;
                } 
            }
        }

        fileIO.write(global.db.user.cache.items, itemsCache);								// write all changes back to cache (items.json specifically)
        //fileIO.write(`user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/logs/console.log`, consoleLog);         // TODO: write to log file for ez diagnosin'
        logger.logSuccess(`[MOD] -- ${mod_info.name}: ON (${gameplaySettings.recoilRate_1}, ${gameplaySettings.recoilRate_2}, ${gameplaySettings.recoilRate_3}, ${gameplaySettings.recoilRate_4})`);
    } else {                                                                        // if 'reducinRecoil' var in settings.json is set to false, skip entire script
        logger.logSuccess(`[MOD] -- ${mod_info.name}: OFF`); 
    }
}