import { Component, OnInit } from "@angular/core";
import { RestapiService } from "src/app/restapi.service";
import { SearchPage } from "../../main-home/search/search.page";
import { FormsLeadPage } from "../../main-home/forms-lead/forms-lead.page";

import {
  ModalController,
  PopoverController,
  LoadingController
} from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-myshares",
  templateUrl: "./myshares.page.html",
  styleUrls: ["./myshares.page.scss"]
})
export class MysharesPage implements OnInit {
  responseData: any;
  myEarnings: any;
  myShared: any;
  myLeads: any;

  totalEarning = 0;
  totalShares = 0;
  totalLeads = 0;

  earningProducts: any;
  sharedProducts: any;
  leadProducts: any;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    //loop: true,
    zoom: false,
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true
  };

  constructor(
    public modalCtrl: ModalController,
    private restapiService: RestapiService,
    private popoverController: PopoverController,
    private loadingController: LoadingController,
    private router: Router
  ) {}
  ngOnInit() {
    this.getEarnings();
    this.getShared();
    this.getLeads();
    this.presentLoading();
  }

  getEarnings(event?) {
    let cpartner_id = localStorage.getItem("cpartner_id");
    return this.restapiService
      .get_data("get_myearning?cpartner_id=" + cpartner_id)
      .subscribe((res: any) => {
        if (res && res.status) {
          this.myEarnings = res.data;
          this.totalEarning = this.myEarnings.myearning;
          this.earningProducts = this.myEarnings.orders;
         
        }
        if (event) {
          setTimeout(() => {
            event.target.complete();
          }, 2000);
        }
      });
  }

  getShared(event?) {
    let cpartner_id = localStorage.getItem("cpartner_id");
    //console.log(cpartner_id);
    return this.restapiService
      .get_data("shared_products?cpartner_id=" + cpartner_id)
      .subscribe((res: any) => {
        console.log(res);
        if (res && res.status) {
          this.myShared = res.data;
          this.sharedProducts = this.myShared.shares;
          this.totalShares = this.myShared.total_shared;

          console.log(this.sharedProducts);
        }
        if (event) {
          setTimeout(() => {
            event.target.complete();
          }, 1000);
        }
      });
  }

  getLeads(event?) {
    let cpartner_id = localStorage.getItem("cpartner_id");
    return this.restapiService
      .get_data("get_leads?cpartner_id=" + cpartner_id)
      .subscribe((res: any) => {
        if (res && res.status) {
          this.myLeads = res.data;
          this.leadProducts = this.myLeads.leads;
          this.totalLeads = this.myLeads.total_leads;
          console.log(this.totalLeads);
        }
        if (event) {
          setTimeout(() => {
            event.target.complete();
          }, 2000);
        }
      });
  }

  goBack() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  goBackhome() {
    this.router.navigate(["home-tab/main-home"]);
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  async searchlistModal() {
    const modal = await this.modalCtrl.create({
      component: SearchPage
    });
    return await modal.present();
  }
  async leadformPopover2() {
    const modal = await this.modalCtrl.create({
      component: FormsLeadPage
    });

    modal.onDidDismiss().then(leadData => {
      if (leadData.data.customer_name !== "") {
        this.leadProducts.push(leadData.data);
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
        this.leadProducts.push(leadData.data);
        this.totalLeads = this.totalLeads + 1;
      }
    });
    return await popover.present();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Loading",
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }
  ionRefresh(event) {
    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 2000);
  }
  ionPull(event) {
        console.log("ionPull Event Triggered!");
  }
  ionStart(event) {
    console.log("ionStart Event Triggered!");
  }
}
