import { Component, OnInit }                     from '@angular/core';
import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { Router, ActivatedRoute }                from '@angular/router';

import { InventoryService }                           from './inventory.service';
import { Inventory }                                  from './inventory';

@Component({
    templateUrl: './inventory-form.component.html'
})
export class InventoryFormComponent implements OnInit {
	form: FormGroup;
    title: string;
    inventory = new Inventory(); //blank inventory object stops null error in form load
    locations = ['Kitchen','Bathroom','Bedroom'];
	constructor(
        fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _inventoryService: InventoryService
    ) {
		this.form = fb.group({
			description: ['', Validators.required],
			group: ['', Validators.required],
			location: ['', Validators.required]
		});
	}
    
    ngOnInit(){
        var _id = this._route.params.subscribe(params => {
            var _id = params._id;

            if (params._id == "new") //if new inventory is selected set _id to null.
            _id = null;
      
              this.title = _id ? "Edit Inventory" : "New Inventory"; //if there is an id title is edit otherwise new
        
        if (!_id)
			return;
            
        this._inventoryService.getInventory(_id)
			.subscribe(
                inventory => this.inventory = inventory,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                });
                
        });
    }
    
    save(){
        var result;
         if (this.inventory._id) 
            result = this._inventoryService.updateInventory(this.inventory);
            
        else
            result = this._inventoryService.addInventory(this.inventory)

		result.subscribe(x => {
            this.form.markAsPristine();
            this._router.navigate(['inventory']);
        });
        
	}
}