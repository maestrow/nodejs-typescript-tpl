[Русская версия](readme-ru.md)

# About

A template for typescript server-side app. Features:
- [webpack] v5 and [ts-loader] used for transpiling to javascript;
- [ts-node] used to run script;
- VSCode debugging, see .vscode folder
- [`tsconfig.json/compilerOptions/paths`][paths] option considered when compiling, running or debugging script (see Sandbox use case).

## Sandbox use case

Suppose you're working on some nodejs project. And you want call some project's functions in testing or learning purposes, or to get some data. You can use console app to call project's functions. But for some reasons you don't want to place this console app in project's folder. Then place this console app anywhere you want and specify aliases in [`compilerOptions/paths`][paths] option in `tsconfig`. Thanks to `paths` option you can use aliases to import modules.

### compilerOptions/paths option

VS Code linter sees `compilerOptions/paths` option, but by default compilation and debugging doesn't see that option. 

To utilise option in webpack, we're using [tsconfig-paths-webpack-plugin](https://github.com/dividab/tsconfig-paths-webpack-plugin).

To utilise option when run script through [ts-node], [tsconfig-paths/register](https://github.com/dividab/tsconfig-paths) is used. 

To debug script in VS Code, use "Debug TypeScript with webpack" configuration. Is depends on `"preLaunchTask": "webpack"`, which runs `npm run build -- ${fileBasename}`.

# Usage

Compile
    
    npm run build -- --env src=./src/sample1.ts

Run

    npm start -- src/sample1.ts

VS Code: Compile current file: 

    F1, "Tasks: Run Task", "webpack" (вызов `npm run build -- ${file}`)

VS Code: Debug current file:  

    "Debug TypeScript with webpack"

# PS

- Do not install `tsc` package separatelly, compiler is a part of `typescript` package. If install `tsc` separatelly, then old one might be installed.
- If you want to trace paths resolution, use `--traceResolution` tsc option.

[webpack]: https://webpack.js.org/
[ts-loader]: https://github.com/TypeStrong/ts-loader
[ts-node]: https://github.com/TypeStrong/ts-node
[paths]: https://www.typescriptlang.org/tsconfig#paths
