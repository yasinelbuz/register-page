/**
 * Email adresinde @ ve . işareti olmalı yoksa uyarı verilmeli.
 * password 8(dahil) karakterden büyük olmalı ve 16 karakterden küçük olmalı. 
 * Confirm password ile password birbine eşit olmalı.
 * checkbox işaretlenmeli. 
 * eğer bu şartlar uymaz ise buttona basıldığında bir uyarı ekranı gelmeli. formu tekrardan kontrol etmesi istenmeli. 
 */

/**
 * ifler kullanılacak bir çok yerde
 * (length) uzunluğunu kullancağız. 
 * includes()
 */

//verilere ulaştık
let email = document.querySelector(".email");
let pass = document.querySelector(".pass");
let confirmPass = document.querySelector(".confirm-pass");
let checkboxKosul = document.querySelector(".checkbox-kosul");
let button = document.querySelector(".register-btn");
let showContainer = document.querySelector(".show");


button.addEventListener('click', function () {
   if (!email.value.includes("@") || !email.value.includes(".")) {
      alert("Email Adresini Kontrol Edin!!!");
   } else if (pass.value.length <= 8 || pass.value.length >= 16) {
      alert("Passwordu doğru giriniz!!!");
   } else if (pass.value !== confirmPass.value) {
      alert("Password ve Confirm password aynı değil!!!");
   } else if (!checkboxKosul.checked) {
      alert("Koşullu onaylayınız!!!");
   } else {
      showContainer.innerHTML = "Congratulations, you have successfully registered\n" + "Email:" + email.value
   }
});