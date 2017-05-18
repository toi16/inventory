import { Component, OnInit } from '@angular/core';

import { InventoryService }       from './inventory.service';

@Component({
    templateUrl: './inventory.component.html'
})
export class InventoryComponent implements OnInit {
    inventory: any[];
    
    constructor(private _service: InventoryService){
	}

	ngOnInit(){
		this._service.getInventorys()
			.subscribe(inventory => this.inventory = inventory);
	} 
    
    deleteInventory(inventory){
		if (confirm("Are you sure you want to delete " + inventory.description + "?")) {
			var index = this.inventory.indexOf(inventory)
			// Here, with the splice method, we remove 1 object
            // at the given index.
            this.inventory.splice(inventory, 1);

			this._service.deleteInventory(inventory.id)
				.subscribe(null, 
					err => {
						alert("Could not delete the inventory.");
                        // Revert the view back to its original state
                        // by putting the user object at the index
                        // it used to be.
						this.inventory.splice(index, 0, inventory);
					});
		}
	}
}