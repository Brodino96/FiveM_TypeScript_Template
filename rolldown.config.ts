import { defineConfig } from "rolldown"
import { visualizer } from "rollup-plugin-visualizer"

const clientPlugins = []
const serverPlugins = []

if (process.env["GRAPH"]) {
    clientPlugins.push(visualizer({ title: "Client", filename: "graphs/client.html" }))
    serverPlugins.push(visualizer({ title: "Server", filename: "graphs/server.html" }))
}

export default defineConfig([
    {
        input: "src/client/client.ts",
        output: {
            file: "dist/client.js",
            /**
             * FiveM is supposed to use es2017 on the client side
             * but it's also mega broken!
             * I found that esnext works fine so I will use this until further notice
             */
            target: "esnext",
        },
        plugins: clientPlugins
    },
    {
        input: "src/server/server.ts",
        platform: "node",
        output: {
            file: "dist/server.js",
            target: "esnext",
            format: "cjs",
        },
        plugins: serverPlugins
    }
])