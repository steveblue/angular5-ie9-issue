If you do not already have `angular-rollup` installed globally, `npm install -g angular-rollup` and to build for production you must have Java JRE installed.
This issue may also be reproducible with app scaffolded with Angular CLI.

1. `npm install or yarn install`
2. `ngr build prod --serve`

- Navigate to `http://localhost:4200` with Chrome. Click on Angular logo, see route change.
- Navigate to `http://localhost:4200` in Windows 7 with IE9. See Route does not resolve, Angular cannot load route, even with `{useHash: true}` in RouteConfig.
- Refresh browser window with Developer Tools open, see `TypeError: Object doesn't support property or method 'apply'` error in console.


