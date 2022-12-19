import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobService } from './../../../services/job.service';
import { UtilsService } from './../../../services/utils.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  jobForm = this.formBuilder.group({
    title: [''],
    price: ['']
  });

  constructor(
    public dialogRef: MatDialogRef<AddJobComponent>,
    private formBuilder: NonNullableFormBuilder,
    private jobService: JobService,
    private utilsService: UtilsService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  createJob(){
    var job = {
      title: this.jobForm.value.title,
      price: Number(this.jobForm.value.price),
      idPerson: +this.utilsService.getParamUrl(2)
    }

    this.jobService.saveJob(job)
      .subscribe({
        next: (n) => { this.createSuccess() },
        error: (r) => { this.createError() }
      })
  }

  cancel(){
    this.dialogRef.close();
  }

  createSuccess(){
    this._snackBar.open('Serviço criado com sucesso', 'OK', { duration: 5000 })
    this.cancel()
  }

  createError(){
    this._snackBar.open('Erro ao salvar serviço.', 'OK', { duration: 5000 })
  }

}
