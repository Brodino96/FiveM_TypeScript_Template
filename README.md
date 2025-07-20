# FiveM TypeScript Template

This is a template for developing FiveM scripts using TypeScript.

## Features

*   **TypeScript:** because it's amazing and writing JavaScript code is orrible.
*   **Server-Side Config & Locales:** Configuration and language files are stored only on the server-side for better security.
*   **Callbacks for Shared Info:** Important information, such as log level and current locale, is shared from the server to the client using callbacks.
*   **ESX and ox_lib compatible:** Includes dependencies for ESX and ox_lib.

### Installation

1.  Clone this repository.
2.  Install the dependencies (I personally use bun):

```bash
bun install
```

## Usage

To start developing, run the following command:

```bash
bun run dev
```

This will bundle the script without checking for type errors.

## Building for Production

To build the script for production, run the following command:

```bash
bun run build
```

This will create optimized and minified versions of your client and server scripts in the `dist` folder.

## Project Structure

```
.
├── src
│   ├── client
│   │   └── client.ts
│   ├── server
│   │   └── server.ts
│   └── shared
│       └── logger.ts
├── script
│   ├── fxmanifest.lua
│   ├── config.jsonc
│   └── locales
│       ├── en.json
│       └── it.json
├── package.json
├── rolldown.config.ts
└── tsconfig.json
```

*   **src:** Contains the TypeScript source code for the client, server, and shared logic.
*   **script:** Contains the FiveM resource manifest, configuration files, and language files.
*   **dist:** Contains the compiled JavaScript files that are used by the FiveM server.

## Author

Brodino