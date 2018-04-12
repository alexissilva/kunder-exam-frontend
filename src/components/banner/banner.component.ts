import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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

	constructor(private iab: InAppBrowser) {

		var info = {
			show: true,
	    	type: "cellphone",
	    	backgroundImg: "https://image.freepik.com/free-vector/geometric-grey-background_1055-3147.jpg",
	    	buttonText: "Ver",
	    	link: "http://www.kunder.cl",
	    	productId: "009263",
	    	productImg: "https://s3.amazonaws.com/kunder-exam/frontend/cellphones/S8_front.png",
	    	productName: "Samsung Galaxy S8",
	    	productDescription: "Aprovecha el descuento exclusivo en este equipo contratando un plan"
		};

		this.show = info["show"];
		this.type = info["type"];
		this.backgroundImg = info["backgroundImg"];
		this.buttonText = info["buttonText"];
		this.link = info["link"];
		this.productId = info["productId"];
		this.productImg = info["productImg"];
		this.productName = info["productName"];
		this.productDescription = info["productDescription"];

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

