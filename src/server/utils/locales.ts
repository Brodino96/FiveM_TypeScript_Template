import { readdirSync } from "fs"
import Config from "./config"

//@ts-ignore
const jsonData = LoadResourceFile(GetCurrentResourceName(), `/locales/${Config.locale}.json`)
const Locale = JSON.parse(jsonData)

export function getLocalesOptions(): string[] {
    //@ts-ignore
    const path: string = GetResourcePath(GetCurrentResourceName())
    const files = readdirSync(`${path}/locales`, { encoding: "utf-8" })
    return files.map(name => name.replace(/\.json$/, ""))
}

export default Locale