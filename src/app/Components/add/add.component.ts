import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatCardModule, MatIconModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent{

  // form

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      item_type: ['', Validators.required],
      specialId: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(10)]],
      imgUrl: [''],
      price: ['₹ ', [Validators.required]],
      review: ['★★★★☆ (4)', [Validators.required]]
    });
  }


  // drag and drop

  onFileSelect(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.form.patchValue({ imgUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.form.patchValue({ imgUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }


  // post api

  http = inject(HttpClient);

  addItem(){
    if(this.form.valid){
      const itemObj = {
        itemType: this.form.get('item_type')?.value,
        specialId: this.form.get('specialId')?.value,
        itemName: this.form.get('name')?.value,
        imgUrl: this.form.get('imgUrl')?.value,
        price: this.form.get('price')?.value.replace('₹ ', ''),
        star: this.form.get('review')?.value
    }

    this.http.post("http://localhost:8001/item/create", itemObj).subscribe((res : any) => {
      const addedDetails = `
      Item Type: ${itemObj.itemType}
      Special ID: ${itemObj.specialId}
      Name: ${itemObj.itemName}
      Image URL: ${itemObj.imgUrl}
      Price: ₹${itemObj.price}
      Review Stars: ${itemObj.star}
  `;
  alert("Item successfully added with the following details:\n${addedDetails}");
      this.form.reset();
      this.get(res);
    })
    }
  }

  products : any[] = [];

  get(product : any){
    this.products = product;
  }
}