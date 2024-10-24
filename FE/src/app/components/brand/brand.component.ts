import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { brandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brandForm!: FormGroup;

  constructor(private fb : FormBuilder, private brandService:brandService) { }

  ngOnInit(): void {
    this.brandForm = this.fb.group({
      name: ['']
    });
  }

  saveBrand(){
    console.log(this.brandForm.value);
    this.brandService.saveBrand(this.brandForm.value).subscribe(res=>{
      console.log("Brand Response");
      console.log(res);
    }, err=>{
      console.log("Error Block")
      console.error(err);
    })
  }

}
