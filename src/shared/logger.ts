import Config from "./config"

export default class Logger {

    public static error(txt: any, bypass?: boolean) {
        if (!Config.debugMode || !bypass) return
        console.error(txt)
        console.log(`[ERROR] ${txt}`)
    }

    public static success(txt: any, bypass?: boolean) {
        if (!Config.debugMode || !bypass) return
        console.log(txt)
    }
    
    public static info(txt: any, bypass?: boolean) {
        if (!Config.debugMode || !bypass) return
        console.info(txt)
    }
    
    public static warn(txt: any, bypass?: boolean) {
        if (!Config.debugMode || !bypass) return
        console.warn(txt)
    }
}