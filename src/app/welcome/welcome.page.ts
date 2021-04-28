import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  Renderer,
  AfterViewInit
} from "@angular/core";
import { Router } from "@angular/router";
import { RestapiService } from "../restapi.service";
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { phoneNumberValidator } from "../phone-validator";
import {
  AlertController,
  ToastController,
  LoadingController,
  NavController,
  NavParams
} from "@ionic/angular";
import {
  InAppBrowser,
  InAppBrowserEvent
} from "@ionic-native/in-app-browser/ngx";
import {
  ThemeableBrowser,
  ThemeableBrowserOptions,
  ThemeableBrowserObject
} from "@ionic-native/themeable-browser/ngx";
import { Platform } from "@ionic/angular";
//import { EventLoggerProvider } from "../event-logger";
@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"]
})
export class WelcomePage implements OnInit {
  @ViewChild("passcode1", { static: false }) passcode1;
  @ViewChild("passcode2", { static: false }) passcode2;
  @ViewChild("passcode3", { static: false }) passcode3;
  @ViewChild("passcode4", { static: false }) passcode4;

  @ViewChild("submitButton", { static: false }) submitButton;
  @ViewChild("timeLeft", { static: false }) timeLeft;
  values: any = []; 
  valueoutput: any; 
  unregisterBackButtonAction: any;
  pushes: any = [];
  otp: any;
  status: any;
  registerLogin: any;
  contactForm: FormGroup;
  verfyOtp: any;
  otpaddForm: FormGroup;
  formotpadd: any;
  registerLoginError = "";
  errormsg: any;
  tast: any;
  rcpi: any;
  showToast: any;
  toast: any;
  otpnotFdata: [];
  showOtp = false;
  showProgress = false;
  registerData = {
    phone: 0,
    otp: 0,
    language: 1
  };
  wrong_otp: any;
  uid: any;
  otpfirst: any;
  otpsecond: any;
  otpthird: any;
  otofourth: any;
  backButtonSubscription: any;
  receviotp: any;
  //app browser
  event: any;
  browser: any;
  failed: false;
  success: false;
  shouldDisable = false; 
  isDisabled = false;
  counter = 30;
  interval = 1000; 
  constructor(
    private router: Router,
    private restapiService: RestapiService,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private iab: InAppBrowser,
    private navCtrl: NavController,
    private themeableBrowser: ThemeableBrowser,
    private platform: Platform,   
    //public logger: EventLoggerProvider,  
          private rd: Renderer2,   
          private elementRef: ElementRef 
  ) {
    this.contactForm = new FormGroup({
      mobile: new FormControl("", [
        Validators.required,
        phoneNumberValidator,
        Validators.pattern(/^[6-9]\d{9}$/)
      ])
    });
    this.otpaddForm = new FormGroup({
      otp1: new FormControl("", [Validators.required, phoneNumberValidator]),
      otp2: new FormControl("", [Validators.required, phoneNumberValidator]),
      otp3: new FormControl("", [Validators.required, phoneNumberValidator]),
      otp4: new FormControl("", [Validators.required, phoneNumberValidator])
    });
    this.ngAfterViewInit();
  }
  get mobile() {
    return this.contactForm.get("mobile");
  }

  onKeyUp(event, index) {
    console.log(event);
    if (event.target.value.length != 1) {
      this.setFocus(index - 2);
    } else {
      this.values.push(event.target.value);
      this.setFocus(index);
    }
    event.stopPropagation();
  }

  submit(e: Event) {
    this.showSuccessfulLoginAlert();
    this.values = [];
    this.passcode1.value = "";
    this.passcode2.value = "";
    this.passcode3.value = "";
    this.passcode4.value = "";
    e.stopPropagation();
  }

  setFocus(index) {
    switch (index) {
      case 0:
        this.passcode1.setFocus();
        break;
      case 1:
        this.passcode2.setFocus();
        break;
      case 2:
        this.passcode3.setFocus();
        break;
      case 3:
        this.passcode4.setFocus();
        break;
    }
  }

  showInvalidLoginAlert() {}

