import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MySettingPage } from "./my-setting/my-setting.page";
import { MyProfilePage } from "./my-profile/my-profile.page";
import { MyleadsPage } from "./myleads/myleads.page";
import { MysharesPage } from "./myshares/myshares.page";
import { BankAccountDetailsPage } from "./bank-account-details/bank-account-details.page";
import { MyearningsdocPage } from "./myearningsdoc/myearningsdoc.page";
import { RestapiService } from "src/app/restapi.service";
import { ModalController, PopoverController,LoadingController } from "@ionic/angular";
import { SearchPage } from "../main-home/search/search.page";
import { FormsLeadPage } from "../main-home/forms-lead/forms-lead.page";
import { Platform, NavController } from "@ionic/angular";
import { AppLinkHelperService } from "../../app-link-googleplay.service";

@Component({
  selector: "app-myaccount",
  templateUrl: "./myaccount.page.html",
  styleUrls: ["./myaccount.page.scss"]
})
export class MyaccountPage implements OnInit {
  modal: any;
  totalLeads = 0;
  totalShared = 0;
  totalEarnings = 0;
  username: any;
  backButtonSubscription: any;
  profileImage: any;
  cpartner_id: string;
  constructor(
    private router: Router,
    private modalController: ModalController,
    private restapiService: RestapiService,
    private popoverController: PopoverController,
    private platform: Platform,
    private navCtrl: NavController,
    private applinkhelperService: AppLinkHelperService,
    private loadingController: LoadingController
  ) {
    this.myAccount();
  }

  ngOnInit() {
    this.username =
      localStorage.getItem("name") != undefined
        ? localStorage.getItem("name")
        : localStorage.getItem("phone");
    this.profileImage = localStorage.getItem("profile_image");
    let cpartner_id = localStorage.getItem("cpartner_id");
  }

  ionViewWillEnter() {
    this.username =
      localStorage.getItem("name") != undefined
        ? localStorage.getItem("name")
        : localStorage.getItem("phone");
    this.profileImage = localStorage.getItem("profile_image");

    this.myAccount();
  }




  shareProduct(platform) {
    this.applinkhelperService.socialShare(this.cpartner_id, platform);
    this.presentLoading(); 
  }
    async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 4000,
      message:"Please wait...",
      translucent: true,});
       await loading.present();

       const { role, data } = await loading.onDidDismiss();
        }

  myAccount() {
    let cpartner_id = localStorage.getItem("cpartner_id");
    return this.restapiService
      .get_data("myaccount?cpartner_id=" + cpartner_id)
      .subscribe((res: any) => {
        if (res && res.status) {
          this.totalLeads = res.data.total_leads;
          this.totalShared = res.data.total_shared;
          this.totalEarnings = res.data.total_earning;
        }
      });
  }

  myaccountclick() {
    this.router.navigate(["home-tab/main-home"]);
  }

  async myearningsclick() {
    const modal = await this.modalController.create({
      component: MyearningsdocPage
    });
    return await modal.present();
  }

  async myleads() {
    const modal = await this.modalController.create({
      component: MyleadsPage
    });
    return await modal.present();
  }

  async myshares() {
    const modal = await this.modalController.create({
      component: MysharesPage
    });
    return await modal.present();
  }
  async myyearningsdoc() {
    const modal = await this.modalController.create({
      component: MyearningsdocPage
    });
    return await modal.present();
  }
  async mysetting() {
    const modal = await this.modalController.create({
      component: MySettingPage
    });
    return await modal.present();
  }
  async myprofile() {
    const modal = await this.modalController.create({
      component: MyProfilePage
    });

    modal.onDidDismiss().then(contactDetail => {
      if (contactDetail.data && contactDetail.data.first_name !== undefined) {
        this.username =
          contactDetail.data.first_name + " " + contactDetail.data.last_name;
        this.profileImage = contactDetail.data.image;
      }
    });

    return await modal.present();
  }
  async bankaccount() {
    const modal = await this.modalController.create({
      component: BankAccountDetailsPage
    });
    return await modal.present();
  }
  async searchlistModal() {
    const modal = await this.modalController.create({
      component: SearchPage
    });
    return await modal.present();
  }
  async leadformPopover2() {
    const modal = await this.modalController.create({
      component: FormsLeadPage
    });

    modal.onDidDismiss().then(leadData => {
      if (leadData.data.customer_name !== "") {
        this.totalLeads = this.totalLeads + 1;
      }
    });
    return await modal.present();
  }
  async leadformPopover(ev?: any) {
    const popover = await this.popoverController.create({
      component: FormsLeadPage,
      cssClass: "lead-form",
      event: ev,
      translucent: true
    });

    popover.onDidDismiss().then(leadData => {
      if (leadData) {
        this.totalLeads = this.totalLeads + 1;
      }
    });
    return await popover.present();
  }
}
