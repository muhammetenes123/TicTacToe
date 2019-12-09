function OyunaBaşla() {
	for (var i = 1; i <= 9; i++) {
		Temizle(i);
	}
	document.turn ="X";
	if(Math.random() < 0.5){
		document.turn="O";
	}
	document.kazanan = null;
	MesajGönder(document.turn+" İle başlayalım");
}
function MesajGönder(msg){
document.getElementById("mesaj").innerText = msg;
}
function nextMove(kare){
	if (document.kazanan != null) {
		MesajGönder(document.kazanan+" Oyunu kazandı zaten");

	}else if (kare.innerText=="") {
	kare.innerText=document.turn;
	switchturn();
    }else{
    	MesajGönder("Bu kare kullanıldı.")
    }
}
function switchturn(){
	if (Kazanan(document.turn)) {
		MesajGönder("Tebrikler, "+document.turn+ " Sen Kazandın!");
	document.kazanan = document.turn;
	}else if(document.turn == "X"){
		document.turn="O";
		MesajGönder("Sıra "+document.turn + "'da");
	}else{
		document.turn="X";
		MesajGönder("Sıra "+document.turn + "'da");
	}
	
}
function Kazanan(move){
	var sonuç = false;
	if (eslesme(1,2,3,move) ||
		eslesme (4,5,6,move)||
		 eslesme(7,8,9,move)||
		 eslesme(1,4,7,move)||
		 eslesme(2,5,8,move)||
		 eslesme(3,6,9,move)||
		 eslesme(3,5,7,move)||
		 eslesme(1,5,9,move)||
		 eslesme(1,5,7,move)){
		sonuç = true;
}
return sonuç;
}
function eslesme(a,b,c,move){
	var sonuç = false;
	if(Kutu(a)== move && Kutu(b)== move && Kutu(c)==move) {
		sonuç=true;
	}
	return sonuç;
}
function Kutu(numara){
return document.getElementById("s"+numara).innerText;
}
function Temizle(numara){
	document.getElementById("s"+numara).innerText="";
}
