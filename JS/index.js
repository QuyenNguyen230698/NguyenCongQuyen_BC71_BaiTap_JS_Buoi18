var my_array = [];

function doSomeThing() {
  var numberOne = document.getElementById("inputOne").value * 1;
  var numberTwo = document.getElementById("inputTwo").value * 1;
  var numberThree = document.getElementById("inputThree").value * 1;

  my_array.push(numberOne);
  my_array.push(numberTwo);
  my_array.push(numberThree);
  console.log("🚀 ~ my_array:", my_array);

  // 1.Tổng các số dương trong mảng my_array
  var sum = 0;
  for (let lay of my_array) {
    if (lay > 0) {
      sum += lay;
    }
  }
  // 2.Đếm số dương trong mảng my_array
  var soDuong = 0;
  for (let num of my_array) {
    if (num > 0) {
      soDuong++;
    }
  }
  //3.Tìm số nhỏ nhất trong mảng my_array
  var minValue = my_array[0];
  for (let i = 1; i < my_array.length; i++) {
    if (my_array[i] < minValue) {
      minValue = my_array[i];
    }
  }
  //4.Tìm số dương nhỏ nhất trong mảng
  var minValue2 = Infinity;
  for (let out of my_array) {
    if (out > 0 && out < minValue2) {
      minValue2 = out;
    }
  }
  //5 Tìm số chẵn cuối cùng trong mảng (nếu k có trả về -1)
  var lastSoChan = 0;
  for (var i = my_array.length - 1; i >= 0; i--) {
    if (my_array[i] % 2 == 0) {
      lastSoChan = my_array[i];
      break;
    } else {
      lastSoChan = -1;
    }
  }

  //8.Tìm số nguyên tố đầu tiên trong mảng
  var soNguyenToDauTien = null;
  for (let run of my_array){
    if (laSoNguyenTo(run)) {
        soNguyenToDauTien = run;
        break;
    } else {
        soNguyenToDauTien = -1;
    }
  }
  document.getElementById("showKQ2").style.display = "block";
  document.getElementById("showKQ2").innerHTML = `
  <p>8.Số nguyên tố đầu tiên trong mảng là: ${soNguyenToDauTien}</p>`;
  //9. Nhập thêm số thực vào mảng, tìm trong mảng có bao nhiêu số nguyên ?
var countInterger = 0;
for (let check of my_array){
    if (Number.isInteger(check)){
        countInterger++;
    }
}
//10. so sánh số dương và số âm xem số nào nhiều hơn trong mảng
var countDuong = 0;
var countAm = 0;
for (let num of my_array){
    if (num > 0){
        countDuong++;
    } else {
        countAm++;
    }   
}
var bt10 = '';
if (countDuong > countAm){
    bt10 = 'Số dương nhiều hơn số âm';
    } else {
    bt10 = 'Số âm nhiều hơn số dương';
} 

  document.getElementById("showKQ").innerHTML = `
  <p>1.Tổng các số dương đã nhập là: ${sum}</p>
  <p>2.số dương trong mảng đã nhập là: ${soDuong}</p>
  <p>3.số nhỏ nhất trong mảng đã nhập là: ${minValue}</p>
  <p>4.số dương nhỏ nhất trong mảng đã nhập là: ${minValue2}</p>
  <p>5.số chẵn cuối cùng trong mảng đã nhập là: ${lastSoChan}</p>
  <p>9.trong mảng có: ${countInterger} số nguyên</p>
  <p>10.trong mảng có: ${bt10}</p>`;

  document.getElementById("showKQ").style.display = "block";
  document.getElementById("showArray").style.display = "block";
  document.getElementById("showArray").innerHTML = `
  <p>Chọn vị trí bạn muốn đổi thứ tự: ${my_array}</p>`;
}
//8. Hàm kiểm tra số nguyên tố
function laSoNguyenTo(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//6.đổi chỗ 2 giá trị mảng theo vị trí (cho nhập vào 2 vị trí)
function changePosition() {
  var viTri1 = document.getElementById("changeOne").value * 1;
  var viTri2 = document.getElementById("changeTwo").value * 1;

  if (
    viTri1 >= 0 &&
    viTri1 < my_array.length &&
    viTri2 >= 0 &&
    viTri2 < my_array.length &&
    viTri1 != viTri2
  ) {
    var temp = my_array[viTri1];
    my_array[viTri1] = my_array[viTri2];
    my_array[viTri2] = temp;
    document.getElementById("showArray").textContent =
      "6.Mảng sau khi đổi chỗ: " + my_array.join(", ");
  } else {
    alert("Vui lòng nhập vào vị trí hợp lệ và khác nhau.");
  }
}

//7.Sắp xếp mảng theo thứ tự tăng dần
function sapXepTang(){
    my_array.sort(function(a,b){
        return a-b;
    })
    document.getElementById("showMang").style.display = "block";
    document.getElementById("showMang").innerHTML = `
  <p>7.Đã sắp xếp mảng theo thứ tự tăng dần: ${my_array}</p>`;
}

