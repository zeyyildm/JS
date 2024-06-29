// 1-10 arası rastgele sayı oluştur
//puanlama sistemi geliştir
//kullanıcı kaç kerede bilmeli bunu öğren ve buna göre puanlama yap

var randomSayi = (Math.floor(1+Math.random()*10));
console.log(randomSayi);
let hakSayisi = prompt("lutfen kac hak istediginizi giriniz: ");
hakSayisi = Number(hakSayisi);
console.log("girdiginiz hak sayisi : "+ hakSayisi);
let i = 0
while(hakSayisi>0){
hakSayisi--;
let tahminSayi = prompt("lutfen sayi tahmininizi giriniz: ");
tahminSayi= Number(tahminSayi);
console.log("tahmin sayınız: "+ tahminSayi);
    if( randomSayi == tahminSayi){
        console.log("girdiginiz sayi dogrudur!");
        break;
    }
    else{
        console.log("girdiginiz sayi yanlistir ve kalan tahmin hakkiniz: "+ (hakSayisi));
    }

    if(hakSayisi==0){
        console.log("hak sayiniz bitmistir.");
    }
i++;
}









