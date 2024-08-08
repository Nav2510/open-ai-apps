import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { DataGridComponent } from './data-grid.component';
import { DataGridService } from './services/data-grid.service';
import { TagModule } from '../tag/tag.module';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';
import { NameAvatarModule } from '../name-avatar/name-avatar.module';
import { DialogModule } from '../dialog/dialog.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DataGridComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TagModule,
    ProgressBarModule,
    NameAvatarModule,
    MatDialogModule,
    DialogModule,
    FormsModule,
  ],
  exports: [DataGridComponent],
  providers: [DataGridService],
})
export class DataGridModule {}
