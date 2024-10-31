import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { brandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.css']
})
export class BrandFormComponent implements OnInit {

  brandForm!: FormGroup;
  isSubmitted =false;
  brandId!: number;


  constructor(private fb : FormBuilder, 
    private brandService:brandService,
    private toastrService: ToastrService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.brandForm = this.fb.group({
      name: ['']
    });

    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      this.brandId = parseInt(paramMap.get('id')!);
      this.brandService.getBrandById(this.brandId).subscribe(brand =>{
        this.brandForm.patchValue(brand);
      });
    });
  }

  saveBrand(){
    console.log(this.brandForm.value);
    this.brandService.saveBrand(this.brandForm.value).subscribe(res=>{
      console.log("Brand Response");
      console.log(res);
      this.isSubmitted =true;
      this.toastrService.success('Brand create successfully');

    }, err=>{
      console.log("Error Block")
      console.error(err);
    })
  }

}
