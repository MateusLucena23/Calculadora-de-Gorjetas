function calculateTip(event) {
    event.preventDefault();
    
    let bill = document.getElementById('bill').value;
    let qualityService = document.getElementById('qualityService').value;
    let numeroPessoa = document.getElementById('pessoa').value;

    if(bill == '' || qualityService == 0) {
        alert("Por favor, preencha os valores.");
        return;
    }
    if(numeroPessoa == "" || numeroPessoa <= 1) {
        numeroPessoa = 1;
        document.getElementById('each').style.display = 'none';
    } else {
        document.getElementById('each').style.display = 'block';
    }

    let total = (bill * qualityService);
    total = total.toFixed(2);

    // Exibir o total na tela
    document.getElementById('totalTip').style.display = "block"; // Mostrar o total
    document.getElementById('result').innerText = total; // Atualizar o total
    if (numeroPessoa > 1) {
        document.getElementById('resultEach').innerText = (total / numeroPessoa).toFixed(2); // Total por pessoa
    }
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);