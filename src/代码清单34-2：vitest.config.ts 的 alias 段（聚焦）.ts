  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
      "server-only": fileURLToPath(new URL("./tests/server-only.stub.ts", import.meta.url)),
    },
  },