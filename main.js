
let  qrText=document.getElementById("qrtext");
let  qrImage=document.getElementById("qrimage");
let  imgBox=document.getElementById("imgbox");

function generateQR(){
    if(qrText.value.length>0){
        qrImage.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
         imgBox.classList.add("show-img");
    }
    else{
        qrText.classList.add("error");
        setInterval(()=>{
            qrText.classList.remove("error");
        },1000);
    }
}