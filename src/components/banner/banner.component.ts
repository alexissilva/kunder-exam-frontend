import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ApiRestProvider } from '../../providers/api-rest/api-rest';

/**
* Generated class for the BannerComponent component.
*
* See https://angular.io/api/core/Component for more info on Angular
* Components.
*/
@Component({
	selector: 'banner',
	templateUrl: 'banner.html'
})
export class BannerComponent {
	
	show: boolean;
	type: string;
	backgroundImg: string;
	buttonText: string;
	link: string;
	productId: string;
	productImg: string;
	productName: string;
	productDescription: string;

	constructor(private iab: InAppBrowser, private api: ApiRestProvider) {
		this.api.getBannerInfo().then(
			data => {
				var info = data["product"];
				this.show = info["show"];
				this.type = info["type"];
				this.backgroundImg = info["backgroundImg"];
				this.buttonText = info["buttonText"];
				this.link = info["link"];
				this.productId = info["productId"];
				this.productImg = info["productImg"];
				this.productName = info["productName"];
				this.productDescription = info["productDescription"];
				console.log(info);

				this.show = true;
		});

	}


	isPlan() {
		return this.type == "plan";
	}

	isCellphone() {
		return this.type == "cellphone";
	}

	goToLink() {
		this.iab.create(this.link, '_system');
	}
	
}

