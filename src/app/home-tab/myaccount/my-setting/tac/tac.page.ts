import { Component, OnInit } from "@angular/core";
import { ModalController, PopoverController } from "@ionic/angular";
import { SearchPage } from "../../../main-home/search/search.page";
import { FormsLeadPage } from "../../../main-home/forms-lead/forms-lead.page";

@Component({
  selector: "app-tac",
  templateUrl: "./tac.page.html",
  styleUrls: ["./tac.page.scss"]
})
export class TacPage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {}
  goBack() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  async searchlistModal() {
    const modal = await this.modalCtrl.create({
      component: SearchPage
    });
    return await modal.present();
  }
  async leadformPopover() {
    const modal = await this.modalCtrl.create({
      component: FormsLeadPage
    });
    return await modal.present();
  }
}
