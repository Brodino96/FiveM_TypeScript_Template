import { defineConfig } from "rolldown"

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
        }
    },
    {
        input: "src/server/server.ts",
        platform: "node",
        output: {
            file: "dist/server.js",
            target: "esnext",
            format: "cjs",
        }
    }
])