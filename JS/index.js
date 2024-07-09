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
  for (var i = my_array.length - 1; i >= 0;i --) {
    if (my_array[i] % 2 == 0) {
      lastSoChan = my_array[i];
      break;
    } else {
      lastSoChan = -1;
    }
  }
  //6.đổi chỗ 2 giá trị mảng theo vị trí (cho nhập vào 2 vị trí)

  document.getElementById("showKQ").innerHTML = `
  <p>Tổng các số dương đã nhập là: ${sum}</p>
  <p>số dương trong mảng đã nhập là: ${soDuong}</p>
  <p>số nhỏ nhất trong mảng đã nhập là: ${minValue}</p>
  <p>số dương nhỏ nhất trong mảng đã nhập là: ${minValue2}</p>
  <p>số chẵn cuối cùng trong mảng đã nhập là: ${lastSoChan}</p>`;

  document.getElementById("showKQ").style.display = "block";
}
