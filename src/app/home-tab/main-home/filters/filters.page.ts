import { Component, OnInit } from "@angular/core";
import {
  NavController,
  NavParams,
  ModalController,
  ToastController
} from "@ionic/angular";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.page.html",
  styleUrls: ["./filters.page.scss"]
})
export class FiltersPage implements OnInit {
  searchFilter = {
    slug: "",
    type: "category",
    cpartner_id: localStorage.getItem("cpartner_id"),
    start: 0,
    results: 20,
    filters: {
      features: [],
      min_price: 0,
      max_price: 1000000,
      discount: "",
      rating: "",
      org_size: [],
      org_type: [],
      operating_system: [],
      deployment: [],
      order_by: ""
    }
  };
  allFilters: any;
  filterType: any;
  categories: any;
  brands: any;

  defaultSelectedRadio = "radio_2";
  selectedRadioGroup: any;
  selectedRadioItem: any;
  shownGroup: null;

  categoryName: any;
  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private modalController: ModalController,
    private toastController: ToastController
  ) {
    this.allFilters = this.navParams.get("filters");
    this.filterType = this.navParams.get("selected");
    this.categories = this.navParams.get("categories");
    this.brands = this.navParams.get("brands");
    if (this.filterType !== "sort") {
      this.allFilters.category = "";
      this.allFilters.brand = "";
    }
    this.allFilters.filters.order_by = "";
  }

  ngOnInit() {}

  radioGroupChange(event) {
    this.selectedRadioGroup = event.detail;
    console.log("selected value : " + this.selectedRadioGroup.value);
    if (this.selectedRadioGroup.value == undefined) {
      this.allFilters.category = "";
      this.allFilters.brand = "";
      this.allFilters.filters.order_by = "";
      this.categoryName = "";
    }
  }

  radioSelect(type, event, name) {
    if (type === "category") {
      this.allFilters.category = event;
      this.categoryName = name;
    }

    if (type === "brand") {
      this.allFilters.brand = event;
      this.categoryName = name;
    }

    if (type === "sort") {
      this.allFilters.filters.order_by = event;
      this.categoryName = name;
    }
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

  selectFilters(type: any, val: string, name: string) {
    // console.log(val);
    // console.log(type);
    // console.log(name);
    // console.log(this.selectedRadioGroup);
    // console.log(this.selectedRadioItem);

    // if (type === 'category') {
    //   if (this.selectedRadioGroup !== undefined) {
    //     this.allFilters.category = val;
    //     this.allFilters.brand = '';
    //     this.categoryName = name;
    //   } else {
    //     this.allFilters.category = '';
    //     this.allFilters.brand = '';
    //     this.categoryName = '';
    //   }
    // }

    // if (type === 'brand') {
    //   if (this.selectedRadioGroup !== undefined) {
    //     this.allFilters.brand = val;
    //     this.allFilters.category = '';
    //     this.categoryName = name;
    //   } else {
    //     this.allFilters.brand = '';
    //     this.allFilters.category = '';
    //     this.categoryName = '';
    //   }
    // }

    if (type === "feature") {
      this.allFilters.filters.features.push(val);
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

    if (type === "org") {
      this.allFilters.filters.org_type.push(val);
    }

    if (type === "operating_system") {
      this.allFilters.filters.operating_system.push(val);
    }

    if (type === "deployment") {
      this.allFilters.filters.operating_system.push(val);
    }

    // if (type === 'sort') {
    //   if (this.selectedRadioGroup !== undefined) {
    //     this.allFilters.filters.order_by = val;
    //     this.categoryName = name;
    //   } else {
    //     this.allFilters.filters.order_by = '';
    //     this.categoryName = '';
    //   }
    // }

    // console.log(this.allFilters);
  }

  async applyFilter() {
    if (
      this.allFilters.category ||
      this.allFilters.brand ||
      this.allFilters.filters.order_by
    ) {
      let data = {
        search: false,
        sort: this.allFilters.filters.order_by !== "" ? true : false,
        title: this.categoryName,
        searchFilter: this.allFilters
      };
      this.modalController.dismiss(data);
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
