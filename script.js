// script.js

// Função para buscar cotações da B3
async function buscarCotacoesB3() {
    const apiUrl = 'https://brapi.dev/api/quote/VALE3,PETR4?interval=1';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data && data.results) {
            const cotacoesLista = document.getElementById('cotacoes-lista');
            data.results.forEach(item => {
                const cotacaoItem = document.createElement('div');
                cotacaoItem.innerHTML = `<p>${item.symbol}: ${item.regularMarketPrice} (${item.regularMarketChangePercent}%)</p>`;
                cotacoesLista.appendChild(cotacaoItem);
            });
        } else {
            console.error('Erro ao buscar cotações da B3: Dados inválidos', data);
        }
    } catch (error) {
        console.error('Erro ao buscar cotações da B3:', error);
    }
}

// Função para buscar cotações do mercado internacional (Yahoo Finance)
async function buscarCotacoesYahooFinance() {
    // Implemente a lógica para buscar cotações do Yahoo Finance via RapidAPI aqui
    // Substitua 'YOUR_RAPIDAPI_KEY' pela sua chave de API
    const apiKey = 'YOUR_RAPIDAPI_KEY';
    const apiUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=AAPL&region=US';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(apiUrl, options);
        const data = await response.json();

        console.log('Cotações do Yahoo Finance:', data);

        // Implemente a lógica para exibir as cotações na página

    } catch (error) {
        console.error('Erro ao buscar cotações do Yahoo Finance:', error);
    }
}

// Função para buscar indicadores macroeconômicos (FRED API)
async function buscarIndicadoresMacroeconomicos() {
    // Implemente a lógica para buscar indicadores macroeconômicos da FRED API aqui
    // Substitua 'YOUR_FRED_API_KEY' pela sua chave de API (se necessário)
    const apiKey = 'YOUR_FRED_API_KEY';
    const apiUrl = 'https://api.stlouisfed.org/fred/series/observations?series_id=GDP&api_key=YOUR_FRED_API_KEY&file_type=json';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log('Indicadores macroeconômicos (FRED API):', data);

        // Implemente a lógica para exibir os indicadores na página

    } catch (error) {
        console.error('Erro ao buscar indicadores macroeconômicos (FRED API):', error);
    }
}

// Função principal para iniciar a busca de cotações
async function iniciarBuscaCotacoes() {
    await buscarCotacoesB3();
    await buscarCotacoesYahooFinance();
    await buscarIndicadoresMacroeconomicos();
}


// Iniciar a busca de cotações quando a página carregar
document.addEventListener('DOMContentLoaded', iniciarBuscaCotacoes);