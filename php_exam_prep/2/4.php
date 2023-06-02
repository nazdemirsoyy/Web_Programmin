<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 4</title>
</head>
<body>
    <h1>Task 4.</h1>
    
    <h2>New transaction</h2>
    Gold: <input type="number" id="gold" min="0" max="99" step="1" value="0"><br>
    Silver: <input type="number" id="silver" min="0" max="11" step="1" value="0"><br>
    <button id="income">Income</button>
    <button id="spend">Expense</button>

    <h2>Transaction log</h2>
    <table id="log">
        <tr>
            <th>Timestamp</th>
            <th>Balance</th>
        </tr>
    </table>

    <script>
        function handleTransaction(operation) {
            const gold = parseInt(document.getElementById('gold').value);
            const silver = parseInt(document.getElementById('silver').value);

            fetch('transaction.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `gold=${gold}&silver=${silver}&operation=${operation}`
            })
            .then(response => response.json())
            .then(data => {
                if (!data) return;
                
                const table = document.getElementById('log');
                const row = document.createElement('tr');
                
                const timestampCell = document.createElement('td');
                timestampCell.textContent = data.timestamp;

                const balanceCell = document.createElement('td');
                balanceCell.textContent = `${data.balance.gold}g ${data.balance.silver}s`;
                
                row.appendChild(timestampCell);
                row.appendChild(balanceCell);

                table.appendChild(row);
            })
            .catch(error => console.error('Error:', error));
        }

        document.getElementById('income').addEventListener('click', () => handleTransaction('income'));
        document.getElementById('spend').addEventListener('click', () => handleTransaction('expense'));
    </script>
</body>
</html>
