//Tất cả các cú pháp es6 đều chạy được trên typescript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Type: Kiểu dữ liệu của biến
/*
    primitive type: number,string,boolean,undefined, null
    reference type: Kiểu dữ liệu tham chiếu (Prototype, object)
*/
var number = 1;
var hoTen = 'Quách Khải';
var valid = true;
var udf = undefined;
var ob = null;
var prod1 = { id: 1, name: 'phone1', price: 1000 };
var sv = { maSinhVien: '1', tenSinhVien: 'Nguyễn Văn A', lopHoc: 'BC30' };
var svKT = { maSinhVien: '1', tenSinhVien: 'Nguyễn Văn A', lopHoc: 'BC30', cmnd: '123' };
var result = { maSinhVien: '1', tenSinhVien: 'Nguyễn Văn A', lopHoc: 'BC30' };
//any type, unkown type : Có thể nhận tất cả kiểu dữ liệu khác
var student = '1';
var ProductClass = /** @class */ (function () {
    function ProductClass() {
        this.id = '';
        this.name = '';
    }
    ProductClass.prototype.showInfo = function () {
        console.log('id', this.id);
        console.log('name', this.name);
    };
    return ProductClass;
}());
var prod5 = new ProductClass();
prod5.id = 1;
prod5.name = 'phone 1';
prod5.showInfo();
// let prod6:any = undefined;
// //operation
// prod6.showInfo();
//unkown giống any cho nhận tất cả kiểu dữ liệu. Tuy nhiên khi thực hiện operation thì phải kiểm tra type
var prod7 = prod5;
if (prod7 instanceof ProductClass) {
    prod7.showInfo();
}
if (typeof prod7 === 'number') {
    prod7++;
}
//type: Array 
var arrNumber = [1, 2, 3, 4];
var string123 = ['1', '2'];
var arrSinhVien = [
    { maSinhVien: '1', tenSinhVien: 'Quách Khải', lopHoc: 'BC30' },
    { maSinhVien: '1', tenSinhVien: 'Quách Khải', lopHoc: 'BC30' },
    { maSinhVien: '1', tenSinhVien: 'Quách Khải', lopHoc: 'BC30' }
];
//type: function 
var tinhTong = function (a, b) {
    return a + b;
};
var sayHello = function (mess) {
    return mess;
};
function main(callback) {
    callback(1, 2);
}
main(tinhTong);
var btn = {
    id: '1',
    innerHTML: 'button1',
    onClick: function (e) {
        alert(btn.id);
    }
};
//nestjs: Framework của node viết = typescript
var ProductList = /** @class */ (function () {
    function ProductList() {
    }
    return ProductList;
}());
var prodList = {
    create: function (ele) {
        throw new Error("Function not implemented.");
    },
    update: function (id, ele) {
        throw new Error("Function not implemented.");
    },
    delete: function (id) {
        throw new Error("Function not implemented.");
    },
    read: function (keyword) {
        throw new Error("Function not implemented.");
    }
};
//Class access modifier (public, private, protected)
/*
    public: Là trong class, đối tượng (instance), class con có thể truy xuất được thuộc tính hoặc phương thức đó;
    private: Chỉ có class đó sử dụng được. (Class con và đối tượng không thẻ truy xuất được thuộc tính và phương thức)
    protected: Class gốc và class con sử dụng được thuộc tính đó. Instance thì không sử dụng được;
*/
var NhanVien = /** @class */ (function () {
    function NhanVien() {
        this.maNhanVien = '';
        this.tenNhanVien = '';
        this.heSoLuong = 1;
        this.luongCoBan = 0;
    }
    NhanVien.prototype.getHeSoLuong = function () {
        return this.heSoLuong;
    };
    NhanVien.prototype.setLuongCoBan = function (luong) {
        this.luongCoBan = luong;
    };
    NhanVien.prototype.tinhLuong = function () {
        return this.heSoLuong * this.luongCoBan;
    };
    return NhanVien;
}());
var NhanVienKeToan = /** @class */ (function (_super) {
    __extends(NhanVienKeToan, _super);
    function NhanVienKeToan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NhanVienKeToan.prototype.showInfo = function () {
    };
    return NhanVienKeToan;
}(NhanVien));
var nv = new NhanVien();
nv.maNhanVien = 1;
nv.tenNhanVien = 'Quách Khải';
// nv.heSoLuong = 5;
nv.setLuongCoBan(1000);
console.log('Lương CB:', nv.tinhLuong());
var nvKT = new NhanVienKeToan();
nvKT.setLuongCoBan(2000);
console.log('Lương CB', nvKT.tinhLuong());
//Generic type: Cho phép truyền type khi sử dụng 1 class hoặc object
var List = /** @class */ (function () {
    function List() {
    }
    List.prototype.insert = function (item) {
        this.result.push(item);
    };
    List.prototype.update = function (id, itemUpdate) {
        var item = this.result.filter(function (it) { return it.id === id; });
        if (item.length > 0) {
            var itemInResult = item[0];
            for (var key in itemInResult) {
                itemInResult[key] = itemUpdate[key];
            }
        }
    };
    List.prototype.delete = function (id) {
        for (var index in this.result) {
            var product = this.result[index];
            if (product.id === id) {
                this.result.splice(Number(index), 1);
            }
        }
    };
    return List;
}());
var productList = new List();
productList.result = [
    { id: 1, name: 'product1', price: 1000 },
    { id: 2, name: 'product2', price: 2000 },
    { id: 3, name: 'product3', price: 3000 },
];
productList.delete(2);
console.log('productList', productList);
var studentList = new List();
studentList.result = [
    { id: 7, name: 'Quách Khải 1', age: 10 },
    { id: 8, name: 'Quách Khải 2', age: 20 },
    { id: 9, name: 'Quách Khải 3', age: 30 },
];
studentList.delete(9);
studentList.update(8, { id: 8, name: 'Quách Khải 5', age: 50 });
console.log('studentList', studentList.result);
//utility type
//ReturnType
var sayHelloCyber = function () {
    return 'Hello';
};
var strinResult = 'string';
var dispatchFunction = function (params) {
    return function (dispatch) {
        var action = {};
        dispatch(action);
    };
};
// let dispatch:DispatchAction = useDispatch();
var STATUS_CODE = {
    ACTIVE: 1,
    INACTIVE: 2
};
var STATUS;
(function (STATUS) {
    STATUS[STATUS["ISACTIVE"] = 1] = "ISACTIVE";
    STATUS[STATUS["INACTIVE"] = 2] = "INACTIVE";
})(STATUS || (STATUS = {}));
// STATUS.ISACTIVE
