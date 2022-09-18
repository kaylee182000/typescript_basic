//Tất cả các cú pháp es6 đều chạy được trên typescript

//Type: Kiểu dữ liệu của biến

/*
    primitive type: number,string,boolean,undefined, null 
    reference type: Kiểu dữ liệu tham chiếu (Prototype, object)
*/

let number: number = 1;
let hoTen: string = 'Quách Khải';
let valid: boolean = true;
let udf: undefined = undefined;
let ob: null = null;

//reference type : không new được
//type: Tạo ra 1 kiểu dữ liệu cho biến
type Product = {
    id: number,
    price: number,
    name: string,
    // desc?:string optional property
}


let prod1: Product = { id: 1, name: 'phone1', price: 1000 };
// let prod2:Product = {maSanPham:1,name:'phone1',price:1000};
// type Chuoi = string;
// let hoTen1:Chuoi = 'abc';
//interface: Dùng để định dạng dữ liệu cho biến tương tự type nhưng nhiều tính năng hơn

interface SinhVien {
    maSinhVien: string | number,
    tenSinhVien: string,
    lopHoc: string
}


//Merge: Các interface trung tên thì tự động merge lại khi biên dịch
interface SinhVien {
    tuoi?: number
}
//Kế thừa(extends): Interface có khả năng kế thừa từ interface khác
interface SinhVienKeToan extends SinhVien {
    cmnd: string
}

let sv: SinhVien = { maSinhVien: '1', tenSinhVien: 'Nguyễn Văn A', lopHoc: 'BC30' };
let svKT: SinhVienKeToan = { maSinhVien: '1', tenSinhVien: 'Nguyễn Văn A', lopHoc: 'BC30', cmnd: '123' };
//Giả sử server trả về 1 trong các kiểu dữ liệu sau: SinhVien |undefined | null
//union type 
type ResultType = SinhVien | undefined | string | null;
let result: ResultType = { maSinhVien: '1', tenSinhVien: 'Nguyễn Văn A', lopHoc: 'BC30' };

//any type, unkown type : Có thể nhận tất cả kiểu dữ liệu khác

let student: any = '1';

class ProductClass {
    id: number | string = '';
    name: string = '';
    constructor() {

    }
    showInfo() {
        console.log('id', this.id);
        console.log('name', this.name);
    }
}


let prod5: ProductClass = new ProductClass();
prod5.id = 1;
prod5.name = 'phone 1';
prod5.showInfo();

// let prod6:any = undefined;
// //operation
// prod6.showInfo();
//unkown giống any cho nhận tất cả kiểu dữ liệu. Tuy nhiên khi thực hiện operation thì phải kiểm tra type

let prod7: unknown = prod5;
if (prod7 instanceof ProductClass) {
    prod7.showInfo();
}
if (typeof prod7 === 'number') {
    prod7++;
}

//type: Array 

let arrNumber: number[] = [1, 2, 3, 4];
let string123: string[] = ['1', '2']

let arrSinhVien: SinhVien[] = [
    { maSinhVien: '1', tenSinhVien: 'Quách Khải', lopHoc: 'BC30' },
    { maSinhVien: '1', tenSinhVien: 'Quách Khải', lopHoc: 'BC30' },
    { maSinhVien: '1', tenSinhVien: 'Quách Khải', lopHoc: 'BC30' }
]

//type: function 


let tinhTong = (a: number, b: number): number => {
    return a + b;
}

let sayHello = (mess): string => {
    return mess;
}

type CallBackFunction = (a: number, b: number) => number

function main(callback: CallBackFunction) {
    callback(1, 2);
}

main(tinhTong);

//tuple: mảng hỗn hợp [state,setState]
// let [num,setNumber]:[number,(oldNumber:number)=>number] = [1,function(num){ return num}] 

interface Button {
    id: string,
    innerHTML: string,
    onClick: (event: any) => void
}

let btn: Button = {
    id: '1',
    innerHTML: 'button1',
    onClick: function (e) {
        alert(btn.id);
    }
}

