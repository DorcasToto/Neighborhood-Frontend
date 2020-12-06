// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // hoodEndpoint :'http://localhost:8000/api/v1/hoods/',
  // allposts :'http://localhost:8000/api/v1/allposts/',

  // viewhoodsEndPoint:'http://localhost:8000/api/v1/view_hood/%3Cpk%3E/',
  // loginEndpoint:'http://localhost:8000/auth/login/',
  // signupEndpoint:'http://localhost:8000/auth/signup/',

  hoodEndpoint: 'https://hood256.herokuapp.com/api/v1/hoods/',
  allposts: 'https://hood256.herokuapp.com/api/v1/allposts/',
  newPost : 'https://hood256.herokuapp.com/api/v1/post/',

  viewhoodsEndPoint: 'https://hood256.herokuapp.com/api/v1/view_hood/%3Cpk%3E/',
  loginEndpoint: 'https://hood256.herokuapp.com/auth/login/',
  signupEndpoint: 'https://hood256.herokuapp.com/auth/signup/',


  // method: 'post',
  // headers: {
  //   'Content-Type': '',
  //   'Authorization': window.localStorage.getItem('access')
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
