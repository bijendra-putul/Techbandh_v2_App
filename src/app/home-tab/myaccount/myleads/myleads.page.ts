import { Component, OnInit, Input } from "@angular/core";
import { RestapiService } from "src/app/restapi.service";

import {
  ModalController,
  PopoverController,
  LoadingController
} from "@ionic/angular";
import { SearchPage } from "../../main-home/search/search.page";
import { FormsLeadPage } from "../../main-home/forms-lead/forms-lead.page";
import { Router } from "@angular/router";
@Component({
  selector: "app-myleads",
  templateUrl: "./myleads.page.html",
  styleUrls: ["./myleads.page.scss"]
})
export class MyleadsPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    //loop: true,
    zoom: false,
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true
  };

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
        if (res && res.status) {
          this.myShared = res.data;
          this.sharedProducts = this.myShared.shares;
          this.totalShares = this.myShared.total_shared;
        }
        if (event) {
          setTimeout(() => {
            event.target.complete();
          }, 2000);
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
          console.log(this.leadProducts);
          this.totalLeads = this.myLeads.total_leads;
        }
        if (event) {
          setTimeout(() => {
            event.target.complete();
          }, 2000);
        }
      });
  }

  async goBack() {
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
      console.log(leadData.data);
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
      console.log(leadData.data.length);
      if (leadData.data.customer_name !== "") {
        this.leadProducts.push(leadData.data);
        console.log(this.leadProducts);
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

    console.log("Loading dismissed!");
  }
  ionRefresh(event) {
    console.log("Pull Event Triggered!");
    setTimeout(() => {
      console.log("Async operation has ended");

      //complete()  signify that the refreshing has completed and to close the refresher
      event.target.complete();
    }, 2000);
  }
  ionPull(event) {
    //Emitted while the user is pulling down the content and exposing the refresher.
    console.log("ionPull Event Triggered!");
  }
  ionStart(event) {
    //Emitted when the user begins to start pulling down.
    console.log("ionStart Event Triggered!");
  }
}
