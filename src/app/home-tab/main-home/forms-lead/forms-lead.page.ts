import { Component, OnInit } from "@angular/core";
import { RestapiService } from "../../../restapi.service";
import {
  NavController,
  ModalController,
  AlertController
} from "@ionic/angular";
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators
} from "@angular/forms";
import { phoneNumberValidator } from "../../../phone-validator";
import { SearchProductPage } from "../search-product/search-product.page";
import { Router } from "@angular/router";
@Component({
  selector: "app-forms-lead",
  templateUrl: "./forms-lead.page.html",
  styleUrls: ["./forms-lead.page.scss"]
})
export class FormsLeadPage implements OnInit {
  showProgress = false;
  formgroup: FormGroup;
  customer_name: AbstractControl;
  customer_email: AbstractControl;
  customer_phone: AbstractControl;
  customer_requirement: AbstractControl;
  customer_product: AbstractControl;
  client_type: AbstractControl;
  leadData = {
    cpartner_id: "",
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    customer_product_id: "",
    customer_requirement: "",
    client_type: "",
    customer_product: "",
    admin_approval: 0
  };

  leadResponse: any;
  username: string;

  constructor(
    private restapiService: RestapiService,
    public navCtrl: NavController,
    public formbuilder: FormBuilder,
    private modalController: ModalController,
    public alertController: AlertController,
    private router: Router
  ) {
    this.formgroup = formbuilder.group({
      customer_name: ["", Validators.required],
      customer_email: [
        "",
        Validators.compose([Validators.required, Validators.email])
      ],
      customer_phone: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^[6-9]\d{9}$/)
        ])
      ],
      customer_requirement: ["", Validators.required],
      client_type: ["", Validators.required],
      customer_product: [this.leadData.customer_product]
    });
    this.customer_name = this.formgroup.controls["customer_name"];
    this.customer_email = this.formgroup.controls["customer_email"];
    this.customer_phone = this.formgroup.controls["customer_phone"];
    this.customer_product = this.formgroup.controls["customer_product"];
    this.customer_requirement = this.formgroup.controls["customer_requirement"];
    this.client_type = this.formgroup.controls["Client_Type"];
  }

  ngOnInit() {}

  addlead() {
    this.showProgress = true;
    this.leadData.cpartner_id = localStorage.getItem("cpartner_id");
    this.leadData.customer_name = this.formgroup.value.customer_name;
    this.leadData.customer_email = this.formgroup.value.customer_email;
    this.leadData.customer_phone = this.formgroup.value.customer_phone;
    this.leadData.customer_requirement = this.formgroup.value.customer_requirement;
    this.leadData.client_type = this.formgroup.value.client_type;
    console.log(this.leadData.client_type);
    return this.restapiService
      .post_data("add_leads", this.leadData)
      .subscribe((res: any) => {
        this.leadResponse = res;
        this.showProgress = false;
        if (this.leadResponse.status) {
          this.close();
          this.presentAlert(this.leadResponse.success_msg);
        }
      });
  }

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: "Success",
      message: msg,
      buttons: ["OK"]
    });

    await alert.present();
  }

  async close() {
    if (this.router.url === "/home-tab/main-home") {
      this.router.navigate(["home-tab/main-home"]);
    }
    if (this.router.url === "/home-tab/learn") {
      this.router.navigate(["home-tab/learn"]);
    }
    if (this.router.url === "/home-tab/my-shares") {
      this.router.navigate(["home-tab/my-shares"]);
    }
    if (this.router.url === "/home-tab/myaccount") {
      this.router.navigate(["home-tab/myaccount"]);
    }
    if (this.router.url === "/home-tab/contact-us") {
      this.router.navigate(["home-tab/contact-us"]);
    }

    this.modalController.dismiss(this.leadData);
  }

  async selectProduct() {
    const modal = await this.modalController.create({
      component: SearchProductPage
    });

    modal.onDidDismiss().then(data => {
      const product = data["data"];
      if (product) {
        this.leadData.customer_product_id = product.product_id;
        this.leadData.customer_product = product.product_name;
        this.customer_product = product.product_name;
      } else {
        this.leadData.customer_product_id = "";
        this.leadData.customer_product = "";
      }
    });

    return await modal.present();
  }
}
