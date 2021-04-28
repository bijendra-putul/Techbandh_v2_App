import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { RestapiService } from "src/app/restapi.service";
import { SearchPage } from "../main-home/search/search.page";
import { FormsLeadPage } from "../main-home/forms-lead/forms-lead.page";

import { ModalController, PopoverController } from "@ionic/angular";
import { Platform } from "@ionic/angular";
import { LoadingController } from "@ionic/angular";
@Component({
  selector: "app-my-shares",
  templateUrl: "./my-shares.page.html",
  styleUrls: ["./my-shares.page.scss"]
})
export class MySharesPage implements OnInit {
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
    zoom: false,
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true
  };
  backButtonSubscription: any;
  constructor(
    private router: Router,
    private restapiService: RestapiService,
    private modalController: ModalController,
    private popoverController: PopoverController,
    private changeRef: ChangeDetectorRef,
    private loadingController: LoadingController,
    private platform: Platform
  ) {
    this.getEarnings();
    this.getShared();
    this.getLeads();
  }

  ionViewWillEnter() {
    console.log("enter share");
    this.getEarnings();
    this.getShared();
    this.getLeads();
  }

  ngOnInit() {
    this.presentLoading();
  }

  onclickEarnings() {
    this.router.navigate(["home-tab/main-home"]);
  }

  ionPull(event) { }
  ionStart(event) { }
  getEarnings(event?) {
    let cpartner_id = localStorage.getItem("cpartner_id");
    return this.restapiService
      .get_data("get_myearning?cpartner_id=" + cpartner_id)
      .subscribe((res: any) => {
        if (res && res.status) {
          this.myEarnings = res.data;
          this.totalEarning = this.myEarnings.myearning;
          this.earningProducts = this.myEarnings.orders;
          console.log(this.earningProducts);
          this.changeRef.detectChanges();
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
    return this.restapiService
      .get_data("shared_products?cpartner_id=" + cpartner_id)
      .subscribe((res: any) => {
        if (res && res.status) {
          this.myShared = res.data;
          this.sharedProducts = this.myShared.shares;
          this.totalShares = this.myShared.total_shared;
          this.changeRef.detectChanges();
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
          this.changeRef.detectChanges();
        }
        if (event) {
          setTimeout(() => {
            event.target.complete();
          }, 1000);
        }
      });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Loading",
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
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
      if (leadData.data.customer_name !== "") {
        this.leadProducts.push(leadData.data);
        this.totalLeads = this.totalLeads + 1;
      }
    });
    return await popover.present();
  }
}
