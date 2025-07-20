import * as z from "zod/mini"
import { getLocalesOptions } from "../../shared/locales"
import { LogLevel } from "../../shared/logger"
import { JSONC } from "jsonc.min"

const ConfigType = z.object({
    logLevel: z.enum(LogLevel),
    locale: z.literal(getLocalesOptions()),
})

const data = LoadResourceFile(GetCurrentResourceName(), "config.jsonc")
const parsedData = JSONC.parse(data)
const Config = ConfigType.parse(parsedData)

export default Config