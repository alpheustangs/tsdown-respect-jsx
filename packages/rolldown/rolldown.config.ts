import type { RolldownOptions } from "rolldown";

import { defineConfig } from "rolldown";

const options: RolldownOptions = {
    input: "./src/index.ts",
    output: {
        dir: "./dist",
    },
    jsx: {
        mode: "classic",
        factory: "h",
        fragment: "h.f",
        importSource: "./factory",
    },
}

export default defineConfig([
    {
        ...options,
        output: {
            ...options.output,
            format: "esm",
            entryFileNames: "[name].mjs",
        }
    },
    {
        ...options,
        output: {
            ...options.output,
            format: "cjs",
            entryFileNames: "[name].js",
        }
    }
]);
