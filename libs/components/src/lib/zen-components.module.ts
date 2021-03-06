import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ZenConfirmComponent } from './zen-confirm/zen-confirm.component';
import { ZenErrorsComponent } from './zen-errors/zen-errors.component';
import { ZenLoadingComponent } from './zen-loading/zen-loading.component';
import { ZenSnackbarErrorService } from './zen-snackbar-error/zen-snackbar-error.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  declarations: [ZenConfirmComponent, ZenErrorsComponent, ZenLoadingComponent],
  exports: [ZenConfirmComponent, ZenErrorsComponent, ZenLoadingComponent],
  providers: [ZenSnackbarErrorService],
})
export class ZenComponentsModule {}
