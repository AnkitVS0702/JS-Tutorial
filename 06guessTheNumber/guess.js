const form = document.getElementById('form1');
const real = Math.round(Math.random() * 100);

let attempt = 10;

console.log(`Real number is ${real}`);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const result = document.querySelector('.guesses');
    const left_att = document.querySelector('.lastResult');
    const guessed = parseInt(document.querySelector('.guessField').value);

    if (attempt <= 0) {
        result.innerHTML = 'Sorry. No attempts left';
        return;
    }

    attempt--;

    if (guessed === real) {
        result.innerHTML = 'Congratulations';
    } else {
        result.innerHTML = 'Wrong guess';
    }

    left_att.innerHTML = `${attempt}`;
});