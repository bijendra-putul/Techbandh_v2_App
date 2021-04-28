import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ProductListPage } from "./product-list.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ProductListPage],
  entryComponents: [ProductListPage]
})
export class ProductListPageModule {}
