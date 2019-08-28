import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatBadgeModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatTableModule,
    MatCheckboxModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatBadgeModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatTableModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTooltipModule
  ]
})
export class SharedModule { }
