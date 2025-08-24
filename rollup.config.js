import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "./src/js/main.js",
    output: {
      file: "./src/js/jamix-bootstrap.umd.js",
      format: "umd",
      name: "jamixBootstrap",
      esModule: false,
      sourcemap: true,
    },
    plugins: [resolve({ browser: true }), commonjs()],
  },
  {
    input: "./src/js/jamix-bootstrap.umd.js",
    output: {
      file: "dist/jamix-bootstrap.umd.min.js",
      format: "umd",
      name: "jamixBootstrap",
      esModule: false,
      sourcemap: true,
    },
    plugins: [
      resolve({ browser: true }),
      commonjs(),
      terser({ compress: { drop_console: true, module: true } })
    ],
  },
];
