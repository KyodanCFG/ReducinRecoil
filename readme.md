Reducin' Recoil [Camera] (for JET v1.1.0)
----------------
Version 1.1.0 (03.13.2021)
By Kyodan

This mod decreases the camera recoil for all weapons (except throwables and melee)!

**Download the latest release (in ZIP format) here: https://github.com/KyodanCFG/ReducinRecoil/releases**
                                                                                   
## Info

- By default, this mod will adjust settings for the following weapons to decrease their camera recoil:
    * Assault Rifle, Machinegun, and Submachinegun camera recoil reduced by `50%`
    * Assault Carbine, Bolt-Action Rifle, and Pistol camera recoil reduced by `40%`
    * Marksman Rifle and Shotgun camera recoil reduced by `30%`
    * Grenade Launcher camera recoil reduced by `20%`

## Installation

1. Extract archive to your `server folder/user/mods` folder 
    * Folder structure should look like `server folder/user/mods/Kyodan-ReducinRecoil-X.X.X`
2. Close your server (if it's running)
3. Edit `settings.json` in your preferred text editor/IDE, review/modify any settings, then save and close
4. Delete your `server folder/user/cache` folder
5. Run your server (it should generate a new cache)

* If you change a setting in `settings.json`, repeat steps 2-5 above

## Settings

- Below are the default settings:
    * `reducinRecoil`: true
    * `recoilRate_1`: 0.5,
    * `recoilRate_2`: 0.4,
    * `recoilRate_3`: 0.3,
    * `recoilRate_4`: 0.2

- Below are the flags for each setting:
    * `reducinRecoil` (true|false)          - determines if this script is enabled/disabled
    * `recoilRate_1` (float)                - determines how much recoil is decreased 
                                            (0 is no recoil reduction, 0.5 is half recoil, 1 is no recoil)
    * `recoilRate_2` (float)             
    * `recoilRate_3` (float)
    * `recoilRate_4` (float)

## Files

- If any of the files below are missing/misplaced, you may have to redownload/reinstall this archive:
    * `src/Reducin.js`
    * `mod.config.json`
    * `settings.json`
    * `readme.md`

## Need help?

1. Join the EmuTarkov Discord: https://discord.gg/33r4FPp
2. @ me in the #support channel which script + version, what the issue is, and a picture/log of that issue (if possible)

## Disclaimer

I am not responsible for any data loss in relation to the use of this mod (including, but not limited to game/profile data and/or content loss, damage caused to your software, computer, or mobile device). I encourage you to back up your server/profile data before using this mod.

## Changelog

- 03.13.21
    * Initial push to Github
