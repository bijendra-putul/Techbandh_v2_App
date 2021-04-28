import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home-tab/main-home", pathMatch: "full" },

  // {
  //   path: 'myprofile',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('./home-tab/myaccount/my-profile/my-profile.module').then(
  //           m => m.MyProfilePageModule
  //         )
  //     }
  //   ]
  // }

  {
    path: "welcome",
    loadChildren: "./welcome/welcome.module#WelcomePageModule"
  },

  {
    path: "home-tab",
    loadChildren: "./home-tab/home-tab.module#HomeTabPageModule"
  },

  {
    path: "version",
    loadChildren: () =>
      import("./verison/verison.module").then(m => m.VerisonPageModule)
  },
  {
    path: "pricefilter",
    loadChildren:
      "./home-tab/main-home/pricefilter/pricefilter.module#PricefilterPageModule"
  },
  {
    path: "my-setting",
    loadChildren:
      "./home-tab/myaccount/my-setting/my-setting.module#MySettingPageModule"
  },
  {
    path: "searchandfilterdetail",
    loadChildren:
      "./home-tab/main-home/searchandfilterdetail/searchandfilterdetail.module#SearchandfilterdetailPageModule"
  },
  {
    path: "forms-lead",
    loadChildren:
      "./home-tab/main-home/forms-lead/forms-lead.module#FormsLeadPageModule"
  },
  {
    path: "logout",
    loadChildren:
      "./home-tab/myaccount/my-setting/logout/logout.module#LogoutPageModule"
  },
  {
    path: "abouttechjockey",
    loadChildren:
      "./home-tab/myaccount/my-setting/abouttechjockey/abouttechjockey.module#AbouttechjockeyPageModule"
  },
  {
    path: "tac",
    loadChildren: "./home-tab/myaccount/my-setting/tac/tac.module#TacPageModule"
  },
  {
    path: "privacy",
    loadChildren:
      "./home-tab/myaccount/my-setting/privacy/privacy.module#PrivacyPageModule"
  },
  {
    path: "changelanguage",
    loadChildren:
      "./home-tab/myaccount/my-setting/changelanguage/changelanguage.module#ChangelanguagePageModule"
  },
  {
    path: "bank-account-details",
    loadChildren:
      "./home-tab/myaccount/bank-account-details/bank-account-details.module#BankAccountDetailsPageModule"
  },
  {
    path: "myshares",
    loadChildren:
      "./home-tab/myaccount/myshares/myshares.module#MysharesPageModule"
  },
  {
    path: "myleads",
    loadChildren:
      "./home-tab/myaccount/myleads/myleads.module#MyleadsPageModule"
  },
 
  {
    path: "filters",
    loadChildren:
      "./home-tab/main-home/filters/filters.module#FiltersPageModule"
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
