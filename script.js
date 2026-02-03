function validasiLogin() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (user === "" || pass === "") {
        alert("Username dan password tidak boleh kosong!");
        return false;
    }

    if (user === "Arizal Alfi" && pass === "12345") {
        alert("Login berhasil!");
        window.location.href = "index.html";
        return true;
    } else {
        alert("Username atau password salah!");
        return false;
    }
}