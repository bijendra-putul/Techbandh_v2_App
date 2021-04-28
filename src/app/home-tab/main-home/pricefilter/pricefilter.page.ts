import { Component, OnInit, ViewChild, ɵConsole } from "@angular/core";
import { NavParams, ModalController, ToastController } from "@ionic/angular";
import { NavController } from "@ionic/angular";
import { RestapiService } from "../../../restapi.service";
import { ProductListPage } from "../product-list/product-list.page";
@Component({
  selector: "app-pricefilter",
  templateUrl: "./pricefilter.page.html",
  styleUrls: ["./pricefilter.page.scss"]
})
export class PricefilterPage implements OnInit {
  showThis: Boolean = false;
  isActive: Boolean = false;
  selectedRadioGroup: any;
  selectedRadioItem: any;
  isChecked = false;
  selectedFilter: any;
  shownGroup: null;
  posts: any;
  category: any;
  features: any;
  brand: any;
  allFilters: any;
  productList: any;
  categoryName: any;
  filterType: any;
  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private modalController: ModalController,
    private toastController: ToastController
  ) {
    this.filterType = this.navParams.get("selected");
    this.selectedFilter = this.navParams.get("filters");
    // console.log(this.selectedFilter);
    this.category = this.navParams.get("categories");
    // console.log(this.category);
    this.brand = this.navParams.get("brands");
    //console.log(this.brand);
    this.selectedFilter.category = "";
    this.selectedFilter.brand = "";
    this.selectedFilter.filters.order_by = "";
  }

  radioGroupChange(event) {
    //console.log('radioGroupChange', event.detail);
    this.selectedRadioGroup = event.detail;
    console.log("selected value : " + this.selectedRadioGroup.value);
    if (this.selectedRadioGroup.value == undefined) {
      this.selectedFilter.category = "";
      this.selectedFilter.brand = "";
      this.selectedFilter.filters.order_by = "";
      this.categoryName = "";
      console.log(this.selectedFilter);
    }
  }

  radioSelect(type, event, name) {
    console.log(type);
    console.log(name);
    this.selectedRadioItem = event.detail;
    console.log("selected value : " + this.selectedRadioItem.value);

    if (type === "category") {
      this.selectedFilter.category = this.selectedRadioItem.value;
      this.categoryName = name;
    }

    if (type === "brand") {
      this.selectedFilter.brand = this.selectedRadioItem.value;
      this.categoryName = name;
    }

    if (type === "sort") {
      this.selectedFilter.filters.order_by = this.selectedRadioItem.value;
      this.categoryName = name;
    }

    console.log(this.selectedFilter);
  }

  radiounSelect(event) {
    this.selectedRadioItem = event.false;
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  }
  isGroupShown(group) {
    return this.shownGroup === group;
  }

  ngOnInit() {}

  selectFilters(type: any, val: string, name: string) {
    // if (type === 'category') {
    //     this.selectedFilter.category = val;
    //     this.categoryName = name;
    // }

    // if (type === 'brand') {
    //     this.selectedFilter.brand = val;
    //     this.categoryName = name;
    // }

    if (type === "feature") {
      this.selectedFilter.filters.features.push(val);
    }

    if (type === "discount") {
      this.selectedFilter.filters.discount = val;
    }

    if (type === "rating") {
      this.selectedFilter.filters.rating = val;
    }

    if (type === "org_size") {
      this.selectedFilter.filters.org_size.push(val);
    }

    if (type === "org") {
      this.selectedFilter.filters.org_type.push(val);
    }

    if (type === "operating_system") {
      this.selectedFilter.filters.operating_system.push(val);
    }

    if (type === "deployment") {
      this.selectedFilter.filters.operating_system.push(val);
    }

    // if (type === 'sort') {
    //     this.selectedFilter.filters.order_by = val;
    //     this.categoryName = name;
    // }
  }

  async applyFilter() {
    console.log(this.selectedFilter);
    if (
      this.selectedFilter.category ||
      this.selectedFilter.brand ||
      this.selectedFilter.filters.order_by
    ) {
      const productList = await this.modalController.create({
        component: ProductListPage,
        componentProps: {
          search: false,
          sort: this.selectedFilter.filters.order_by !== "" ? true : false,
          title: this.categoryName,
          searchFilter: this.selectedFilter
        }
      });
      return productList.present();
    } else {
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "No filter selected",
      position: "bottom",
      duration: 2000
    });
    toast.present();
  }

  cancelFilter() {
    this.modalController.dismiss();
  }
  allClickedCategories(event) {
    this.selectedRadioItem = !event.detail;
  }
}
