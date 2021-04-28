import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Platform, AlertController } from "@ionic/angular";
@Component({
  selector: "app-home-tab",
  templateUrl: "./home-tab.page.html",
  styleUrls: ["./home-tab.page.scss"]
})
export class HomeTabPage implements OnInit {
  backButtonSubscription: any;
  constructor(
    private router: Router,
    private platform: Platform,
    private alertController: AlertController
  ) {}
  ngOnInit() {}
}
