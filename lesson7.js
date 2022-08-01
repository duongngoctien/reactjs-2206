function checkName() {
    var name = document.getElementById("name").value;
    var test = mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
    if (name == "") {
        document.getElementById("spanName").innerHTML = "Không được để trống";
        return false;
    }
    if (!test.test(name)) {
        document.getElementById("spanName").innerHTML = "Nhập đủ họ tên nhé :3";
        return false;
    }
    document.getElementById("spanName").innerHTML = "*";
    return true;

}

function checkPassword() {
    var password = document.getElementById("pass").value;
    var test = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (password == "") {
        document.getElementById("spanPw").innerHTML = "Nhập dùm đi :>";
        console.log("hi");
        return false;
    }
    if (!test.test(password)) {
        document.getElementById("spanPw").innerHTML = "Nhập 8 ký tự, ít nhất 1 số và 1 chữ cái nhé :3";
        return false;
    }
    document.getElementById("spanPw").innerHTML = "*";
    return true;

} function checkPhone() {
    var numPhone = document.getElementById("phone").value;
    var test = /^0\d{9}$/;
    if (numPhone == "") {
        document.getElementById("spanPhone").innerHTML = "Nhập đi ba";
        return false;
    }
    if (!test.test(numPhone)) {
        document.getElementById("spanPhone").innerHTML = "Nhập cho đúng đi ba. SĐT bắt đầu từ 0 và có 10 số nha :> ";
        return false;
    }
    document.getElementById("spanPhone").innerHTML = "*";
    return true;
}

function chekckEmail() {
    var email = document.getElementById("mail").value;
    var test = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (email == "") {
        document.getElementById("spanEmail").innerHTML = "Nhập dô đi mà :<";
        return false;
    }
    if (!test.test(email)) {
        document.getElementById("spanEmail").innerHTML = "Nhập sai định dạng kìa ba";
        return false;
    }
    document.getElementById("spanEmail").innerHTML = "*";
    return true;
}

function checkBirth() {
    var birth = document.getElementById("birth").value;
    var test = /^\d{2}\-\d{2}\-\d{4}$/
    if (birth == "") {
        document.getElementById("spanBirth").innerHTML = "Nhập dzô đi ba :<";
        return false;
    }
    if (!test.test(birth)) {
        document.getElementById("spanBirth").innerHTML = "Nhìn định dạng dd-mm-yyyy mà nhập nha :)";
        return false;
    }
    document.getElementById("spanBirth").innerHTML = "*";
    return true;
}

function checkAdd() {
    var add = document.getElementById("add").value;
    var test = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
    if (add == "") {
        document.getElementById("spanAdd").innerHTML = "Đừng có mà để trống :)";
        return false;
    }
    if (!test.test(add)) {
        document.getElementById("spanAdd").innerHTML = "Nhập cho đúng dùm nha";
        return false;
    }
    document.getElementById("spanAdd").innerHTML = "*";
    return true;
}

function checkBox() {
    var gender1 = document.getElementById("gender1");
    var gender2 = document.getElementById("gender2");
    var dieukhoan = document.getElementById("dieukhoan")
    if (gender1.checked || gender2.checked) {
        if (dieukhoan.checked) {
            console.log("hi");
            return true;
        }
    }
    return false;
}
function check() {
    if (checkName() == true && checkPassword() == true && checkBirth() == true && checkPhone() == true && chekckEmail() == true && checkAdd() == true && checkBox() == true) {
        document.getElementById("btn").disabled = false;
    }
}

function print() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
    var numPhone = document.getElementById("phone").value;
    var email = document.getElementById("mail").value;
    var birth = document.getElementById("birth").value;
    var add = document.getElementById("add").value
    var text = "<thead><tr><th>Họ tên</th><th>Ngày sinh</th><th>SĐT</th><th>Email</th><th>Địa chỉ</th></tr></thead>";
        text += "<tr><td>" + name + "</td><td>" + birth + "</td><td>" + numPhone + "</td><td>" + email + "</td><td>" + add + "</td></tr>";
    document.getElementById("table").innerHTML = text;

}