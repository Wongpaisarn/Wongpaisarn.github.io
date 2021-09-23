let likeme = document.getElementById('likeme')
let nickname = document.getElementById('nickname')
function birthday(){
    alert("30/04/41 \r\nอายุ 23 ปี");
}
function like(){
    alert("Thanks!!");
}
nickname.addEventListener('click',birthday);
likeme.addEventListener('click',like);