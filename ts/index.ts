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

//type: tao ra mot kieu du lieu cho bien
type Product = {
  id: number;
  price: number;
  name: string;
  //desc ?: string optional property
};

//interface: dung de dinh dang kieu du lieu cho bien tuong tu type nhungw nhieeu tinh nang hon

interface SinhVien {
  maSinhVien: string;
  tenSinhVien: string;
  lopHoc: string;
}

//Merge: cac interface trung ten thi tu dong merge lai khi bien dich sang js
interface SinhVien {
  tuoi?: number;
}

//Ke thua(extend) : Interface co kha nang ke thua tu interface khac
interface SinhVienKeToan extends SinhVien {
  cmnd: string;
}

let sv: SinhVien = {
  maSinhVien: "1",
  tenSinhVien: "khai",
  lopHoc: "12",
};

let svkt: SinhVienKeToan = {
  maSinhVien: "1",
  tenSinhVien: "khai",
  lopHoc: "12",
  cmnd: "323311",
};

//Gia su server tra ve  1 trong cac kieu du lieu : SinhVien | unf | null
//union type
type ResultType = SinhVien | undefined | null | string;
let result: ResultType = {
  maSinhVien: "1",
  tenSinhVien: "khai",
  lopHoc: "12",
};

//any type, unknown type: kieu du lieu dac biet co the nhan tat ca kieu du lieu khac
let student: any = 1;

class ProductClass {
  id: number | string = "";
  name: string = "";
  constructor() {}
  showInfo() {
    console.log("id", this.id);
    console.log("name", this.name);
  }
}

let prod5: ProductClass = new ProductClass();
prod5.id = 1;
prod5.name = "khai";
prod5.showInfo();

//unknow giong any cho nhan tat ca du lieu Tuy nhien khi thuc hien operation thi phai ktra type

let prod7: unknown = prod5;
if (prod7 instanceof ProductClass) {
  prod7.showInfo();
}
if (typeof prod7 === "number") {
  prod7++;
}
