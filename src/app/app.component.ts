import { Component,NgZone } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";

import {
  Platform,
  AlertController,
  LoadingController,
  NavController
} from "@ionic/angular";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";
import { RestapiService } from "./restapi.service";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { Push, PushObject, PushOptions } from "@ionic-native/push/ngx";
import { from } from "rxjs";

//import { FirebaseAnalytics } from "@ionic-native/firebase-analytics/ngx";
import { FirebaseDynamicLinks } from "@ionic-native/firebase-dynamic-links/ngx"
import { Deeplinks } from "@ionic-native/deeplinks/ngx";
import { LearnPage } from "./home-tab/learn/learn.page"
import { MySharesPage } from "./home-tab/my-shares/my-shares.page";
import { ContactUsPage } from "./home-tab/contact-us/contact-us.page"
import { MyaccountPage } from "./home-tab/myaccount/myaccount.page"
import { analyzeAndValidateNgModules } from "@angular/compiler";
//import { OneSignal } from "@ionic-native/onesignal/ngx";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  [x: string]: any;  
  showModal = true;
  pushes: any = [];
  showSplash = false;
  public alertShow = false;
  alertCtrl: any;
  subscribe: any;
  counter = 0;
  crashlytics: any;
  backButtonSubscription;
  deploymentKey: any;  
  progressStatus = ""; 
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private router: Router,
    private restapiService: RestapiService,
    private alertController: AlertController,
    private iab: InAppBrowser,
    private loadingController: LoadingController,
    private push: Push,
    private navCtrl: NavController,

    //private firebaseAnalytics: FirebaseAnalytics,    
    private deeplinks: Deeplinks,  
    private zone: NgZone,    
    //private oneSignal: OneSignal,    
    private firebaseDynamicLinks: FirebaseDynamicLinks

    

   


  ) {
    this.initializeApp();
  }

  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      //navigator["app"].exitApp();
      if (this.counter == 0) {
        this.counter++;
        setTimeout(() => {
          this.counter = 0;
        }, 3000);
      } else {
        // console.log("exitapp");
        navigator["app"].exitApp();
      }
    });


    this.backButtonSubscription = this.platform.backButton.subscribe(
      async () => {
        if (
          this.router.isActive("welcome", true) &&
          this.router.url === "welcome"
        ) {
          //this.router.onSameUrlNavigation = "reload";
          this.router.navigate(["welcome"]);
        }
      }
    );

  }

  initializeApp() {
    this.presentLoading();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      this.restapiService
        .post_data("check_version", { version: "2.0.0" })
        .subscribe((res: any) => {
          if (!res.status) {
            //this.presentUpdate(res.data.playstore);
            localStorage.removeItem("cpartner_id");
            localStorage.removeItem("name");
            localStorage.removeItem("phone");
            sessionStorage.clear();
            this.router.navigate(["version"]);
        }
      });
       const cpartner_id = localStorage.getItem("cpartner_id");    
       if (cpartner_id && cpartner_id !== undefined) {  

         this.router.navigate(["home-tab/main-home"]);     
              } 
              else 
              {        this.router.navigate(["welcome"]);      } 
         
      this.pushSetup();
      //this.onesingle(); 
      this.deeplinks.route({ "/home-tab/:id1":LearnPage,
                            "/home-tab/:id2":MySharesPage, 
                            "/home-tab/:id3":ContactUsPage,
                            "/home-tab/:id4":MyaccountPage,
                            //"products:productId": HelpPage
                    }).subscribe((match) => { 
          console.log("Successfully matched route", match);           
          // tslint:disable-next-line:no-unused-expression           
          if (match.$args.id1 === "learn") 
          {  this.router.onSameUrlNavigation = "reload"; 
            this.router.navigate(["home-tab/learn"]);            
          }            
        if (match.$args.id1 === "my-shares") {              
          // this.router.onSameUrlNavigation = \"reload\";            
          this.router.navigate(["home-tab/my-shares"]);            
          }            
          if (match.$args.id1 === "contact-us") {             
          // this.router.onSameUrlNavigation = "reload";             
          this.router.navigate(["home-tab/contact-us"]);            
          }           
          if (match.$args.id1 === "myaccount") {            
          // this.router.onSameUrlNavigation = \"reload\";             
                                                            
          this.router.navigate(["home-tab/myaccount"]);            
          }          
        }, (nomatch) => {            
        // nomatch.$link - the full link data          
        console.error("Got a deeplink that didn't match", nomatch);         
        });      
                                                         
        this.firebaseDynamicLinks.onDynamicLink().subscribe((res: any) => console.log(res),   
        (error: any) => console.log(error));  
    });    
   }  
                  async downloadprocessing() {    
                    const loading = await this.loadingController.create({  message: "Please wait data is upload",
                          duration: 5000,    });   
                          await loading.present();  
                   } 
                  async presentLoading() {    
                    const loading = await this.loadingController.create({
                      message:"Loading",      
                      duration: 2000,   
                    });   
                    await loading.present();    
                    const { role, data } = await loading.onDidDismiss();  
                  } 
                    
 
                async presentUpdate(playstore) {    
                      const alert = await this.alertController.create({     
                        header:"Update Version",      
                        message:"Please update your app!",
                        buttons: [{
                        text:"Update",   
                        handler: () => {            
                            this.iab.create(playstore, "_system", "location=no");  
                          },        
                        }],   
                        });    
                  await alert.present(); 
                }  

                pushSetup() {
                  const options: PushOptions = {
                    android: {
                      senderID: "270640982577"
                    }
                  };

                  const pushObject: PushObject = this.push.init(options);

                  pushObject
                    .on("notification")
                    .subscribe((notification: any) =>
                      console.log("Received a notification", notification)
                    );

                  pushObject
                    .on("registration")
                    .subscribe((registration: any) =>
                      console.log("Device registered", registration)
                    );

                  pushObject
                    .on("error")
                    .subscribe(error => console.error("Error with Push plugin", error));
                }
          //   onesingle() {
          //   this.oneSignal.startInit("6ffbb70f-35f6-42db-89bd-53b35b237704",      
          //   "270640982577");
          //   this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
          //   this.oneSignal.handleNotificationReceived().subscribe(() => {
          //   // do something when notification is received\r\n    });
          //   this.oneSignal.handleNotificationOpened().subscribe(() => {
          //       // do something when a notification is opened\r\n   
          //     });
          //   this.oneSignal.endInit();  
          //   });
          // }
}