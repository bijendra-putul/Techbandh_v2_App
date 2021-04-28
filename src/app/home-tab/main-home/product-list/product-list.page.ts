import { Component, OnInit } from "@angular/core";
import { NavParams, ModalController, ToastController } from "@ionic/angular";
import { RestapiService } from "src/app/restapi.service";
import { HelperService } from "src/app/helper.service";
import { FiltersPage } from "../filters/filters.page";
import { ProductDetailPage } from "../product-detail/product-detail.page";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.page.html",
  styleUrls: ["./product-list.page.scss"]
})
export class ProductListPage implements OnInit {
  allFilters: any;
  disableCategory = false;
  disableBrand = false;
  disableSort = false;
  productList: any;
  categories: any;
  features: any;
  brands: any;
  title: any;
  sort: any;
  sortFlag = true;
  nodata: any;

  s3Url = "https://tj-web-prod.s3.ap-south-1.amazonaws.com/";
  //screenshotsBg = this.s3Url + "web/assets/images/techjockey/products/";
  productbg = this.s3Url +
    "web/assets/images/techjockey/products/";
  cpartner_id = "";
  constructor(
    public navParams: NavParams,
    private restapiService: RestapiService,
    public modalCtrl: ModalController,
    public helperService: HelperService,
    private toastController: ToastController
  ) {
    this.allFilters = this.navParams.get("searchFilter");
    console.log(this.allFilters);
    this.title = this.navParams.get("title");
    if (this.allFilters.category || this.allFilters.brand) {
      this.productlist();
      this.sortFlag = false;
    } else {
      this.topRatedProducts();
    }
  }

  ngOnInit() {}

  productlist(infiniteScroll?) {
    this.restapiService
      .post_data("product_list", this.allFilters)
      .subscribe((res: any) => {
        if (res.status) {
          this.productList = res.data.products;
          this.categories = res.data.categories;
          this.features = res.data.features;
          this.brands = res.data.brands;
          if (infiniteScroll) {
            infiniteScroll.target.complete();
          }
        } else {
          this.productList = "";
          this.nodata = res.error_msg;
        }
      });
  }

  topRatedProducts(infiniteScroll?) {
    return this.restapiService
      .post_data("top_rated_products", this.allFilters)
      .subscribe((res: any) => {
        if (res.status) {
          this.productList = res.data.products;
          this.categories = res.data.categories;
          this.features = res.data.features;
          this.brands = res.data.brands;
          if (infiniteScroll) {
            infiniteScroll.target.complete();
          }
        } else {
          this.productList = "";
          this.nodata = res.error_msg;
        }
      });
  }

  loadMore(infiniteScroll) {
    this.allFilters.results = this.allFilters.results + 10;

    if (this.sortFlag) {
      this.topRatedProducts(infiniteScroll);
    } else {
      this.productlist(infiniteScroll);
    }
  }

  selectFilters(val: any, type: string) {
    if (type === "category") {
      this.allFilters.category = val;
    }

    if (type === "brand") {
      this.allFilters.brand = val;
    }

    if (type === "feature") {
      this.allFilters.filters.feature.push(val);
    }

    if (type === "discount") {
      this.allFilters.filters.discount = val;
    }

    if (type === "rating") {
      this.allFilters.filters.rating = val;
    }

    if (type === "org_size") {
      this.allFilters.filters.org_size.push(val);
    }

    if (type === "org_type") {
      this.allFilters.filters.org_type.push(val);
    }

    if (type === "operating_system") {
      this.allFilters.filters.operating_system.push(val);
    }

    if (type === "deployment") {
      this.allFilters.filters.operating_system.push(val);
    }
  }

  goHome() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  async setFilter(selected) {
    this.disableCategory = true;
    this.disableBrand = true;
    this.disableSort = true;
    const filterModal = await this.modalCtrl.create({
      component: FiltersPage,
      componentProps: {
        categories: this.categories,
        brands: this.brands,
        filters: this.allFilters,
        selected: selected
      },
      cssClass: "custom-modal"
    });

    filterModal.onDidDismiss().then((data?) => {
      this.disableCategory = false;
      this.disableBrand = false;
      this.disableSort = false;
      if (data["data"] !== undefined) {
        this.allFilters = data["data"].searchFilter;
        this.title = data["data"].title;
        this.productList = "";
        this.applyFilter();
      }
    });

    return await filterModal.present();
  }

  ionViewWillEnter() {
    this.disableCategory = false;
    this.disableBrand = false;
    this.disableSort = false;
    this.cpartner_id = localStorage.getItem("cpartner_id");
  }

  applyFilter() {
    if (
      this.allFilters.category ||
      this.allFilters.brand ||
      this.allFilters.sort_by
    ) {
      this.restapiService
        .post_data("product_list", this.allFilters)
        .subscribe((res: any) => {
          if (res.status) {
            this.productList = res.data.products;
          } else {
            this.productList = "";
            this.nodata = res.error_msg;
          }
        });
    } else {
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "No filter selected",
      position: "bottom",
      duration: 3000
    });
    toast.present();
  }

  shareProduct(platform, product) {
    let cpartner_id = this.cpartner_id;
    this.helperService.socialShare(cpartner_id, platform, product);
  }
  async product_detail(name: any, id: any) {
    const productDetail = await this.modalCtrl.create({
      component: ProductDetailPage,
      componentProps: {
        product_id: id,
        title: name
      }
    });
    return await productDetail.present();
  }
}
