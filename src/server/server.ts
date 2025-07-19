import Config from "../shared/config"
import Logger from "../shared/logger"

function init() {
    Logger.info("This is the server!")
    Logger.info(`The current configuration is: ${Config}`)
}

init()