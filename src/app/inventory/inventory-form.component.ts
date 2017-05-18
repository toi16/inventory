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
    phoney = ['01803845350','01803845356'];
	constructor(
        fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _inventoryService: InventoryService
    ) {
		this.form = fb.group({
			description: ['', Validators.required],
			group: ['', Validators.required],
			location: []
		});
	}
    
    ngOnInit(){
        var id = this._route.params.subscribe(params => {
            var id = +params["id"];

              this.title = id ? "Edit Inventory" : "New Inventory"; //if there is an id title is edit otherwise new
        
        if (!id)
			return;
            
        this._inventoryService.getInventory(id)
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
        
        if (this.inventory.id) 
            result = this._inventoryService.updateInventory(this.inventory);
        else
            result = this._inventoryService.addInventory(this.inventory)
            
		result.subscribe(x => {
            this.form.markAsPristine();
            this._router.navigate(['inventory']);
        });
	}
}