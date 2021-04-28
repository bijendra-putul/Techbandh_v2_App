import { Component, OnInit, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { RestapiService } from "../../restapi.service";
import { ModalController } from "@ionic/angular";
import { SearchPage } from "../main-home/search/search.page";
import {
  PopoverController,
  Platform,
  AlertController,
  NavController
} from "@ionic/angular";
import { FormsLeadPage } from "../main-home/forms-lead/forms-lead.page";
import { ProductListPage } from "./product-list/product-list.page";
import { HelperService } from "src/app/helper.service";
import { PricefilterPage } from "./pricefilter/pricefilter.page";
import { IonInfiniteScroll } from "@ionic/angular";
import { ProductDetailPage } from "./product-detail/product-detail.page";
import { LoadingController } from "@ionic/angular";
@Component({
  selector: "app-main-home",
  templateUrl: "./main-home.page.html",
  styleUrls: ["./main-home.page.scss"]
})
export class MainHomePage implements OnInit {
  slideOptsvdm = {
    initialSlide: 0,
    zoom: false,
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: false
  };
  sliderOpts = {
    initialSlide: 0,
    zoom: false,
    slidesPerView: 3.8,
    spaceBetween: 0,
    centeredSlides: false
  };
  s3Url = "https://tj-web-prod.s3.ap-south-1.amazonaws.com/";
  myproductdepatment: any;
  myproductindustries: any;
  productbg = this.s3Url + "web/assets/images/techjockey/products/";
  bannerUrl = "https://techbandhu.techjockey.com/assets/images/";

  mainbanner = this.s3Url + "cp/assets/images/tech-bandhu/banners/";
  productname: any;
  products: any;
  accountManager: any;
  topChannelPartners: any;
  banners: any;
  topRatedProduct: any;
  departments: any;
  getIndustries: any;
  getIndustriesname: any;
  ratingVal: any;
  priceOnrrequest: any;
  pricesdscount: any;
  categories: any;
  features: any;
  brands: any;
  price: any;
  disableCategory = false;
  disableBrand = false;
  disableSort = false;
  searchFilter = {
    cpartner_id: "",
    category: "",
    brand: "",
    industry: "",
    department: "",
    start: 0,
    results: 20,
    filters: {
      features: [],
      price: "",
      discount: "",
      rating: "",
      org_size: [],
      org_type: [],
      operating_system: [],
      deployment: [],
      order_by: ""
    }
  };

  alldepartment = {
    dp: {
      discount: ""
    }
  };
  cpartner_id: any;
  getDepartments: any;
  getDepartmentsname: any;
  defaultImg = "../../assets/images/badu-live.png";
  loaderToShow: any;
  shareData = {
    cpartner_id: "",
    product_id: "",
    platform: ""
  };
  backButtonSubscription: any;

  constructor(
    private restapiService: RestapiService,
    private modalController: ModalController,
    private helperService: HelperService,
    private platform: Platform,
    private alertController: AlertController,
    private router: Router,
    private navCtrl: NavController,
    private loadingController: LoadingController
  ) {
    this.cpartner_id = localStorage.getItem("cpartner_id");
    console.log(this.cpartner_id);
    console.log("---");
    this.topRatedProducts();
    this.topChannelPartner();
  }

  ngOnInit() {
    // this.getDepartment();
    // this.getIndustry();
    console.log(sessionStorage.getItem("cpartner_id"));
    console.log(sessionStorage.getItem("name"));
    console.log(sessionStorage.getItem("phone"));
    //this.cpartner_id = localStorage.getItem("cpartner_id");
    this.cpartner_id = sessionStorage.getItem("cpartner_id");
    //console.log('bijendra kumar singh')
  }

  async setFilter(selected) {
    this.searchFilter.cpartner_id = this.cpartner_id;
    this.disableCategory = true;
    this.disableBrand = true;
    this.disableSort = true;
    const filterModal = await this.modalController.create({
      component: PricefilterPage,
      componentProps: {
        categories: this.categories,
        brands: this.brands,
        filters: this.searchFilter,
        selected
      },
      cssClass: "custom-modal"
    });

    filterModal.onDidDismiss().then(() => {
      this.disableCategory = false;
      this.disableBrand = false;
      this.disableSort = false;
    });
    return await filterModal.present();
  }

  ionViewWillEnter() {
    this.disableCategory = false;
    this.disableBrand = false;
    this.disableSort = false;
    this.cpartner_id = localStorage.getItem("cpartner_id");
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

  shareProduct(platform, product) {
    const cpartner_id = this.cpartner_id;
    this.helperService.socialShare(cpartner_id, platform, product);
  }

  topChannelPartner() {
    return this.restapiService
      .get_data("top_channel_partner")
      .subscribe((res: any) => {
        this.products = res;
        this.accountManager = this.products.data.account_manager;
        this.topChannelPartners = this.products.data.top_channel_partner;
        this.banners = this.products.data.banners;
        //console.log(this.banners);
      });
  }

  topRatedProducts(infiniteScroll?) {
    this.searchFilter.cpartner_id =
      this.cpartner_id !== undefined
        ? this.cpartner_id
        : localStorage.getItem("cpartner_id");
    //this.searchFilter.cpartner_id = localStorage.getItem("cpartner_id");
    // console.log(this.searchFilter);
    return this.restapiService
      .post_data("top_rated_products", this.searchFilter)
      .subscribe((res: any) => {
        this.topRatedProduct = res;
        if (this.topRatedProduct.status) {
          this.productname = this.topRatedProduct.data.products;
          console.log(this.productname);
          this.categories = this.topRatedProduct.data.categories;
          this.features = this.topRatedProduct.data.features;
          this.brands = this.topRatedProduct.data.brands;
          if (infiniteScroll) {
            infiniteScroll.target.complete();
          }
        }
      });
  }

  loadMore(infiniteScroll) {
    this.searchFilter.results = this.searchFilter.results + 5;
    this.topRatedProducts(infiniteScroll);
  }

  async selectedSearch(name: any, id: any, type: any) {
    console.log(name);
    console.log(id);
    console.log(type);
    const productList = await this.modalController.create({
      component: ProductListPage,
      componentProps: {
        title: name,
        slug: id,
        type
      }
    });
    return productList.present();
  }

  async product_detail(name: any, id: any) {
    const productDetail = await this.modalController.create({
      component: ProductDetailPage,
      componentProps: {
        product_id: id,
        title: name
      }
    });
    return await productDetail.present();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 4000,
      message: "Please wait...",
      translucent: true
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log("Loading dismissed!");
  }
}
