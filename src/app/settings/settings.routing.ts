import { RouterModule  }    		  from '@angular/router';

import { SettingComponent }    		  from './settings.component';
import { PreventUnsavedChangesGuard } from '../inventory/prevent-unsaved-changes-guard.service';

export const settingRouting = RouterModule.forChild([
	{ 
		path: 'setting/:_id', 
		component: SettingComponent,
		canDeactivate: [ PreventUnsavedChangesGuard ]  
	},
	{ path: 'setting', component: SettingComponent },
]);