var danhSach = [
    {
        maSo: 121,
        hoTen: 'Tiến',
        namSinh: 2001,
        diem: 8
    },
    {
        maSo: 565,
        hoTen: "Văn",
        namSinh: 1999,
        diem: 10
    },
    {
        maSo: 333,
        hoTen: 'Mai',
        namSinh: 2002,
        diem: 10
    },
    {
        maSo: 678,
        hoTen: 'Nguyễn Văn A',
        namSinh: 909,
        diem: 6
    },
    {
        maSo: 099,
        hoTen: 'Ducky Momo',
        namSinh: 2901,
        diem: 7
    },
    {
        maSo: 341,
        hoTen: 'Chemse',
        namSinh: 2011,
        diem: 1
    }
]

function addHV() {
    var maSo = document.getElementById("maSo").value;
    var hoTen = document.getElementById("hoTen").value;
    var namSinh = document.getElementById("namSinh").value;
    var diem = document.getElementById("diem").value;

    var objHV = {
        maSo: maSo,
        hoTen: hoTen,
        namSinh: namSinh,
        diem: diem
    }

    // console.log(objHV);
    danhSach.push(objHV);
    inNhap(objHV);
    // console.log(danhSach.length);
}

    
function inNhap(obj) {
    var tbody = document.getElementById("tbody");
    var row = tbody.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = obj.maSo;
    cell2.innerHTML = obj.hoTen;
    cell3.innerHTML = obj.namSinh;
    cell4.innerHTML = obj.diem;
}

function nhapDanhSach() {
    for(var i = 0; i< danhSach.length; i++) {
        inNhap(danhSach[i]);
    }
}

nhapDanhSach();

function thongKe() {
    // var table2 = document.getElementById("table").value;
    var A = 0;
    var B = 0;
    var C = 0;
    var D = 0;
    for (var i = 0; i < danhSach.length; i++) {
        if (danhSach[i].diem >= 8) {
            A++;
        }
        else if (danhSach[i].diem >= 6.5) {
            B++;
        }
        else if (danhSach[i].diem >= 5) {
            C++;
        }
        else {
            D++;
        }
    }
    document.getElementById("diemA").innerHTML = A;
    document.getElementById("diemB").innerHTML = B;
    document.getElementById("diemC").innerHTML = C;
    document.getElementById("diemD").innerHTML = D;
    // console.log("hi");

}

function searchDiem() {
    var text = "<thead><tr><th>Mã số</th><th>Họ tên</th><th>Năm sinh</th><th>Điểm</th></tr></thead>"
    var mau = text;
    var diem = document.getElementById("searchDiem").value;
    for (var i = 0; i < danhSach.length; i++) {
        if (diem == danhSach[i].diem) {
            var obj = danhSach[i];
            // console.log(obj);
            text += "<tr><td>" + obj.maSo + "</td><td>" + obj.hoTen + "</td><td>" + obj.namSinh + "</td><td>" + obj.diem + "</td></tr>";

        }   
    }
    if (mau == text) {
        text += "<td></td><td>Không tìm thấy!!!</td>";
    }

    document.getElementById("bodySearch").innerHTML = text;
    console.log("Hi");
}



var btn = document.getElementById("btn-searchDiem");
btn.addEventListener("click", searchDiem);

function searchTen() {
    var text = "<thead><tr><th>Mã số</th><th>Họ tên</th><th>Năm sinh</th><th>Điểm</th></tr></thead>"
    var ten = document.getElementById("searchTen").value;
    var mau = text;
    for (var i = 0; i < danhSach.length; i++) {
        if (ten == danhSach[i].hoTen) {
            var obj = danhSach[i];
            // console.log(obj);
            text += "<tr><td>" + obj.maSo + "</td><td>" + obj.hoTen + "</td><td>" + obj.namSinh + "</td><td>" + obj.diem + "</td></tr>";
        }
    } 
    if (text == mau) {
            text += "<td></td><td>Không tìm thấy!!!</td>";
        }
    document.getElementById("bodySearch").innerHTML = text;
    console.log("hi");
}

var btn2 = document.getElementById("btn-searchTen");

btn2.addEventListener("click", searchTen);

function xepTheoDiem() {
    for( var i= 0; i<danhSach.length; i++) {
        if(danhSach[i].diem > danhSach[i-1].diem) {
            var tam = danhSach[i];
            danhSach[i] = danhSach[i-1];
            danhSach[i-1] = tam;
        }
    }
}