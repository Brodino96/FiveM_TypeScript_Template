import { readdirSync } from "fs"
import Config from "./config"

//@ts-ignore
const jsonData = LoadResourceFile(GetCurrentResourceName(), `/locales/${Config.locale}.json`)
const Locale = JSON.parse(jsonData)

export function getLocalesOptions(): string[] {
    const path: string = GetResourcePath(GetCurrentResourceName())
    return readdirSync(path, { encoding: "utf-8" })
}

export default Locale