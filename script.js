/* ==========================================
   XỬ LÝ FORM ĐĂNG KÝ
========================================== */

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    // Không gửi form ngay lập tức
    event.preventDefault();

    // Lấy dữ liệu từ các ô nhập
    const studentId = document.getElementById("studentId").value.trim();
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const major = document.getElementById("major").value;
    const note = document.getElementById("note").value.trim();

    // ==========================================
    // KIỂM TRA MÃ SINH VIÊN
    // ==========================================

    if (studentId === "") {
        alert("Vui lòng nhập mã sinh viên!");
        document.getElementById("studentId").focus();
        return;
    }

    // Mã sinh viên chỉ được chứa chữ và số
    const studentIdRegex = /^[A-Za-z0-9]+$/;

    if (!studentIdRegex.test(studentId)) {
        alert("Mã sinh viên chỉ được chứa chữ và số!");
        document.getElementById("studentId").focus();
        return;
    }


    // ==========================================
    // KIỂM TRA HỌ TÊN
    // ==========================================

    if (fullName === "") {
        alert("Vui lòng nhập họ và tên sinh viên!");
        document.getElementById("fullName").focus();
        return;
    }


    // ==========================================
    // KIỂM TRA EMAIL
    // ==========================================

    if (email === "") {
        alert("Vui lòng nhập email trường!");
        document.getElementById("email").focus();
        return;
    }

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Email không đúng định dạng!");
        document.getElementById("email").focus();
        return;
    }


    // ==========================================
    // KIỂM TRA KHOA
    // ==========================================

    if (major === "") {
        alert("Vui lòng chọn khoa chuyên ngành!");
        document.getElementById("major").focus();
        return;
    }


    // ==========================================
    // KIỂM TRA HÌNH THỨC HỌC
    // ==========================================

    const studyType =
        document.querySelector(
            'input[name="studyType"]:checked'
        );

    if (!studyType) {
        alert("Vui lòng chọn hình thức học!");
        return;
    }


    // ==========================================
    // KIỂM TRA HỌC PHẦN
    // ==========================================

    const subjects =
        document.querySelectorAll(
            'input[name="subjects[]"]:checked'
        );

    if (subjects.length === 0) {
        alert("Vui lòng chọn ít nhất một học phần đăng ký thêm!");
        return;
    }


    // ==========================================
    // THÔNG BÁO THÀNH CÔNG
    // ==========================================

    let subjectList = "";

    subjects.forEach(function(subject) {
        subjectList += "\n- " + subject.value;
    });


    const message =
        "ĐĂNG KÝ HỌC PHẦN THÀNH CÔNG!\n\n" +
        "Mã sinh viên: " + studentId + "\n" +
        "Họ và tên: " + fullName + "\n" +
        "Email: " + email + "\n" +
        "Hình thức học: " + studyType.value +
        "\n\nCác học phần đã chọn:" +
        subjectList;


    alert(message);


    // ==========================================
    // GỬI FORM
    // ==========================================

    /*
       Sau khi kiểm tra thành công,
       form sẽ gửi dữ liệu đến:
       xử_lý_dangky.php
       
       Hiện tại đây chỉ là trang PHP giả lập
       theo yêu cầu của đề bài.
    */

    // form.submit();

});