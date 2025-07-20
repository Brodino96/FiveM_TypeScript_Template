import { Logger, LogLevel } from "../shared/logger"
import { triggerServerCallback } from "@communityox/ox_lib/client"

async function init() {
    const response: { logLevel: LogLevel, locale: {}} | void = await triggerServerCallback(`${GetCurrentResourceName()}:init`, null)
    if (!response || !response.logLevel || !response.locale) return
    const logger = new Logger(response.logLevel)
    logger.debug("This is the client!")
    logger.debug("Current log level: ", response.logLevel)
    logger.debug("Current locale: ", response.locale)
}

init()