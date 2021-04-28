import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { LoadingController } from "@ionic/angular";
import { Router } from "@angular/router";
import { HelperService } from "src/app/helper.service";
import { FormsLeadPage } from "../../main-home/forms-lead/forms-lead.page";
import { SearchPage } from "../search/search.page";
import { RestapiService } from "../../../restapi.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.page.html",
  styleUrls: ["./product-detail.page.scss"]
})
export class ProductDetailPage implements OnInit {
  title: any;
  product_id: any;
  productDetail: any;
  brandDescription: any;
  screenshots: any;
  productDsummery: any;
  productAlldata: any;
  plans: any;
  prices: any;
  menu: any;
  //organizationtype: any;
  showProgress = false;
  s3Url = "https://tj-web-prod.s3.ap-south-1.amazonaws.com/";
  screenshotsBg = this.s3Url + "web/assets/images/techjockey/products/";
  slideOptsDetail = {
    initialSlide: 0,
    speed: 400,
    zoom: false,
    slidesPerView: 1,
    spaceBetween: 0
  };
  slideOptProduct = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
  organizationsplit: any;
  recentlyshared: any;
  organizationtype: any;
  cpartner_id = "";
  // operatingsystmename = {
  //   1: "Ubntu",
  //   2: "Windows",
  //   3: "iOS",
  //   4: "Android",
  //   5: "MacOS",
  //   6: "Windows(Phone)"
  // };

  organizationtype2: string[];
  operatingSystem: any;
  oper2: any;
  errorMessage: any;

  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    private restapiService: RestapiService,
    private loadingController: LoadingController,
    private router: Router,
    private helperService: HelperService
  ) {
    this.title = navParams.get("title");
    this.product_id = navParams.get("product_id");
    this.productAlldata = "";

    this.cpartner_id = localStorage.getItem("cpartner_id");
  }

  ngOnInit() {
    this.cpartner_id = localStorage.getItem("cpartner_id");
    let cpartner_id = this.cpartner_id;
    this.restapiService
      .get_data(
        "product_detail?product_id=" +
          this.product_id +
          "&cpartner_id=" +
          cpartner_id
      )
      .subscribe((res: any) => {
        if (res.status) {
          this.productDetail = res.data;
          console.log(this.productDetail);
          this.productAlldata = this.productDetail;
          this.title = this.productDetail.product_name;
          //console.log(this.productAlldata.product_plan.length);
          this.screenshots = this.productDetail.screenshots;
          this.prices = this.productDetail.price;
          this.organizationtype = this.productAlldata.organization_type;
        }
      });
    this.recentlysharedby();
  }

  ionViewWillEnter() {
    this.cpartner_id = localStorage.getItem("cpartner_id");
  }

  async searchlistModal() {
    const modal = await this.modalCtrl.create({
      component: SearchPage
    });
    return await modal.present();
  }
  recentlysharedby() {
    this.restapiService
      .get_data("recently_sharedby?product_id=" + this.product_id)
      .subscribe((res: any) => {
        if (res.status) {
          this.recentlyshared = res.data;
         
        } else {
          //this.errorMessage = this.recentlyshared.error_msg;
          this.recentlyshared = res.data;
          
        }
      });
  }
  async leadformPopover() {
    const modal = await this.modalCtrl.create({
      component: FormsLeadPage
    });
    return await modal.present();
  }
  goBack() {
    this.productAlldata = "";
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  shareProduct(platform, product) {
    let cpartner_id = this.cpartner_id;
    this.helperService.socialShare(cpartner_id, platform, product);

    this.presentLoading();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 4000,
      message: "Please wait...",
      translucent: true
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }
}
