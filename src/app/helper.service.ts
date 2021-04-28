import { Injectable } from "@angular/core";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { RestapiService } from "./restapi.service";
import { ModalController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class HelperService {
  showProgress = false;
  shareData = {
    cpartner_id: "",
    product_id: "",
    platform: ""
  };
  s3Url = "https://tj-web-prod.s3.ap-south-1.amazonaws.com/";
  imgUrl = this.s3Url + "web/assets/images/techjockey/products/";
  slug = "https://techjockey.com/detail/";

  constructor(
    private socialSharing: SocialSharing,
    private restapiService: RestapiService,
    private modalCtrl: ModalController
  ) {}

  socialShare(cpartner_id, platform, product) {
    const message = this.generateMsg(product);
    const image = this.imgUrl + product.image;
    const slug = product.share_url;
    this.shareData.cpartner_id = cpartner_id;
    this.shareData.platform = platform;
    this.shareData.product_id = product.product_id;

    console.log(this.shareData);

    /* WhatsApp */
    if (platform == "whatsapp") {
      this.socialSharing
        .shareViaWhatsApp(message, image, slug)
        .then(wshare => {
          console.log(wshare);
          return this.restapiService
            .post_data("share_products", this.shareData)
            .subscribe((res: any) => {
              console.log(res);
            });
        })
        .catch(e => {
          console.log(e);
        });
    }

    /* Facebook */
    if (platform == "facebook") {
      var pasteMessageHint = "Copy content to share";
      this.socialSharing
        .shareViaFacebook(message, null, slug)
        // .shareViaFacebookWithPasteMessageHint(
        //   message,
        //   image,
        //   slug,
        //   pasteMessageHint
        // )
        .then(fshare => {
          console.log(fshare);
          return this.restapiService
            .post_data("share_products", this.shareData)
            .subscribe((res: any) => {
              console.log(res);
            });
        })
        .catch(e => {
          console.log(e);
        });
    }

    /* Twitter */
    if (platform == "twitter") {
      this.socialSharing
        .shareViaTwitter(message, image, slug)
        .then(res => {
          return this.restapiService
            .post_data("share_products", this.shareData)
            .subscribe((res: any) => {
              console.log(res);
            });
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* Mail */
    if (platform == "mail") {
    }
    /* General */
    if (platform == "general") {
      this.showProgress = true;
      this.socialSharing
        .share(message, "", image, slug)
        .then(res => {
          return this.restapiService
            .post_data("share_products", this.shareData)
            .subscribe((res: any) => {
              console.log(res);
              this.showProgress = false;
            });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

  generateMsg(product) {
    return (
      "Hey,\n I’ve been providing software consultation to businesses for quite a while now and suggesting the best IT solutions as per their requirements.I have 10,000 software and hardware products for your needs and recommend you to explore " +
      product.product_name +
      " by clicking on the given link."
    );
  }
}
