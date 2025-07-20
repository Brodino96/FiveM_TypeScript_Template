import { Logger } from "../shared/logger"
import Config from "./utils/config"

function init() {
    const logger = new Logger(Config.logLevel)
    logger.info("This is the server")
}

init()