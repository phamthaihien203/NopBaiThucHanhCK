$(document).ready(function () {
    var i = 1;
    $("#myBtn1").click(function () {
        $("#myModal").modal();
    })
    function KTmssv() {
        var mauKT = /^[0-9]{10}$/
        if ($("#txtMaSV").val() == "") {
            $("#tbMaSV").html("*Không được để trống !!");
            return false;
        }
        if (!mauKT.test($("#txtMaSV").val())) {
            $("#tbMaSV").html("Mã Sinh Viên chỉ có 10 số");
            return false;
        }
        $("#tbMaSV").html("*");
        return true;
    };
    $("#txtMaSV").blur(KTmssv);
    function KTemail() {
        var kt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if ($("#txtEmail").val() == "") {
            $("#tbEmail").html("*Không được để trống !!");
            return false;
        }
        if (!kt.test($("#txtEmail").val())) {
            $("#tbEmail").html("Nhập đúng định dạng mail");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
    };

    $("#txtEmail").blur(KTemail);
    function KTTen() {
        var kt = /^[A-Z][a-zA-Z]+(\s[A-Z][a-zA-Z]+)*$/;
        if ($("#txtHT").val() == "") {
            $("#tbHT").html("*Không được để trống");
            return false;
        }
        if (!kt.test($("#txtHT").val())) {
            $("#tbHT").html("*Chữ cái đầu cảu mỗi từ phải viết hoa !!");
            return false;
        }
        $("#tbHT").html("*");
        return true;
    };

    $("#txtHT").blur(KTTen);
    function kiemTraSDT() {
        var mauKT = /^[0-9]{10}$/;
        if ($("#txtSDT").val == "") {
            $("#tbSDT").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#txtSDT").val())) {
            $("#tbSDT").html("Yêu cầu nhập đủ 10 số");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#txtSDT").blur(kiemTraSDT);
    function KTNgay() {
        if ($("#txtN").val() == "") {
            $("#tbN").html("không được để trống");
            return false;
        }
        var today = new Date();
        var ngay = new Date($("#txtN").val());
        today = today.setDate(today.getDate() + 7);
        if (today > ngay) {
            $("#tbN").html("Ngày tham gia sau 7 ngày hiện tại");
            return false;
        }
        $("#tbN").html("*");
        return true;
    }
    $("#txtN").blur(KTNgay);
    $("#btnSubDK").click(function () {
        if (!KTmssv() || !KTTen() || !KTemail() || !kiemTraSDT() || !KiemtraNgayTG()) {
            $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin");
            return false;
        }
        let mssv = document.getElementById("txtMaSV").value
        let SDT = document.getElementById("txtSDT").value
        let NTG = document.getElementById("txtN").value
        let email = document.getElementById("txtEmail").value
        let Ten = document.getElementById("txtHT").value


        let row = "<tr><td>" + i + "</td><td>" + mssv + "</td><td>" + Ten + "</td><td>" + NTG + "</td><td>" + email + "</td><td>" + SDT + "</td></tr>";
        let myTable = document.getElementById("addRow")
        let newRow = myTable.insertRow(myTable.rows.length)
        newRow.innerHTML = row
        $("#myModal").modal("hide");
        return true

    })
});