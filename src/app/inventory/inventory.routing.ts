import { RouterModule  }    		  from '@angular/router';

import { InventoryFormComponent } 		  from './inventory-form.component';
import { InventoryComponent }    		  from './inventory.component';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

export const inventoryRouting = RouterModule.forChild([
	{ 
		path: 'inventory/:_id', 
		component: InventoryFormComponent,
		canDeactivate: [ PreventUnsavedChangesGuard ]  
	},
	{ 
		path: 'inventory/new', 
		component: InventoryFormComponent,
		canDeactivate: [ PreventUnsavedChangesGuard ]  
	},
    { path: 'inventory', component: InventoryComponent },
]);