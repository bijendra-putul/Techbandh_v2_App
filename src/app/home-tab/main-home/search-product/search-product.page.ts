import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

import { RestapiService } from "../../../restapi.service";
import { SearchandfilterdetailPage } from "../searchandfilterdetail/searchandfilterdetail.page";
import { ProductListPage } from "../product-list/product-list.page";
import { ProductDetailPage } from "../product-detail/product-detail.page";

@Component({
  selector: "app-search-product",
  templateUrl: "./search-product.page.html",
  styleUrls: ["./search-product.page.scss"]
})
export class SearchProductPage implements OnInit {
  productList: any;
  constructor(
    private restapiService: RestapiService,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  searchbackDismiss(product?) {
    if (product) {
      console.log(product);
      this.modalController.dismiss(product);
    } else {
      this.modalController.dismiss();
    }
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
  async selectedSearch(product: any) {
    this.searchbackDismiss(product);
  }
}
