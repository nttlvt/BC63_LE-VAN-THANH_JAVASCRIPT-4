var arrayNumber = [];
function dom(id) {
    return document.getElementById(id);
}
function addArray() {
    var input = dom("input").value * 1;
    arrayNumber.push(input);
    dom("showAdd").innerHTML = "Mảng: " + arrayNumber;
    return arrayNumber;
}
function showResult(result, btn) {
    dom("showResult").innerHTML = btn.innerHTML + " trong mảng: " + result;
}

dom("btnSum").onclick = function () {
    var sum = 0;
    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0) {
            sum = sum + arrayNumber[i];
        }
    }
    showResult(sum, btnSum);
};

dom("btnCount").onclick = function () {
    var count = 0;
    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0) {
            count++;
        }
    }
    showResult(count, btnCount);
};
dom("btnMin").onclick = function () {
    var tamp = arrayNumber[0];
    for (var i = 1; i < arrayNumber.length; i++) {
        if (arrayNumber[i] < tamp) {
            tamp = arrayNumber[i];
        }
    }
    showResult(tamp, btnMin);
};

dom("btnEven").onclick = function () {
    var tampe = -1;
    for (var i = 1; i < arrayNumber.length; i++) {
        if (arrayNumber[i] % 2 == 0) {
            tampe = arrayNumber[i];
        }
    }
    if (tampe == -1) {
        dom("showResult").innerHTML = "Mảng không có số chẵn";
    } else {
        showResult(tampe, btnEven);
    }
};

dom("btnPosition").onclick = function () {
    var number1 = dom("inputN1").value * 1;
    var number2 = dom("inputN2").value * 1;
    var temporary;
    if (number1 < 0 || number2 >= arrayNumber.length || number2 < 0 || number2 >= arrayNumber.length) {
        dom("showResult").innerHTML = "Chỉ số không hợp lệ.";
        return;
    }

    temporary = arrayNumber[number1];
    arrayNumber[number1] = arrayNumber[number2];
    arrayNumber[number2] = temporary;
    for (var i = 1; i < arrayNumber.length; i++) {

    }
};
dom('btnArrange').onclick = function () {
    arrayNumber.sort(function (a, b) {
        return a - b;
    });


    dom("showResult").innerHTML = "Mảng sau sắp xếp: " + arrayNumber;
}

function kiemTraSoNguyenTo(n) {
    if (n < 2) return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
dom('btnPrime').onclick = function () {
    var soNguyenToDauTien = -1;
    for (var i = 0; i < arrayNumber.length; i++) {
        if (kiemTraSoNguyenTo(arrayNumber[i])) {
            soNguyenToDauTien = arrayNumber[i];
            break;
        }
    }
    showResult(soNguyenToDauTien, btnPrime)
}

function addArrayFloat() {
    var input = dom("inputFloat").value * 1;
    arrayNumber.push(input);
    dom("showFloat").innerHTML = "Mảng: " + arrayNumber;
    return arrayNumber;
}

dom('btnFloat').onclick = function () {
    var soNguyen = 0;
    for (var i = 0; i < arrayNumber.length; i++) {
        if (Number.isInteger(arrayNumber[i])) {
            soNguyen++;
        }
    }
    dom("showResultFloat").innerHTML = "Số nguyên trong mảng: " + soNguyen;
}

dom('btnSS').onclick = function () {
    var demDuong = 0;
    var demAm = 0;

    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0) {
            demDuong++;
        } else if (arrayNumber[i] < 0) {
            demAm++;
        }
    }

    if (demDuong > demAm) {
        dom("showResult").innerHTML = "Số dương nhiều hơn số âm.";
    } else if (demDuong < demAm) {
        dom("showResult").innerHTML = "Số âm nhiều hơn số dương.";
    } else {
        dom("showResult").innerHTML = "Số dương bằng số âm.";
    }
}