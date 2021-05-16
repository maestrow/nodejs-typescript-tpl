https://www.metachris.com/2021/04/starting-a-typescript-project-in-2021/

## Требования

- бандлинг
- работает отладка в VSCode
- нет проблем с разрешением модулей как в случае компиляции с помощью tsc. При сборке проблем нет, но при запуске возникает: "Cannot find module ..."
- возможно использовать стандартные модули, такие как fs (при запуске и при отладке). При сборке через webpack b.


## Тесты

Кейсы:
- old-js.ts - plain old javascript without imports
- promises.ts - test Promise
- import.ts - используется `import { sub } from "utils/math";` относительно baseUrl (tsconfig)
- import-alias.ts - используется алиас из опции paths (tsconfig): `import { add } from "@src/utils/math";`  
- use-fs.ts - используется стандартный модуль nodejs - fs.

Проверяем:
- Сборка
- Запуск
- Отладка