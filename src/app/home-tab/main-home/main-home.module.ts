import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { MainHomePage } from "./main-home.page";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
const routes: Routes = [
  {
    path: "",
    component: MainHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxIonicImageViewerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainHomePage]
})
export class MainHomePageModule {}
