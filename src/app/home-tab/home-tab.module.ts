import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { HomeTabPageRoutingModule } from "./home-tab.router.module";
import { IonicModule } from "@ionic/angular";
import { HomeTabPage } from "./home-tab.page";

const routes: Routes = [
  {
    path: "",
    component: HomeTabPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTabPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeTabPage]
})
export class HomeTabPageModule {}
