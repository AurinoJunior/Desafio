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
