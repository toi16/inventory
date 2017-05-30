import { Injectable } from '@angular/core';
import { Http, Headers }       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InventoryService {
	//private _url = "http://jsonplaceholder.typicode.com/users";
    private _url = "http://localhost:3000/api";

constructor(private _http: Http){
	
	}

	getInventorys(){
		return this._http.get(this._url)
			.map(res => res.json());
			
	}
    
    getInventory(inventoryId){
		return this._http.get(this.getInventoryUrl(inventoryId))
			.map(res => res.json());
	}
    
    addInventory(inventory){
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');

		return this._http.post(this._url, JSON.stringify(inventory), {headers: headers})
			.map(res => res.json());
	}
    
    updateInventory(inventory){
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');

		return this._http.put(this.getInventoryUrl(inventory._id), JSON.stringify(inventory), {headers: headers})
			.map(res => res.json());
	}

	  
    deleteInventory(inventoryId){
		return this._http.delete(this.getInventoryUrl(inventoryId))
			.map(res => res.json());
	}
    
    private getInventoryUrl(inventoryId){
		return this._url + "/" + inventoryId;
	}
}