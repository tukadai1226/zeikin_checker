window.onload = function () {
    // 初期の計算結果（仮の値）
    const initialResults = {
        手取り収入: 50, 
        厚生年金: 50, 
        健康保険: 50, 
        雇用保険: 50, 
        国民年金: 50,
        国民健康保険: 50,
        所得税: 50,
        住民税: 50
    };
    // チャート用のデータを作成
    const chartData = {
      labels: Object.keys(initialResults), // 計算結果の項目をラベルとして使用
        datasets: [{
        data: Object.values(initialResults), // 計算結果の金額をデータとして使用
        backgroundColor: [
          '#F08080', '#FFA07A', '#FFFF66', '#78FF94', 
          '#AEFFBD', '#6495ED','#AFEEEE',  '#E6E6FA'
        ]
        }]
    };
    
    // チャートを描画
    const ctx = document.getElementById('myDonutChart').getContext('2d');
    const myDonutChart = new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
        options: {
        legend: {
            display: true,
            position: 'right'
        }
        }
    });
    
    // ボタンクリック時に円グラフを再描画する関数
    function drawDonutChart(results) {
        myDonutChart.data.datasets[0].data = Object.values(results);
        myDonutChart.update();
    }
    
    // 仮の計算結果（実際の計算結果に置き換えてください）
    const updatedResults = {
        netIncome: 1200,
        healthInsuranceAmount: 180,
        pensionAmount: 140,
        employmentInsuranceAmount: 45,
      // 他の項目もここに追加
    };
    
    // ボタンクリックで円グラフを再描画
    document.getElementById('updateChartButton').addEventListener('click', function () {
        drawDonutChart(updatedResults);
    });
    }