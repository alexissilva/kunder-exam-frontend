import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiRestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiRestProvider {

  bannerUrl: string = "https://hack.kunderlabs.com/exam/telecom/api/products/new"; 

  constructor(public http: HttpClient) {
    //console.log('Hello ApiRestProvider Provider');
  }

  getBannerInfo() {
  	return new Promise(resolve => {
  		this.http.get(this.bannerUrl).subscribe(data => {
  			resolve(data);
  		}, err => {
  			console.log(err);
  		});
  	});
  }

}
