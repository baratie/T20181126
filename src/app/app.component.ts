import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDWPJd3rZ26LW12VCPpYQQbViHLM6h_A4Y",
  authDomain: "api-project-556364878162.firebaseapp.com",
  databaseURL: "https://api-project-556364878162.firebaseio.com",
  projectId: "api-project-556364878162",
  storageBucket: "api-project-556364878162.appspot.com",
  messagingSenderId: "556364878162"
};



@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      //크로도바 플러그인 삽입
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


  //로그인 인증
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
      this.rootPage = HomePage;
    } else {
      this.rootPage = LoginPage ;
    }
  });;




  }
}
