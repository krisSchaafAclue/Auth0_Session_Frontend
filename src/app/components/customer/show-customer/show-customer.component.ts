import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { NotificationService } from 'src/app/services/notification.service';
import { DeleteCustomerDialogComponent } from './delete-customer-dialog/delete-customer-dialog.component';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.scss']
})
export class ShowCustomerComponent implements OnInit{
  customer!: Customer;
  showCustomerForm!: FormGroup;
  contentLoaded = false;

  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService, private notificationService: NotificationService, public dialog: MatDialog) {}

  ngOnInit(): void {
    const customerId = this.route.snapshot.queryParamMap.get('id');

    this.customerService.getCustomerById(customerId!).subscribe({
      next: (value) => {
        this.customer = value.data.data;
        this.contentLoaded = true;

        this.showCustomerForm = new FormGroup({
          salutationFormControl: new FormControl(this.customer.salutation),
          firstnameFormControl: new FormControl(this.customer.firstname),
          lastnameFormControl: new FormControl(this.customer.lastname),
          emailFormControl: new FormControl(this.customer.email, [Validators.email]),
          streetFormControl: new FormControl(this.customer.street),
          housingNumberFormControl: new FormControl(this.customer.housingNumber),
          postalCodeFormControl: new FormControl(this.customer.postalCode),
          cityFormControl: new FormControl(this.customer.city),
          otherFormControl: new FormControl(this.customer.additionalInformation),
        });
      },
      error: () => {
        this.notificationService.notifyError();
      }
    })
  }

  get salutationFormControl() {
    return this.showCustomerForm.get('salutationFormControl') as FormControl;
  }

  get firstnameFormControl() {
    return this.showCustomerForm.get('firstnameFormControl') as FormControl;
  }

  get lastnameFormControl() {
    return this.showCustomerForm.get('lastnameFormControl') as FormControl;
  }

  get emailFormControl() {
    return this.showCustomerForm.get('emailFormControl') as FormControl;
  }

  get phonePrivateFormControl() {
    return this.showCustomerForm.get('phonePrivateFormControl') as FormControl;
  }

  get phoneBusinessFormControl() {
    return this.showCustomerForm.get('phoneBusinessFormControl') as FormControl;
  }

  get mobileFormControl() {
    return this.showCustomerForm.get('mobileFormControl') as FormControl;
  }

  get faxFormControl() {
    return this.showCustomerForm.get('faxFormControl') as FormControl;
  }

  get streetFormControl() {
    return this.showCustomerForm.get('streetFormControl') as FormControl;
  }

  get housingNumberFormControl() {
    return this.showCustomerForm.get('housingNumberFormControl') as FormControl;
  }

  get postalCodeFormControl() {
    return this.showCustomerForm.get('postalCodeFormControl') as FormControl;
  }

  get cityFormControl() {
    return this.showCustomerForm.get('cityFormControl') as FormControl;
  }

  get bankNumberFormControl() {
    return this.showCustomerForm.get('bankNumberFormControl') as FormControl;
  }

  get otherFormControl() {
    return this.showCustomerForm.get('otherFormControl') as FormControl;
  }

  onChangeCustomerFormHandler(): void {
    this.customerService.editCustomerById(this.buildCustomer()).subscribe({
      next: () => {
        this.notificationService.notify('Die Änderungen wurden erfolgreich übernommen.');
        this.router.navigateByUrl('/customers');
      },
      error: () => {
        this.notificationService.notifyError();
      }
    });
  }

  onDeleteCustomer(): void {
    this.dialog.open(DeleteCustomerDialogComponent, {
      data: {
        customerId: this.customer.id
      }
    });
  }

  buildCustomer(): Customer {
    return {
      id: this.customer.id,
      salutation: this.salutationFormControl.value,
      firstname: this.firstnameFormControl.value,
      lastname: this.lastnameFormControl.value,
      email: this.emailFormControl.value,
      street: this.streetFormControl.value,
      housingNumber: this.housingNumberFormControl.value,
      postalCode: this.postalCodeFormControl.value,
      city: this.cityFormControl.value,
      additionalInformation: this.otherFormControl.value,
    }
  }
}
