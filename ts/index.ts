//tat ca cac cu phap es6 eu su dung duoc tren typescript

//kieu du lieu cua bien
/*
    primitive value: number, string, boolean, undefine, null
    reference value: kieu du lieu tham chieu (prototype,obj)
*/

//primitive
let number: number = 1;
let hoTen: string = "khai do";
let valid: boolean = true;
let unf: undefined = undefined;
let ob: null = null;

let number1 = 1; //khong nhat thiet khai bao type phia sau

//referencee type
let prod1: Product = { id: 1, name: "phone 1", price: 1000 };

type Product = {
  id: number;
  price: number;
  name: string;
};
