import type { ConfigType } from "../types"

const jsonData = LoadResourceFile(GetCurrentResourceName(), "../config.json")
export const Config: ConfigType = JSON.parse(jsonData)