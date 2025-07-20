import { onClientCallback } from "@communityox/ox_lib/server"
import { Logger } from "../shared/logger"
import Config from "./utils/config"
import Locale from "./utils/locales"

function init() {
    const logger = new Logger(Config.logLevel)
    onClientCallback(`${GetCurrentResourceName()}:init`, (source) => {
        logger.debug("Recived init request from client: ", source)
        return {
            locale: Locale,
            logLevel: Config.logLevel
        }
    })
    logger.debug("This is the server!")
    logger.debug("Current log level: ", Config.logLevel)
    logger.debug("Current locale: ", Locale)
}

init()