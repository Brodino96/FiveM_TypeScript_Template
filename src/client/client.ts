import { Logger, LogLevel } from "../shared/logger"
import { triggerServerCallback } from "@communityox/ox_lib/client"

async function init() {
    const response: LogLevel | void = await triggerServerCallback(`${GetCurrentResourceName()}:getLogLevel`, null)
    if (!response) return
    const logger = new Logger(response)
    logger.info("This is the client!")
}

init()