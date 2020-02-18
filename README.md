# Кабинет физического лица

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

## Договоренности по code style
#### Общие

![](https://cs7.pikabu.ru/post_img/2018/08/05/10/1533486834170014635.jpg) 

0. Все компоненты - функциональные
1. Компоненты не должны быть большими (>150 строк вместе с импортами)
2. Отдельные экраны, разделяемые роутами находятся в папке `src/scenes`
3. Все внутренние компоненты экрана лежат в папке `/components` данного экрана
4. Компоненты, которые имеет смысл переиспользовать, лежат в `src/shared/components`. Там же переописанные Ant-компоненты

5. Все поля интерфейсов имеют JSDoc описания
6. Все интерфейсы, относящиеся к потоку данных между приложением и сервером расположены в соответствующем редьюсере

7. Тесты для кнопок/иконок/прочей лабуды в виде прокидывания пропсов дальше использовать запрещено
8. При необходимости, в первую очередь тесты пишутся для ключевых узлов приложения, имеющим отношение к изменению данных
