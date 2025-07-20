import { onClientCallback } from "@communityox/ox_lib/server"
import { Logger } from "../shared/logger"
import Locale from "./utils/locales"
import Config from "./utils/config"

function init() {
    const config = Config
    const logger = new Logger(config.logLevel)
    onClientCallback(`${GetCurrentResourceName()}:init`, (source) => {
        logger.debug("Recived init request from client: ", source)
        return {
            locale: Locale,
            logLevel: config.logLevel
        }
    })
    logger.debug("This is the server!")
    logger.debug("Current log level: ", config.logLevel)
    logger.debug("Current locale: ", Locale)
}

init()