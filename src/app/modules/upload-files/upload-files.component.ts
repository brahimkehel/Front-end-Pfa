import { Fichiers } from './../../classes/Fichiers.module';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit {

  public progress: number;
  public message: string;
  fichiers:Fichiers[];
  test:any;
  @Output() public onUploadFinished = new EventEmitter();
 
  constructor(private http: HttpClient) { }
 
  ngOnInit() {
    this.http.get("http://localhost:57759/api/Fichiers").toPromise().then(
      res=>{
      this.fichiers=res as Fichiers[];
      },
      err=>{console.log(err)}
    );
  }
 
  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
 
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
 
    this.http.post('http://localhost:57759/api/Upload/'+localStorage.getItem("id"), formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        };
        this.http.get("http://localhost:57759/api/Fichiers").toPromise().then(
        res=>{
        this.fichiers=res as Fichiers[];
        },
        err=>{console.log(err)}
      );
      });
  }
  
  Telecharger(id:Int16Array)
  {
      document.location.href = 'http://localhost:57759/api/upload/download/'+id;
  }
}
