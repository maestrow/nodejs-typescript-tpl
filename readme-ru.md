# About

Это шаблон для инициализации nodejs приложения на typescript. Возможности:
- Компиляция выполняется посредством webpack и ts-loader
- Выполнение скриптов посредством ts-node
- Добавлены настройки для отладки в VS Code (см папку .vscode/)
- При компиляции, выполнении и отладке учитывается опция [`compilerOptions/paths`][paths] в `tsconfig.json` (см. вариант использования - песочница).

## Sandbox

Вариант использования - песочница. Предположим вы работаете над некоторым проектом на nodejs. Вы хотите вызывать некоторые фунции вашего проекта из консольного приложения в целях тестирования, изучения или получения каких-то данных. Но по каким-то причинам не хотите размещать это консольное приложение внутри папки с проектом. Тогда это консольное приложение можно создать в отдельной папке и прописать в `tsconfig.json`, в опции `compilerOptions/paths` алиасы для модулей проекта, с которым работает данное консольное приложение. Благодаря `compilerOptions/paths` вы можете свободно перемещать папки с песочницей и папки проектов, удобно импортировать модули относительно псевдонима.

### Опция compilerOptions/paths

Опцию `compilerOptions/paths` прекрасно видит vscode, но компиляция и отладка с ней не работают (обсуждение [здесь](https://github.com/nestjs/nest/issues/986#issuecomment-414400785)). 

Чтобы опция учитывалась при компиляции через webpack, используется [tsconfig-paths-webpack-plugin](https://github.com/dividab/tsconfig-paths-webpack-plugin). 

Чтобы опция учитывалась при запуске через [ts-node](https://github.com/TypeStrong/ts-node), можно использовать [tsconfig-paths/register](https://github.com/dividab/tsconfig-paths).

Для отладки используйте конфигурацию "Debug TypeScript with webpack". Эта конфигурация использует `"preLaunchTask": "webpack"`, которая выполняет `npm run build -- ${fileBasename}`.


# Usage

Компиляция
    
    npm run build -- --env src=./src/sample1.ts

Выполнение

    npm start -- src/sample1.ts

VS Code: Компиляция текущего файла: 

    F1, "Tasks: Run Task", "webpack" (вызов `npm run build -- ${file}`)

VS Code: Отладка текущего файла:  

    "Debug TypeScript with webpack"


[paths]: https://www.typescriptlang.org/tsconfig#paths

# PS

- Не следует устанавливать отдельно пакет `tsc`, компилятор входит в состав пакета `typescript`. Если устанавливать отдельно пакет `tsc`, то может установиться старая версия.
- Если требуется отладить разрешение имен при компиляции через `tsc` можно использовать опцию `--traceResolution`.
