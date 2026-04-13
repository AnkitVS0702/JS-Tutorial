const form = document.getElementById('bmi_form');
const res = document.getElementById('results');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // const res = document.getElementById('results');
    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('weight').value)
    if (isNaN(height) || height <= 0) {
        res.innerHTML = 'Please give valid height value';
    }
    else if (isNaN(weight) || weight <= 0) {
        res.innerHTML = 'Please give valid weight value';
    }
    else{
        const ans=((weight*10000)/(height*height)).toFixed(2);
        res.innerHTML = `${ans}`;
    }
})