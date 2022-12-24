import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-admin-category-form',
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
            <mat-label>Friendly URL</mat-label>
            <input matInput placeholder="Enter Product Name" formControlName="slug">
            <div *ngIf="slug?.invalid && (slug?.dirty || slug?.touched)" class="errorMessages">
               <div *ngIf="slug?.errors?.['required']">
                    Slug is required
               </div>
               <div *ngIf="slug?.errors?.['minlength']">
                    The field must have a minimum of 4 characters
               </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Description</mat-label>
            <textarea matInput rows="10" placeholder="Enter product description" formControlName="description"></textarea>
            <div *ngIf="description?.invalid && (description?.dirty || description?.touched)" class="errorMessages">
               <div *ngIf="description?.errors?.['required']">
                    Description is required
               </div>
               <div *ngIf="description?.errors?.['minlength']">
                    Description must have a minimum of 4 characters
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
export class AdminCategoryFormComponent implements OnInit {

    @Input() parentForm!: FormGroup;

    constructor() { }


    ngOnInit(): void {
    }

    get name() {
        return this.parentForm.get("name");
    }

    get description() {
        return this.parentForm.get("description");
    }

    get slug() {
        return this.parentForm.get("slug");
    }

}