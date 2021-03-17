# Buildxact

1. This project was generated with Angular CLI version 11.2.4.
2. There are 3 pages as of now. Home page, Plans page, Documents page. Home page is the root / landing page.
3. Extrernal libraries used for this applicatio include PrimeNG, Bootstrap, Primeicons, Lodash.
4. There is a breadcrumb at the top which identifies a page the user is in currently.
5. Plans and Documents page both use a reusable table for display of data.
6. The reusable table is from PrimeNG and it can be customized further and extended to perform more complex tasks in the future.
7. The source files have been divided into 3 sections core, shared and features.
8. Core components such as header, navigation bar, routing have been added to the core folder. We can further add the API services and route guards.
9. In the shared folder we have all the customized reusable components that are used across different pages in the application.
10. Features folder holds all the relevant pages of the application. A route for each page can be added to the app routing file.
11. An additional utilities folder has been created to add files containing custom data manipulative functions that may be used across the other 3 folders.
12. Some of the buttons on the page are just placeholders to denote the usage of primeicons library. They can be hooked up to some use-cases in future development.

## Development server
Once you clone the repo, run `npm install`.
Once finished installing all the relevant packages, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via Karma.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
