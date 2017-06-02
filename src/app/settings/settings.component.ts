import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { Router, ActivatedRoute }                from '@angular/router';

import { SettingsService }                           from './settings.service';
import { Setting }                                  from './settings';

@Component({
    templateUrl: './settings.component.html',
	
})
export class SettingComponent implements OnInit {
    form: FormGroup;
    title: string;
    setting = new Setting(); //blank setting object stops null error in form load
    locations = ['Kitchen','Bathroom','Bedroom'];
	constructor(
        fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _service: SettingsService
    ) {
		this.form = fb.group({
            quantity: ['', Validators.required],
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
            
        this._service.getSetting(_id)
			.subscribe(
                setting => this.setting = setting,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                });
                
        });
            
	}

save(){
        var result;
         if (this.setting._id) 
            result = this._service.updateSetting(this.setting);
            
        else
            result = this._service.addSetting(this.setting)

		result.subscribe(x => {
            this.form.markAsPristine();
            this._router.navigate(['inventory']);
        });
        
	}
    
}
