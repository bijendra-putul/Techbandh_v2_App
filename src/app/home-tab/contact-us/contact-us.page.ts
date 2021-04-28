import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { phoneNumberValidator } from "../../phone-validator";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

import { RestapiService } from "../../restapi.service";
import { SearchPage } from "../main-home/search/search.page";
import { FormsLeadPage } from "../main-home/forms-lead/forms-lead.page";
import { ModalController, LoadingController } from "@ionic/angular";
import { Platform } from "@ionic/angular";
@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.page.html",
  styleUrls: ["./contact-us.page.scss"]
})
export class ContactUsPage implements OnInit {
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  showProgress = false;
  contactuserForm: FormGroup;
  cpartner: any;
  contactsusses: any;
  requstRespon: any;
  requestData = {
    name: "",
    email: "",
    contact_number: ""
  };
  requestCallbackdata: any;
  contactusSuccessmessage: any;
  backButtonSubscription: any;
  constructor(
    private router: Router,
    public navCtrl: NavController,
    public formbuilder: FormBuilder,
    private restapiService: RestapiService,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private platform: Platform
  ) {
    this.contactuserForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[a-zA-Z ]+$")
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.minLength(4)
      ]),
      contact_number: new FormControl("", [
        Validators.required,
        phoneNumberValidator,
        Validators.pattern(/^[6-9]\d{9}$/),
        Validators.minLength(10),
        Validators.maxLength(10)
      ])
    });
  }
  ngOnInit() {
    this.cpartnerPartner();
    this.presentLoading();
  }
  onclickcontact() {
    this.router.navigate(["home-tab/main-home"]);
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Loading",
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }
  cpartnerPartner() {
    let cpartner_id = localStorage.getItem("cpartner_id");
    return this.restapiService
      .get_data("cpartner_details?cpartner_id=" + cpartner_id)
      .subscribe((res: any) => {
        if (res && res.status) {
          this.cpartner = res.data;
          this.requestData.name = (
            this.cpartner[0].first_name +
            " " +
            this.cpartner[0].last_name
          ).trim();
          this.requestData.email = this.cpartner[0].email;
          this.requestData.contact_number = this.cpartner[0].phone;
        }
      });
  }

  regForm() {
    this.showProgress = true;
    this.contactsusses = true;
    this.restapiService
      .post_data("requestCallBack", this.requestData)
      .subscribe((res: any) => {
        this.requestCallbackdata = res.data;
        this.requstRespon = res;
        this.showProgress = false;
        this.contactusSuccessmessage = res.success_msg;

        if (res && res.status) {
        }
      });
    setTimeout(
      function() {
        this.contactsusses = false;
      }.bind(this),
      4000
    );
  }
  async searchlistModal() {
    const modal = await this.modalController.create({
      component: SearchPage
    });
    return await modal.present();
  }
  async leadformPopover() {
    const modal = await this.modalController.create({
      component: FormsLeadPage,
      cssClass: "lead-form"
    });
    return await modal.present();
  }
  inputMobileno(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
