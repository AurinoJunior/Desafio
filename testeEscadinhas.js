QUnit.test( "Primeiro teste com QUnit", 
	function(assert) {
		var entrada = 3;
		var saida = Teste.validaPontos(entrada);

   		assert.ok( 48 == saida.length, "Passou!" );
});

var Teste = {					
	validaPontos:function(number){
		var aux = number, i, j;
		var pontinhos = "";

		if(isNaN(number)){
			return "Voce nao passou um numero !!!"
		}else if(number > 100 || number <=0 ){							
			return "vai com calma ai !!!";
		}else {
			for (i = 0; i<number; i++) {							
				
				for(j=aux; j<number;j++){
					pontinhos+="&nbsp&nbsp";
				}

				for (j=0;j<aux;j++){						
					pontinhos+="*";
				}
				pontinhos+="<br>";
				aux-=1;
			}
			return pontinhos;
		}
	}
}