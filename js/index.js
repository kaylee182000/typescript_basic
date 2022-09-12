//tat ca cac cu phap es6 eu su dung duoc tren typescript
//kieu du lieu cua bien
/*
    primitive value: number, string, boolean, undefine, null
    reference value: kieu du lieu tham chieu (prototype,obj)
*/
//primitive
var number = 1;
var hoTen = "khai do";
var valid = true;
var unf = undefined;
var ob = null;
var number1 = 1; //khong nhat thiet khai bao type phia sau
//referencee type
var prod1 = { id: 1, name: "phone 1", price: 1000 };
var sv = {
    maSinhVien: "1",
    tenSinhVien: "khai",
    lopHoc: "12",
};
var svkt = {
    maSinhVien: "1",
    tenSinhVien: "khai",
    lopHoc: "12",
    cmnd: "323311",
};
var result = {
    maSinhVien: "1",
    tenSinhVien: "khai",
    lopHoc: "12",
};
//any type, unknown type: kieu du lieu dac biet co the nhan tat ca kieu du lieu khac
var student = 1;
var ProductClass = /** @class */ (function () {
    function ProductClass() {
        this.id = "";
        this.name = "";
    }
    ProductClass.prototype.showInfo = function () {
        console.log("id", this.id);
        console.log("name", this.name);
    };
    return ProductClass;
}());
var prod5 = new ProductClass();
prod5.id = 1;
prod5.name = "khai";
prod5.showInfo();
//unknow giong any cho nhan tat ca du lieu Tuy nhien khi thuc hien operation thi phai ktra type
var prod7 = prod5;
if (prod7 instanceof ProductClass) {
    prod7.showInfo();
}
if (typeof prod7 === "number") {
    prod7++;
}
