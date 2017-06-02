import { Injectable } from '@angular/core';
import { Http, Headers }       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SettingsService {
	private _url = "http://localhost:3000/settings";

constructor(private _http: Http){
	
	}

	getSettings(){
		return this._http.get(this._url)
			.map(res => res.json());
			
	}
    
    getSetting(settingId){
		return this._http.get(this.getSettingUrl(settingId))
			.map(res => res.json());
	}
    
    addSetting(setting){
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');

		return this._http.post(this._url, JSON.stringify(setting), {headers: headers})
			.map(res => res.json());
	}
    
    updateSetting(setting){
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');

		return this._http.put(this.getSettingUrl(setting._id), JSON.stringify(setting), {headers: headers})
			.map(res => res.json());
	}

	  
        
    private getSettingUrl(settingId){
		return this._url + "/" + settingId;
	}
}