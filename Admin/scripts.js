<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

document.addEventListener('DOMContentLoaded', (event) => {
    const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
    const ctxProfit = document.getElementById('profitChart').getContext('2d');
    const ctxExpends = document.getElementById('expendsChart').getContext('2d');

    const revenueChart = new Chart(ctxRevenue, {
        type: 'line',
        data: {
            labels: ['Feb14', 'Feb15', 'Feb16', 'Feb17', 'Feb18', 'Feb19', 'Feb20', 'Feb21'],
            datasets: [{
                label: 'Revenue',
                data: [12000, 15000, 10000, 20000, 15000, 18000, 22000, 17000],
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                borderColor: '#007bff',
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const profitChart = new Chart(ctxProfit, {
        type: 'line',
        data: {
            labels: ['Feb14', 'Feb15', 'Feb16', 'Feb17', 'Feb18', 'Feb19', 'Feb20', 'Feb21'],
            datasets: [{
                label: 'Profit',
                data: [5000, 6000, 5500, 6200, 5800, 6400, 6700, 6600],
                backgroundColor: 'rgba(40, 167, 69, 0.1)',
                borderColor: '#28a745',
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const expendsChart = new Chart(ctxExpends, {
        type: 'line',
        data: {
            labels: ['Feb14', 'Feb15', 'Feb16', 'Feb17', 'Feb18', 'Feb19', 'Feb20', 'Feb21'],
            datasets: [{
                label: 'Expends',
                data: [600, 700, 650, 620, 580, 640, 670, 660],
                backgroundColor: 'rgba(220, 53, 69, 0.1)',
                borderColor: '#dc3545',
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

document.querySelector('.searchTerm').addEventListener('input', function () {
    const term = this.value;
    if (!term) {
        clearHighlights();
        return;
    }
    searchAndHighlight(term);
});

function searchAndHighlight(term) {
    clearHighlights();
    const elements = document.querySelectorAll('.action-search');
    const pattern = new RegExp(`(${term})`, 'gi');

    elements.forEach(element => {
        element.innerHTML = element.innerHTML.replace(pattern, '<span class="highlight">$1</span>');
    });
}

function clearHighlights() {
    const elements = document.querySelectorAll('.action-search');
    elements.forEach(element => {
        element.innerHTML = element.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/gi, '$1');
    });
}

