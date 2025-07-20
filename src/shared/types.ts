import type defaultLocale from "../../script/locales/en.json"
import type { LogLevel } from "./logger"

export type LocaleType = typeof defaultLocale

export type Initializer = {
    logLevel: LogLevel,
    locale: LocaleType
}