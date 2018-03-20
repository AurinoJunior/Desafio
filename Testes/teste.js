QUnit.test("Primeiro teste", 
	function(assert) {
		var entrada = 3;
		var saida = Teste.validaPontos(entrada);
		var saidaEsperada = 48;

   		assert.ok( saidaEsperada == saida.length, "Passou com numero inteiro!" );
});

QUnit.test("Segundo teste",
	function(assert){
		var entrada = 4;
		var saida = Teste.validaPontos(entrada);
		var saidaEsperada = 86;
		
		assert.ok(saidaEsperada == saida.length,"Passou com numero inteiro!");
	}
);

QUnit.test("Terceiro teste",
	function(assert){
		var entrada = "sdadhasu";
		var saida = Teste.validaPontos(entrada);
		var saidaEsperada = "Voce nao passou um numero !!!";

		assert.ok(saidaEsperada == saida, "Passou com uma string");
	}
);

QUnit.test("Quarto teste",
	function(assert){
		var entrada = 15000;
		var saida = Teste.validaPontos(entrada);
		var saidaEsperada = "vai com calma ai !!!";

		assert.ok(saidaEsperada == saida, "Passou com valor fora do intervalo");
	}
);

QUnit.test("Quinto teste",
	function(assert){
		var entrada = -5;
		var saida = Teste.validaPontos(entrada);
		var saidaEsperada = "vai com calma ai !!!";

		assert.ok(saidaEsperada == saida, "Passou com valor fora do intervalo");
	}
);

QUnit.test("Sexto teste",
	function(assert){
		var entrada = 0;
		var saida = Teste.validaPontos(entrada);
		var saidaEsperada = "vai com calma ai !!!";

		assert.ok(saidaEsperada == saida, "Passou com valor fora do intervalo");
	}
);

/*var Teste = {					
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
}*/