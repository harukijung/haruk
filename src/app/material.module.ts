import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatButtonModule, 
         MatInputModule,MatMenuModule,
         MatSidenavModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule
  ],
  exports: [MatTableModule,MatButtonModule,
    MatInputModule,MatMenuModule,MatSidenavModule,
    MatTabsModule],
  declarations:[]
})
export class MaterialModule { }
