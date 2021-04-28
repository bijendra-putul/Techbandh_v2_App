import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { MyProfilePage } from "./my-profile.page";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
const routes: Routes = [
  {
    path: "",
    component: MyProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgxIonicImageViewerModule
  ],
  declarations: [MyProfilePage]
})
export class MyProfilePageModule {}
