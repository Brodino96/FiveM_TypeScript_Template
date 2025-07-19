import z from "zod"
import { getLocalesOptions } from "./locales"

const ConfigType = z.object({
    debugMode: z.boolean(),
    locale: z.literal(getLocalesOptions())
})

export default async function getConfig() {
    const data = LoadResourceFile(GetCurrentResourceName(), "config.json")
    const parsedData = await JSON.parse(data)
}