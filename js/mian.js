// BAI TAP 1 
/**
 * INPUT:
 * + nhập lương 1 ngày : DOM tới wagePerDay = luong1Ngay
 * + nhập số ngày làm : DOM tới workingDay = soNgayLam
 * 
 * PROCESS:
 * tạo biến Tổng lương: totalWage 
 * công thức:
 * totalWage = luong1Ngay + soNgayLam
 * 
 * OUTPUT:
 * 
 * DOM tới ketQuaTienLuong
 * 
 */
document.getElementById('btnTinhTienLuong').onclick = function () {
    var luong1Ngay = +document.getElementById('wagePerDay').value;
    var soNgayLam = +document.getElementById('workingDay').value;

    var totalWage;
    totalWage = luong1Ngay * soNgayLam
    console.log(totalWage)

    document.getElementById('ketQuaTienLuong').innerHTML = 'Tiền lương của bạn là ' + totalWage;

}


// BAI TAP 2
/**
 * INPUT:
 * + nhập số thứ 1 : DOM tới soThuNhat = num1
 * + nhập số thứ 2 : DOM tới soThuHai = num2
 * + nhập số thứ 3 : DOM tới soThuBa = num3
 * + nhập số thứ 4 : DOM tới soThuTu = num4
 * + nhập số thứ 5 : DOM tới soThuNam = num5
 * 
 * 
 * PROCESS:
 * tạo biến GTTB = (num1 + num2 + num3 + num4 + num5) / 5
 * 
 * 
 * 
 * OUTPUT:
 *  DOM tới ketQuaGTTB
 */
document.getElementById('btnGTTB').onclick = function () {
    var num1 = +document.getElementById('soThuNhat').value;
    var num2 = +document.getElementById('soThuHai').value;
    var num3 = +document.getElementById('soThuBa').value;
    var num4 = +document.getElementById('soThuTu').value;
    var num5 = +document.getElementById('soThuNam').value;

    var GTTB;
    GTTB = (num1 + num2 + num3 + num4 + num5) / 5;

    document.getElementById('ketQuaGTTB').innerHTML = 'Giá trị trung bình bằng : ' + GTTB;
}

// BÀI TẬP 3 
/**
 * INPUT:
 * Nhập số tiền USD : DOM tới soTienUSD = USDcoins
 * 
 * 
 * PROCESS:
 * tạo biến VNDong
 * 
 * 1 USD = 23500
 * =>
 * 
 * VNDong = USDcoins * 23500;
 * 
 * OUTPUT:
 *  DOM tới ketQuaQuyDoi
 */
document.getElementById('btnQuyDoiTien').onclick = function () {
    var USDcoins = +document.getElementById('soTienUSD').value;
    var VNDong;
    VNDong = USDcoins * 23500;

    document.getElementById('ketQuaQuyDoi').innerHTML = new Intl.NumberFormat('vn-VN').format(VNDong);
}


// BAI TAP 4 
/**
 * INPUT:
 * 
 * + nhập chiều dài  : DOM tới chieuDai = length
 * + nhập chiều rộng : DOM tới chieuRong = width
 * 
 * PROCESS:
 * tạo biến dienTich = length * width
 * tạo biến chuVi = (length + width) * 2
 * 
 * OUTPUT:
 * DOM tới ketQuaChuviDienTich
 */

document.getElementById('btnDientichChuvi').onclick = function () {
    var length = +document.getElementById('chieuDai').value;
    var width = +document.getElementById('chieuRong').value;

    var dienTich;
    var chuVi;

    dienTich = length * width;
    chuVi = (length + width) * 2;


    document.getElementById('ketQuaChuviDienTich').innerHTML = 'Diện tích là : ' + dienTich + ' ' + 'Chu vi là : ' + chuVi;
}

// BAI TAP 5 
/**
 * INPUT:
 * + nhập số có 2 chữ số : DOM tới so2ChuSo = mainNum
 * 
 * 
 * PROCESS:
 * tạo biến hangChuc = mainNum / 10 ( lấy phần nguyên)
 * tạo biến hangDonVi = mainNum % 10 ( chia lấy dư và lấy phần nguyên)
 * 
 * 
 * OUTPUT:
 *  DOM tới ketQuaTongKySo
 */
document.getElementById('btnTongKyso').onclick = function () {
    var mainNum = +document.getElementById('so2ChuSo').value;
    var hangChuc = 0;
    var hangDonVi = 0;
    var totalNumber;
    hangChuc = Math.floor(mainNum / 10);
    hangDonVi = Math.floor(mainNum % 10);
    totalNumber = hangChuc + hangDonVi;

    document.getElementById('ketQuaTongKySo').innerHTML = 'Tổng ký số là : ' + totalNumber;
}

