import { Component, Inject } from '@angular/core';
import { MatDialogRef , MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA  } from '@angular/material/dialog';


@Component({
  selector: 'app-yes-no',
  standalone: true,
  imports: [MatDialogContent , MatDialogActions , MatDialogClose ],
  templateUrl: './yes-no.component.html',
  styleUrl: './yes-no.component.css'
})
export class YesNoComponent {

  constructor(
    public dialogRef: MatDialogRef<YesNoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

}
