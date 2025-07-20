import { onClientCallback } from "@communityox/ox_lib/server"
import { LoggerClass } from "../shared/logger"
import Locale from "./utils/locales"
import Config from "./utils/config"
import type { Initializer } from "../shared/types"

export const Logger: LoggerClass = new LoggerClass(Config.logLevel)

function init() {
    onClientCallback(`${GetCurrentResourceName()}:init`, (source): Initializer => {
        Logger.debug("Recived init request from client: ", source)
        return {
            locale: Locale,
            logLevel: Config.logLevel
        }
    })
    Logger.debug("This is the server!")
    Logger.debug("Current log level: ", Config.logLevel)
    Logger.debug("Current locale: ", Locale)
}

init()