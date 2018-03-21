var TesteHtml = {	

	validaPontos:function(number){
		var aux = number, i, j;
		var pontinhos = "";

		if (isNaN(number)) {
			return "Voce nao passou um numero !!!";
		}
		if (number > 100 || number <=0) {
			return "vai com calma ai !!!";
		}

	    for (i = 0; i<number; i++) {
			
			for(j=aux; j<number;j++){
				pontinhos+="&nbsp&nbsp";
			}
			for (j=0;j<aux;j++){
				pontinhos+="*";
			}

			pontinhos+="</br>"
			aux-=1;
		}
		return pontinhos;
	}
}

var TesteConsole = {
	converte: function(string){
		for(var i=0; i<string.length; i++){
			string=string.replace("&nbsp&nbsp"," ");
			string=string.replace("</br>","\n");
		}
		return string;
	}
}

var x = parseInt(prompt("Digite o numero"));
var resultado = TesteHtml.validaPontos(x);
document.write(resultado);

resultado = TesteConsole.converte(resultado);
console.log(resultado);
