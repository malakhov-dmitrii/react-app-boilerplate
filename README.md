# Boilerplate React APP

<a href="https://codeclimate.com/github/Hennessy811/react-app-boilerplate/maintainability"><img src="https://api.codeclimate.com/v1/badges/c43b0fe0a9547c15065a/maintainability" /></a>
<a id="status-image-popup" title="Latest push build on default branch: " name="status-images" class="pointer open-popup">
          <img src="https://travis-ci.org/Hennessy811/react-app-boilerplate.svg?branch=master" alt="build:">
        </a>

Чтобы запустить проект на локальной машине используйте

`yarn` для установки зависимостей

`yarn start` для запуска проекта

По умолчанию проект будет запущен на порту 3000.

`yarn test` для прогона имеющихся тестов

Чтобы собрать production сборку, используйте `yarn build`

## Процесс разработки

Проект использует:
- Create-react-app
- react-hot-loader
- TypeScript
- Redux
- RxJS 
- SCSS
- Ant Design
- Storybook

### codegen (опционально)
`npm i -g yo` - yeoman generator

`npm i -g generator-rs` - генератор компонентов, как в проекте

Например, хотим сделать общий компонент-карточку:

в папке `src/shared/components` призываем `yo rs:c`. Отвечаем `Card` и `Yes`. Будет создана папка `./Card` с файлами `Card.tsx` с базовым компонентом, `Card.module.scss` и `index.ts` с экспортом по умолчанию.
