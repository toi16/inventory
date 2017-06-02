import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, 
         ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http';

import { Setting }                from './settings';
import { SettingComponent }      from './settings.component';
import { SettingsService }         from './settings.service';
import { PreventUnsavedChangesGuard } from '../inventory/prevent-unsaved-changes-guard.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        SettingComponent
    ],
    exports: [
        SettingComponent
    ],
    providers: [
        SettingsService,
        PreventUnsavedChangesGuard
    ]
})
export class SettingsModule { 
}