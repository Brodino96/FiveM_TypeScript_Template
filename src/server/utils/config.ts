import * as z from "zod/mini"
import { getLocalesOptions } from "./locales"
import { LogLevel } from "../../shared/logger"
import { JSONC } from "jsonc.min"

console.log(getLocalesOptions())

const ConfigType = z.object({
    logLevel: z.enum(LogLevel),
    locale: z.literal(getLocalesOptions()),
})

export function getConfig() {
    const data = LoadResourceFile(GetCurrentResourceName(), "config.jsonc")
    const parsedData = JSONC.parse(data)
    const Config = ConfigType.parse(parsedData)

    return Config
}