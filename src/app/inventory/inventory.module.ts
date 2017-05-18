import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, 
         ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http';

import { Inventory }                from './inventory';
import { InventoryFormComponent }   from './inventory-form.component';
import { InventoryComponent }      from './inventory.component';
import { InventoryService }         from './inventory.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        InventoryFormComponent, 
        InventoryComponent
    ],
    exports: [
        InventoryFormComponent, 
        InventoryComponent
    ],
    providers: [
        InventoryService,
        PreventUnsavedChangesGuard
    ]
})
export class InventoryModule { 
}