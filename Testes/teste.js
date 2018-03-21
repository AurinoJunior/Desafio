QUnit.test("Primeiro teste", 
	function(assert) {
		var entrada = 3;
		var saida = TesteConsole.converte(TesteHtml.validaPontos(entrada));
   		var saidaEsperada = "***\n **\n  *\n";
   		assert.equal(saidaEsperada, saida, "Gerou os pontos corretamente");
	}
);

QUnit.test("Segundo teste",
	function(assert){
		var entrada = 4;
		var saida = TesteHtml.validaPontos(entrada);
		var saidaEsperada = "****</br>&nbsp&nbsp***</br>&nbsp&nbsp&nbsp&nbsp**</br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*</br>";
		
		assert.equal(saida, saidaEsperada, "Testado corretamente");
	}
);

QUnit.test("Terceiro teste",
	function(assert){
		var entrada = "sdadhasu";
		var saida = TesteHtml.validaPontos(entrada);
		var saidaEsperada = "Voce nao passou um numero !!!";

		assert.ok(saidaEsperada == saida, "Passou com uma string");
	}
);

QUnit.test("Quarto teste",
	function(assert){
		var entrada = 15000;
		var saida = TesteHtml.validaPontos(entrada);
		var saidaEsperada = "vai com calma ai !!!";

		assert.ok(saidaEsperada == saida, "Passou com valor fora do intervalo");
	}
);

QUnit.test("Quinto teste",
	function(assert){
		var entrada = -5;
		var saida = TesteHtml.validaPontos(entrada);
		var saidaEsperada = "vai com calma ai !!!";

		assert.ok(saidaEsperada == saida, "Passou com valor fora do intervalo");
	}
);

QUnit.test("Sexto teste",
	function(assert){
		var entrada = 0;
		var saida = TesteHtml.validaPontos(entrada);
		var saidaEsperada = "vai com calma ai !!!";

		assert.ok(saidaEsperada == saida, "Passou com valor fora do intervalo");
	}
);

