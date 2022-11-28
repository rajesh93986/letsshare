// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverUrl : 'http://localhost:8080',
  firebase: {
    apiKey: "AIzaSyD69YQemojebb6W2lLsg4HiWdhoY8BNta4",
    authDomain: "phone-auth-eb906.firebaseapp.com",
    projectId: "phone-auth-eb906",
    storageBucket: "phone-auth-eb906.appspot.com",
    messagingSenderId: "254121648266",
    appId: "1:254121648266:web:d49dc2ee43596312e24d73"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
