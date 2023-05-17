export interface Customer {
    id: string;
    salutation: string;
    firstname: string;
    lastname: string;
    email: string;
    street: string;
    housingNumber: string;
    postalCode: string;
    city: string;
    additionalInformation: string;
}

export interface CustomerDTO {
    salutation: string;
    firstname: string;
    lastname: string;
    email: string;
    street: string;
    housingNumber: string;
    postalCode: string;
    city: string;
    additionalInformation: string;
}