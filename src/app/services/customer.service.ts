import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer, CustomerDTO } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = environment.backendBasePath; 
  private customerUrl = "customers";

  private addCustomerUrl = this.baseUrl + this.customerUrl; 
  private getCustomersUrl = this.baseUrl + this.customerUrl; 
  private getCustomerByIdUrl = this.baseUrl + this.customerUrl; 
  private editCustomerByIdUrl = this.baseUrl + this.customerUrl; 
  private deleteCustomerByIdUrl = this.baseUrl + this.customerUrl; 

  constructor(private http: HttpClient) { }

  addCustomer(customer: CustomerDTO): Observable<any> {
    return this.http.post<any>(this.addCustomerUrl, customer);
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.getCustomersUrl);
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.getCustomerByIdUrl}/${id}`);
  }

  editCustomerById(customer: Customer): Observable<any> {
    return this.http.put<Customer>(this.editCustomerByIdUrl, customer);
  }

  deleteCustomerById(id: string): Observable<any> {
    return this.http.delete<any>(`${this.deleteCustomerByIdUrl}/${id}`);
  }
}
