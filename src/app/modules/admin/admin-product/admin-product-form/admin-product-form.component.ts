import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { reduce } from "rxjs";
import { AdminCategoryNameDto } from "../../common/dto/adminCategoryNameDto";
import { FormCategoryService } from "./form-category.service";

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

        <mat-form-field appearance="fill">
            <mat-label>Full Description</mat-label>
            <textarea matInput rows="30" placeholder="Enter full product description" formControlName="fullDescription"></textarea>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Category</mat-label>
            <mat-select formControlName="categoryId">
                <mat-option *ngFor="let element of categories" [value]="element.id">
                {{element.name}}
                </mat-option>
            </mat-select>
            <div *ngIf="categoryId?.invalid && (categoryId?.dirty || categoryId?.touched)" class="errorMessages">
               <div *ngIf="categoryId?.errors?.['required']">
                    Category is required
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
    categories: Array<AdminCategoryNameDto> = [];

    constructor(private formCategoryService: FormCategoryService) { }

    ngOnInit(): void {
        this.getCategories();
    }

    getCategories() {
        this.formCategoryService.getCategories()
            .subscribe(categories => this.categories = categories);
    }

    get name() {
        return this.parentForm.get("name");
    }

    get description() {
        return this.parentForm.get("description");
    }

    get categoryId() {
        return this.parentForm.get("categoryId");
    }

    get price() {
        return this.parentForm.get("price");
    }

    get currency() {
        return this.parentForm.get("currency");
    }

    get slug() {
        return this.parentForm.get("slug");
    }

    get fullDescription() {
        return this.parentForm.get("fullDescription");
    }


}