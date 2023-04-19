const form = document.querySelector("form");
const divContainer = document.querySelector(".container");

document.addEventListener('DOMContentLoaded', () => {
    const inputFields = document.querySelectorAll('input[type="range"]');
  
    // Calculate and log energy consumption, update label width
    const updateChart = () => {
      let totalEnergyConsumption = 0;
      inputFields.forEach(input => {
        const consumption = parseFloat(input.getAttribute('data-consumption'));
        totalEnergyConsumption += consumption;
      });
  
      console.log('Last year\'s total energy consumption (M):', totalEnergyConsumption);
  
      inputFields.forEach(input => {
        const value = parseFloat(input.value);
        const max = parseFloat(input.getAttribute('max'));
        const consumption = parseFloat(input.getAttribute('data-consumption'));
        const ci = (value / max) * consumption;
  
        console.log(`Current consumption (ci) for input with ID "${input.id}":`, ci);
  
        const label = document.querySelector(`label[for="${input.id}"]`);
        const labelWidth = (ci / totalEnergyConsumption) * 100;
        label.style.width = `${labelWidth}%`;
      });
    };
  
    const form = document.querySelector('form');
    form.addEventListener('input', updateChart);

    updateChart();
  });
  
  