// BAI TAP 1 

document.getElementById('btnTinhTienLuong').onclick = function () {
    var luong1Ngay = +document.getElementById('wagePerDay').value;
    var soNgayLam = +document.getElementById('workingDay').value;

    var totalWage;
    totalWage = luong1Ngay * soNgayLam
    console.log(totalWage)

    document.getElementById('ketQuaTienLuong').innerHTML = 'Tiền lương của bạn là ' + totalWage;

}


// BAI TAP 2

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
document.getElementById('btnQuyDoiTien').onclick = function () {
    var USDcoins = +document.getElementById('soTienUSD').value;
    var VNDong;
    VNDong = USDcoins * 23500;

    document.getElementById('ketQuaQuyDoi').innerHTML = new Intl.NumberFormat('vn-VN').format(VNDong);
}


// BAI TAP 4 

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
document.getElementById('btnTongKyso').onclick = function () {
    var mainNum = +document.getElementById('so2ChuSo').value;
    var hangChuc = 0;
    var hangDonVi = 0;
var totalNumber ;
    hangChuc = Math.floor(mainNum / 10);
    hangDonVi = Math.floor(mainNum % 10);
    totalNumber = hangChuc + hangDonVi;

    document.getElementById('ketQuaTongKySo').innerHTML = 'Tổng ký số là : ' + totalNumber;
}

