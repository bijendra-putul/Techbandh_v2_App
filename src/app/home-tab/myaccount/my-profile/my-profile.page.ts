import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { RestapiService } from "../../../restapi.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer/ngx";
import {
  Camera,
  CameraOptions,
  PictureSourceType
} from "@ionic-native/camera/ngx";
import {
  ActionSheetController,
  Platform,
  LoadingController,
  ToastController
} from "@ionic/angular";
import { File, FileEntry } from "@ionic-native/file/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { Storage } from "@ionic/storage";
import { FilePath } from "@ionic-native/file-path/ngx";
import { finalize } from "rxjs/operators";
import { Router } from "@angular/router";

const STORAGE_KEY = "my_images";

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.page.html",
  styleUrls: ["./my-profile.page.scss"]
})
export class MyProfilePage implements OnInit {
  showProgress = false;
  images = [];
  updateprofile: any;
  formDatatext: any;
  cpartner: any;
  filelog: any;
  userForm: FormGroup;
  updatedata: any;
  successmessage: any;
  cpartnerDetail: any;
  contactDetail = {
    cpartner_id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    image: ""
  };

  profileImage: any;
  responseData: any;

  constructor(
    private restapiService: RestapiService,
    private modalController: ModalController,
    private toastController: ToastController,
    private camera: Camera,
    private file: File,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    private storage: Storage,
    private loadingController: LoadingController,
    private ref: ChangeDetectorRef,
    private filePath: FilePath,
    private platform: Platform,
    private transfer: FileTransfer,
    private router: Router
  ) {
    this.userForm = new FormGroup({
      first_name: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[a-zA-Z]+$")
      ]),
      last_name: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[a-zA-Z]+$")
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.minLength(4)
      ])
    });
  }

  ngOnInit() {
    this.cpartnerPartner();
    this.platform.ready().then(() => {});
    this.contactDetail.image = localStorage.getItem("profile_image");
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: "bottom",
      duration: 3000
    });
    toast.present();
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [
        {
          text: "Load from Library",
          handler: () => {
            this.getImage();
          }
        },
        {
          text: "Use Camera",
          handler: () => {
            this.takePhoto();
          }
        },
        {
          text: "Cancel",
          role: "cancel"
        }
      ]
    });
    await actionSheet.present();
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.contactDetail.image = "data:image/jpeg;base64," + imageData;
      },
      err => {}
    );
  }

  getImage() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.contactDetail.image = "data:image/jpeg;base64," + imageData;
      },
      err => {}
    );
  }

  cropImage() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true,
      targetWidth: 300,
      targetHeight: 300,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.contactDetail.image = "data:image/jpeg;base64," + imageData;
      },
      err => {}
    );
  }

  async goBack() {
    if (this.router.url === "/home-tab/myaccount") {
      this.router.navigate(["home-tab/myaccount"]);
    }
    this.modalController.dismiss(this.contactDetail);
  }
  cpartnerPartner() {
    this.showProgress = true;
    let cpartner_id = localStorage.getItem("cpartner_id");
    return this.restapiService
      .get_data("cpartner_details?cpartner_id=" + cpartner_id)
      .subscribe((res: any) => {
        this.showProgress = false;
        if (res && res.status) {
          console.log(res.data);
          this.responseData = res.data;
          console.log(this.responseData);
          this.contactDetail.first_name = this.responseData[0].first_name;
          this.contactDetail.last_name = this.responseData[0].last_name;
          this.contactDetail.email = this.responseData[0].email;
          this.contactDetail.image = this.responseData[0].profile_img;
          localStorage.setItem("profile_image", this.contactDetail.image);
          this.contactDetail.phone =
            this.responseData[0].phone !== undefined
              ? this.responseData[0].phone
              : localStorage.getItem("phone");
          this.contactDetail.cpartner_id = this.responseData[0].id;
        }
        console.log(this.contactDetail);
      });
  }
  async savebtn() {
    this.contactDetail.cpartner_id = localStorage.getItem("cpartner_id");
    console.log(this.contactDetail);
    this.restapiService
      .post_data("update_cpartner", this.contactDetail)
      .subscribe((res: any) => {
        this.updatedata = res;
        if (this.updatedata.status) {
          console.log(this.updatedata);
          this.successmessage = res.success_msg;
          this.prsentToast(this.successmessage);
        } else {
          this.prsentToast(this.updatedata.error_msg);
        }
      });
  }

  async prsentToast(msg) {
    const toast = await this.toastController.create({
      position: "bottom",
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
