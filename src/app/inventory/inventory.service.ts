import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InventoryService {
	private _url = "http://jsonplaceholder.typicode.com/users";

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
		return this._http.post(this._url, JSON.stringify(inventory))
			.map(res => res.json());
	}
    
    updateInventory(inventory){
		return this._http.put(this.getInventoryUrl(inventory.id), JSON.stringify(inventory))
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