  showSuccessfulLoginAlert() {}
  ngOnInit() {}
  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(
      601,
      async () => {
        if (
          this.router.isActive("welcome", true) &&
          this.router.url === "welcome"
        ) {
          this.navCtrl.pop();
        }
      }
    );
  }

  
  moveFocus(nextElement?) {
    if (nextElement) {
      nextElement.setFocus();
      //this.backButtonSubscription.setFocus();
      // nextElement.setFocus();
    }
  }

  revert() {
    this.contactForm.reset();
    this.otpaddForm.reset();
  }
  // tslint:disable-next-line:ban-types
  registerLoginbtn(resend?: String) {
    this.showProgress = true;
    this.isDisabled = true;
    this.registerData.phone = this.contactForm.value.mobile;
    this.restapiService
      .post_data("register", this.registerData)
      .subscribe((res: any) => {
        this.registerLogin = res;
        console.log(this.registerLogin);
        this.showProgress = false;
        if (this.registerLogin.status) {
          this.receviotp = this.registerLogin.data.otp;
          this.showOtp = true;
          this.receviotp = this.registerLogin.data.otp;
          
        } else {
          this.registerLoginError = this.registerLogin.success_msg;
          this.presentAlert();

          setTimeout(() => {
            this.goToBrowser(this.registerLogin.data);
          }, 3000);
        }

        if (resend) {
          this.presentToast();
        }
      });
      setTimeout(() => {
         this.isDisabled = false;
     }, 30000);
  }

  async goToBrowser(url) {
    const options: ThemeableBrowserOptions = {
      statusbar: {
        color: "#ffffffff"
      },
      toolbar: {
        height: 44,
        color: "#4030A3"
      },
      title: {
        color: "#ffffffff",
        showPageTitle: true
      },
      backButton: {
        image: "back",
        imagePressed: "back_pressed",
        align: "left",
        event: "backPressed"
      },
      backButtonCanClose: true
    };

    const browser: ThemeableBrowserObject = await this.themeableBrowser.create(
      url,
      "_blank",
      options
    );
    // browser.on("loadstop").subscribe(() => {
    //   browser.executeScript({ code: "(function() { alert(123); })()" });
    // });
  }

  // payment(url) {
  //   this.browser = this.iab
  //     .create(url)
  //     .on("loadstop")
  //     .subscribe((ev: InAppBrowserEvent) => {
  //       if (ev.url == "https://www.techjockey.com/tech-bandhu/order/failure") {
  //         console.log("payment failed");
  //         this.failed = true;
  //         this.closeBrowser();
  //       } else if (
  //         ev.url == "https://www.techjockey.com/tech-bandhu/order/success"
  //       ) {
  //         console.log("payment success");
  //         this.success = true;
  //       }
  //     });
  // }

  // closeBrowser() {
  //   this.browser.close();
  // }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Verification code sent!",
      position: "bottom",
      duration: 3000
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "You are not Registered Yet",
      subHeader: "Redirecting you ...",
      message: "Please register to start Earning money.",
      cssClass: "registered-login"
    });
    await alert.present();
  }
  async prsentToast() {
    const toast = await this.toastController.create({
      position: "bottom",
      message: this.wrong_otp,
      duration: 2000
    });
    toast.present();
  }
  verifyotp() {
    this.registerData.otp =
      this.otpaddForm.value.otp1 +
      this.otpaddForm.value.otp2 +
      this.otpaddForm.value.otp3 +
      this.otpaddForm.value.otp4;
    if (this.registerData.otp == this.receviotp) {
      this.restapiService
        .post_data("verify_otp", this.registerData)
        .subscribe((res: any) => {
          this.verfyOtp = res;
          this.rcpi = localStorage.getItem("cpartner_id");
          if (this.rcpi) {
            localStorage.removeItem("cpartner_id");
            localStorage.removeItem("name");
            localStorage.removeItem("phone");
            localStorage.removeItem("profile_image");
          }
          if (this.verfyOtp.status) {
            console.log(this.verfyOtp);
            localStorage.setItem("cpartner_id", this.verfyOtp.data.cpartner_id);
            localStorage.setItem("name", this.verfyOtp.data.name);
            localStorage.setItem("phone", this.verfyOtp.data.phone);
            localStorage.setItem(
              "profile_image",
              this.verfyOtp.data.profile_img
            );

            sessionStorage.setItem('cpartner_id', this.verfyOtp.data.cpartner_id);
            sessionStorage.setItem('name', this.verfyOtp.data.name);
            sessionStorage.setItem('phone', this.verfyOtp.data.phone);

            this.router.navigate(["home-tab/main-home"]);
            this.showOtp = false;
          }
        });
    } else {
      this.receviotp = "Invalid OTP. Please enter correct OTP";
      this.wrong_otp = this.receviotp;

      this.prsentToast();
    }
  }

  otpnotfound() {}
  inputMobileno(event: any) {
    //this.registerLoginError = "";
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
