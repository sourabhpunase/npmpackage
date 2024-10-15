import { convertCurrency } from "currency-convertor";

convertCurrency("USD","INR",5).then(res=>console.log(res))