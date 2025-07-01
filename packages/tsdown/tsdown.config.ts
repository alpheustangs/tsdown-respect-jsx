import type { Options } from "tsdown";

import { defineConfig } from "tsdown";

const options: Options = {
    entry: {
        index: "./src/index.ts",
    },
    outDir: "./dist",
    clean: true,
    inputOptions: {
        jsx: {
            mode: "classic",
            factory: "h",
            fragment: "h.f",
            importSource: "./factory",
        },
    },
};

export default defineConfig([
    {
        ...options,
        format: "esm",
    },
    {
        ...options,
        format: "cjs",
    },
]);