//interface còn được thể hiện như 1 class trừu tượng trong typescript
interface CRUD {
    create: (ele) => void,
    update: (id, ele) => void,
    delete: (id) => void,
    read: (keyword) => any
}
//nestjs: Framework của node viết = typescript
class ProductList implements CRUD {
    create: (ele: any) => {

    };
    update: (id: any, ele: any) => {

    };
    delete: (id: any) => {

    };
    read: (keyword: any) => {

    };
}

let prodList: CRUD = {
    create: function (ele: any): void {
        throw new Error("Function not implemented.");
    },
    update: function (id: any, ele: any): void {
        throw new Error("Function not implemented.");
    },
    delete: function (id: any): void {
        throw new Error("Function not implemented.");
    },
    read: function (keyword: any) {
        throw new Error("Function not implemented.");
    }
}



//Class access modifier (public, private, protected)
/*
    public: Là trong class, đối tượng (instance), class con có thể truy xuất được thuộc tính hoặc phương thức đó;
    private: Chỉ có class đó sử dụng được. (Class con và đối tượng không thẻ truy xuất được thuộc tính và phương thức)
    protected: Class gốc và class con sử dụng được thuộc tính đó. Instance thì không sử dụng được;
*/
class NhanVien {
    maNhanVien: string | number = '';
    tenNhanVien: string = '';
    protected heSoLuong: number = 1;
    private luongCoBan: number = 0;
    constructor() {
    }
    getHeSoLuong() {
        return this.heSoLuong;
    }
    setLuongCoBan(luong: number) {
        this.luongCoBan = luong;
    }
    tinhLuong(): number {
        return this.heSoLuong * this.luongCoBan;
    }
}

class NhanVienKeToan extends NhanVien {
    showInfo() {
    }
}
let nv: NhanVien = new NhanVien();
nv.maNhanVien = 1;
nv.tenNhanVien = 'Quách Khải';
// nv.heSoLuong = 5;
nv.setLuongCoBan(1000);
console.log('Lương CB:', nv.tinhLuong());
let nvKT = new NhanVienKeToan();
nvKT.setLuongCoBan(2000);
console.log('Lương CB', nvKT.tinhLuong());



//Generic type: Cho phép truyền type khi sử dụng 1 class hoặc object

class List<T> {
    result: T[]
    insert(item: T) {
        this.result.push(item);
    }
    update(id: number | string, itemUpdate: T) {
        let item: T[] = this.result.filter((it: any) => it.id === id);
        if (item.length > 0) {
            let itemInResult = item[0];
            for (let key in itemInResult) {
                itemInResult[key] = itemUpdate[key];
            }
        }
    }
    delete(id: number | string) {
        for (let index in this.result) {
            let product:any = this.result[index];
            if (product.id === id) {
                this.result.splice(Number(index), 1);
            }
        }
    }
}

// let arrProduct:Product[] = [
//     {id:1,name:'product1',price:1000},
//     {id:2,name:'product2',price:2000},
//     {id:3,name:'product3',price:3000},
// ]

interface Student {
    id:number,
    name:string,
    age:number
}

let productList: List<Product> = new List<Product>();
productList.result = [
    { id: 1, name: 'product1', price: 1000 },
    { id: 2, name: 'product2', price: 2000 },
    { id: 3, name: 'product3', price: 3000 },
]
productList.delete(2);
console.log('productList',productList);

let studentList:List<Student> = new List<Student>();
studentList.result =  [
    { id: 7, name: 'Quách Khải 1', age: 10 },
    { id: 8, name: 'Quách Khải 2', age: 20 },
    { id: 9, name: 'Quách Khải 3', age: 30 },
]

studentList.delete(9);
studentList.update(8, { id: 8, name: 'Quách Khải 5', age: 50 })

console.log('studentList',studentList.result);

//utility type
//ReturnType


let sayHelloCyber = ():string | number | undefined =>{

    return 'Hello';
}

type StringResultType = ReturnType<typeof sayHelloCyber>;

let strinResult: StringResultType = 'string';


let dispatchFunction = (params) => {

    return (dispatch) => {
        const action = {};
        dispatch(action)
    }
}

type DispatchAction = ReturnType<typeof dispatchFunction>;

// let dispatch:DispatchAction = useDispatch();


const STATUS_CODE = {
    ACTIVE:1,
    INACTIVE: 2
}

enum STATUS {ISACTIVE = 1,INACTIVE = 2}

// STATUS.ISACTIVE
