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
    price: [0]
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
      price: this.jobForm.value.price,
      idPerson: +this.utilsService.getParamUrl(2)
    }

    if (
      job.title === '' ||
      job.price === 0
    ) {
      this.openSnackBar('Todos os campos obrigatórios devem ser preenchidos.')

    } else {
      this.jobService.saveJob(job)
        .subscribe({
          next: (n) => { this.createSuccess() },
          error: (r) => { this.openSnackBar('Erro ao salvar serviço.') }
        })
    }
  }

  cancel(){
    this.dialogRef.close();
  }

  createSuccess(){
    this.openSnackBar('Serviço criado com sucesso')
    this.cancel()
  }

  openSnackBar(message: string){
    this._snackBar.open(message, 'OK', { duration: 5000 })
  }

}
