
	let formulario = document.getElementById("form-valido");
	formulario.addEventListener('submit', function(event) {
		let campoA = parseInt(document.getElementById("valor-a").value);
		let campoB = parseInt(document.getElementById("valor-b").value);

		if (campoB > campoA) {
			alert("Formulário válido!");
		} else {
			alert("Digite um número maior para o campo B.");
			event.preventDefault();
		}
	});









