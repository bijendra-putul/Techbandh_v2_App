import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

import { RestapiService } from "../../../restapi.service";
import { SearchandfilterdetailPage } from "../searchandfilterdetail/searchandfilterdetail.page";
import { ProductListPage } from "../product-list/product-list.page";
import { ProductDetailPage } from "../product-detail/product-detail.page";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"]
})
export class SearchPage implements OnInit {
  sliderOptssearchDep = {
    initialSlide: 0,
    slidesPerView: 2.7,
    spaceBetween: 15,
    centerMode: true,
    infinite: true
  };
  posts: any;
  searchQuery: any = "";
  items: any[];
  productList: any;
  getDepartments: any;
  getDepartmentsname: any;
  getIndustriesname: any;
  getIndustries: any;
  searchFilter: {
    slug: "";
    type: "";
    page: 1;
    filters: {
      feature: any[];
      min_price: 0;
      max_price: 1000000;
      brand: any[];
      discount: "";
      rating: "";
      org_size: any[];
      org_type: any[];
      operating_system: any[];
      deployment: any[];
    };
  };

  constructor(
    private restapiService: RestapiService,
    private router: Router,
    private modalController: ModalController
  ) {}

  searchCatgories: any;

  ngOnInit() {}

  searchbackDismiss() {
    this.modalController.dismiss();
  }

  async searchproductdetail() {
    const modal = await this.modalController.create({
      component: SearchandfilterdetailPage
    });
    return await modal.present();
  }
  getDepartment() {
    return this.restapiService
      .get_data("get_departments")
      .subscribe((res: any) => {
        this.getDepartments = res;
        this.getDepartmentsname = this.getDepartments.data;
      });
  }

  getIndustry() {
    this.restapiService.get_data("get_industries").subscribe((res: any) => {
      this.getIndustries = res;
      this.getIndustriesname = this.getIndustries.data;
    });
  }
  searchCategories() {
    this.restapiService.get_data("search_categories").subscribe((res: any) => {
      this.searchCatgories = res;
      this.posts = this.searchCatgories.data;
    });
  }

  getItems(input: any) {
    let keyword = input.target.value;
    if (keyword.length > 0) {
      this.restapiService
        .get_data("product_search?keyword=" + keyword)
        .subscribe((res: any) => {
          if (res.status) {
            this.productList = res.data;
          }
        });
    } else {
      this.productList = "";
    }
  }
  async selectedSearch(name: any, id: any, type: any) {
    if (type === "product") {
      const productDetail = await this.modalController.create({
        component: ProductDetailPage,
        componentProps: {
          product_id: id,
          title: name
        }
      });
      return await productDetail.present();
    } else {
      const productList = await this.modalController.create({
        component: ProductListPage,
        componentProps: {
          search: true,
          title: name,
          slug: id,
          type: type
        }
      });
      return productList.present();
    }
  }
}
