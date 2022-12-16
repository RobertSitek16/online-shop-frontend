import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { reduce } from "rxjs";

@Component({
    selector: 'app-admin-product-form',
    template: `
    <div [formGroup]="parentForm" fxLayout="column">
        <mat-form-field appearance="fill">
            <mat-label>Name</mat-label>
            <input matInput placeholder="Enter Product Name" formControlName="name">
            <div *ngIf="name?.invalid && (name?.dirty || name?.touched)" class="errorMessages">
               <div *ngIf="name?.errors?.['required']">
                    Name is required
               </div>
               <div *ngIf="name?.errors?.['minlength']">
                    The field must have a minimum of 4 characters
               </div>
            </div>
        </mat-form-field>
        <mat-form-field appearance="fill">
            <mat-label>Description</mat-label>
            <textarea matInput rows="20" placeholder="Enter product description" formControlName="description"></textarea>
            <div *ngIf="description?.invalid && (description?.dirty || description?.touched)" class="errorMessages">
               <div *ngIf="description?.errors?.['required']">
                    Description is required
               </div>
               <div *ngIf="description?.errors?.['minlength']">
                    Description must have a minimum of 4 characters
               </div>
            </div>
        </mat-form-field>
        <mat-form-field appearance="fill">
            <mat-label>Category</mat-label>
            <input matInput placeholder="Enter category" formControlName="category">
            <div *ngIf="category?.invalid && (category?.dirty || category?.touched)" class="errorMessages">
               <div *ngIf="category?.errors?.['required']">
                    Category is required
               </div>
               <div *ngIf="category?.errors?.['minlength']">
                    Category must have a minimum of 4 characters
               </div>
            </div>
        </mat-form-field>
        <mat-form-field appearance="fill">
            <mat-label>Price</mat-label>
            <input matInput placeholder="Enter price" formControlName="price">
            <div *ngIf="price?.invalid && (price?.dirty || price?.touched)" class="errorMessages">
               <div *ngIf="price?.errors?.['required']">
                    Price is required
               </div>
               <div *ngIf="price?.errors?.['min']">
                    Price must be greater than zero
               </div>
            </div>
        </mat-form-field>
        <mat-form-field appearance="fill">
            <mat-label>Currency</mat-label>
            <input matInput placeholder="Enter price" value="PLN" formControlName="currency">
            <div *ngIf="currency?.invalid && (currency?.dirty || currency?.touched)" class="errorMessages">
               <div *ngIf="currency?.errors?.['required']">
                    Currency is required
               </div>
            </div>
        </mat-form-field>
        <div fxLayout="colum" fxFlexAlign="end" fxLayoutGap="10">
            <button mat-flat-button color="primary" [disabled]="!parentForm.valid">Save</button>
        </div>
</div>`,
    styles: [`
        .errorMessages{
            color: red;
        }
    `]
})
export class AdminProductFormComponent implements OnInit {

    @Input() parentForm!: FormGroup;

    ngOnInit(): void {

    }

    get name() {
        return this.parentForm.get("name");
    }

    get description() {
        return this.parentForm.get("description");
    }

    get category() {
        return this.parentForm.get("category");
    }

    get price() {
        return this.parentForm.get("price");
    }
    
    get currency() {
        return this.parentForm.get("currency");
    }


}