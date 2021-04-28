import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { Market } from "@ionic-native/market/ngx";
import {
  ThemeableBrowser,
  ThemeableBrowserOptions,
  ThemeableBrowserObject
} from "@ionic-native/themeable-browser/ngx";

/* Pages/Modals */
import { PricefilterPageModule } from "./home-tab/main-home/pricefilter/pricefilter.module";
import { SearchPageModule } from "./home-tab/main-home/search/search.module";
import { MySettingPageModule } from "./home-tab/myaccount/my-setting/my-setting.module";
import { SearchandfilterdetailPageModule } from "./home-tab/main-home/searchandfilterdetail/searchandfilterdetail.module";
import { FormsLeadPageModule } from "./home-tab/main-home/forms-lead/forms-lead.module";
import { MyProfilePageModule } from "./home-tab/myaccount/my-profile/my-profile.module";
import { ProductListPageModule } from "./home-tab/main-home/product-list/product-list.module";
import { ProductDetailPageModule } from "./home-tab/main-home/product-detail/product-detail.module";
import { AbouttechjockeyPageModule } from "./home-tab/myaccount/my-setting/abouttechjockey/abouttechjockey.module";
import { LogoutPageModule } from "./home-tab/myaccount/my-setting/logout/logout.module";
import { MyleadsPageModule } from "./home-tab/myaccount/myleads/myleads.module";
import { MysharesPageModule } from "./home-tab/myaccount/myshares/myshares.module";
import { BankAccountDetailsPageModule } from "./home-tab/myaccount/bank-account-details/bank-account-details.module";
import { MyearningsdocPageModule } from "./home-tab/myaccount/myearningsdoc/myearningsdoc.module";
import { TacPageModule } from "./home-tab/myaccount/my-setting/tac/tac.module";
import { PrivacyPageModule } from "./home-tab/myaccount/my-setting/privacy/privacy.module";
import { Camera } from "@ionic-native/camera/ngx";
import { File } from "@ionic-native/file/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";
import { IonicStorageModule } from "@ionic/storage";
import { VideoPlayer } from "@ionic-native/video-player/ngx";
import { NgxIonicImageViewerModule } from "ngx-ionic-image-viewer";
import { SearchProductPageModule } from "./home-tab/main-home/search-product/search-product.module";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { FiltersPageModule } from "./home-tab/main-home/filters/filters.module";
import { Push } from "@ionic-native/push/ngx";

import { FirebaseDynamicLinks } from "@ionic-native/firebase-dynamic-links/ngx"
import { Deeplinks } from "@ionic-native/deeplinks/ngx";
//import { OneSignal } from "@ionic-native/onesignal/ngx";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    PricefilterPageModule,
    NgxIonicImageViewerModule,
    SearchPageModule,
    MySettingPageModule,
    SearchandfilterdetailPageModule,
    FormsLeadPageModule,
    MyProfilePageModule,
    ProductListPageModule,
    ProductDetailPageModule,
    AbouttechjockeyPageModule,
    LogoutPageModule,
    MyleadsPageModule,
    MysharesPageModule,
    BankAccountDetailsPageModule,
    MyearningsdocPageModule,
    TacPageModule,
    PrivacyPageModule,
    SearchProductPageModule,
    FiltersPageModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    VideoPlayer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File,
    WebView,
    FilePath,
    FileTransfer,
    InAppBrowser,
    Market,
    ThemeableBrowser,
    Push,
    //FirebaseAnalytics,
    //EventLoggerProvider
    FirebaseDynamicLinks,
    Deeplinks,
    //OneSignal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
