import { Component, OnInit } from "@angular/core";
import { ModalController, LoadingController } from "@ionic/angular";
import { Router } from "@angular/router";

import { SearchPage } from "../main-home/search/search.page";
import { FormsLeadPage } from "../main-home/forms-lead/forms-lead.page";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { RestapiService } from "src/app/restapi.service";
import { Platform } from "@ionic/angular";
@Component({
  selector: "app-learn",
  templateUrl: "./learn.page.html",
  styleUrls: ["./learn.page.scss"]
})
export class LearnPage implements OnInit {
  showProgress = false;
  urlSafe: SafeResourceUrl;
  backButtonSubscription: any;
  videonum: any;
  videotitle: any;
  youtubevideo: any;
  constructor(
    private modalController: ModalController,
    private router: Router,
    public sanitizer: DomSanitizer,
    public loadingController: LoadingController,
    private platform: Platform,
    private restapiService: RestapiService
  ) {}

  ngOnInit() {
    //this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.presentLoading();
    this.learnvideo();
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
  async leadformPopover() {
    const modal = await this.modalController.create({
      component: FormsLeadPage,
      cssClass: "lead-form"
    });
    return await modal.present();
  }
  onclickcontact() {
    this.router.navigate(["home-tab/main-home"]);
  }

  learnvideo() {
    this.showProgress = true;
    this.restapiService.get_data("traning").subscribe((res: any) => {
      this.videonum = res.data;
      this.videotitle = this.videonum.title;
      this.youtubevideo = this.videonum.url;
      console.log(this.videonum);
      console.log(this.youtubevideo);
      this.showProgress = false;
    });
  }
}
