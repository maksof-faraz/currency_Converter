export enum CurrencyType {
    Latest = 'latest',
    Historical = 'historical'
  }
  
  export interface Currency {
    amount : number
    base_currency: string;
    currencies: string;
    type: CurrencyType;
    date?: Date | string ;
  }

  export interface CurrencyName {
    value :  string,
    viewValue:  string
  }