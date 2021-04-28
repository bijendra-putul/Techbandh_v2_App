import { Component, OnInit } from "@angular/core";

import { RestapiService } from "../../../restapi.service";
import { ToastController } from "@ionic/angular";
import { SearchPage } from "../../main-home/search/search.page";
import { FormsLeadPage } from "../../main-home/forms-lead/forms-lead.page";

import { ModalController, PopoverController } from "@ionic/angular";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidatorFn
} from "@angular/forms";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-bank-account-details",
  templateUrl: "./bank-account-details.page.html",
  styleUrls: ["./bank-account-details.page.scss"]
})
export class BankAccountDetailsPage implements OnInit {
  showProgress = false;
  cpartner: any;
  edited: any;
  bankuserfrom: FormGroup;
  updatedata: any;
  successmessage: any;
  cpartnerDetail: any;
  contactDetail = {
    cpartner_id: "",
    acc_holder_name: "",
    acc_num: "",
    bank_name: "",
    branch_name: "",
    ifsc_code: ""
  };
  updatemessage: any;

  constructor(
    private restapiService: RestapiService,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    public navCtrl: NavController,
    public formbuilder: FormBuilder,
    public toastController: ToastController,
    private popoverController: PopoverController
  ) {
    this.bankuserfrom = new FormGroup({
      acc_holder_name: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[a-zA-Z]+$")
      ]),
      acc_num: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[0-9]+$")
      ]),
      bank_name: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[a-zA-Z]+$")
      ]),
      branch_name: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[a-zA-Z]+$")
      ]),
      ifsc_code: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[a-zA-Z0-9]+$")
      ])
    });
  }

  ngOnInit() {
    this.cpartnerPartner();
  }

  ionViewWillEnter() {
    console.log("enter bank");
    this.cpartnerPartner();
  }

  goBack() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  cpartnerPartner() {
    let cpartner_id = localStorage.getItem("cpartner_id");
    return this.restapiService
      .get_data("cpartner_bank?cpartner_id=" + cpartner_id)
      .subscribe((res: any) => {
        console.log(res);
        if (res && res.status) {
          this.cpartnerDetail = res.data;
          console.log(this.cpartnerDetail);
          this.contactDetail.acc_holder_name = this.cpartnerDetail.acc_holder_name;
          this.contactDetail.acc_num = this.cpartnerDetail.acc_num;
          this.contactDetail.bank_name = this.cpartnerDetail.bank_name;
          this.contactDetail.branch_name = this.cpartnerDetail.branch_name;
          this.contactDetail.ifsc_code = this.cpartnerDetail.ifsc_code;
          this.contactDetail.cpartner_id = this.cpartnerDetail.id;
        }
      });
  }
  savebtn() {
    this.showProgress = true;
    console.log(this.contactDetail);
    this.contactDetail.cpartner_id = localStorage.getItem("cpartner_id");
    this.edited = true;
    this.restapiService
      .post_data("save_cpartner_bank", this.contactDetail)
      .subscribe((res: any) => {
        this.updatedata = res;
        console.log(this.updatedata);
        this.showProgress = false;
        if (res.status === true) {
          this.successmessage = res.success_msg;
          console.log(this.successmessage);
        }
      });
    setTimeout(
      function() {
        this.edited = false;
        console.log(this.edited);
      }.bind(this),
      3000
    );
    //this.presentToast();
  }
  // async presentToast() {
  //   const toast = await this.toastController.create({
  //     message: this.successmessage,
  //     position: "bottom",
  //     duration: 300
  //   });
  //   toast.present();
  // }
  async searchlistModal() {
    const modal = await this.modalController.create({
      component: SearchPage
    });
    return await modal.present();
  }
  async leadformPopover() {
    const modal = await this.modalController.create({
      component: FormsLeadPage
    });
    return await modal.present();
  }
}
