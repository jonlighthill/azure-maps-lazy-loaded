import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { AzureMapsModule } from 'ng-azure-maps';
import { AuthenticationType } from 'azure-maps-control';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: "", component: MapComponent}];

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AzureMapsModule.forRoot({
      authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: "",
      },
    }),
  ]
})
export class MapModule { }
