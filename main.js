//arranges the letters of the alphabet in accordance to integer values
//in simple gematria the value of a is 1, b is 2, c is 3 for example 
//The value of Angel is 1+14+7+5+12 = 49 in the context of simple gematria
const letterValues = {
  simple: {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  },
  jewish: {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 600, k: 10, l: 20, m: 30, n: 40, o: 50, p: 60, q: 70, r: 80, s: 90, t: 100, u: 200, v: 700, w: 900, x: 300, y: 400, z: 500
  },
  english: {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 20, l: 30, m: 40, n: 50, o: 60, p: 70, q: 80, r: 90, s: 100, t: 200, u: 300, v: 400, w: 500, x: 600, y: 700, z: 800
  }
};

function computeGematria(txt, mode) {
  let tally = 0;
  for (let ch of txt.toLowerCase()) {
    if (letterValues[mode][ch]) {
      tally += letterValues[mode][ch];
    }
  }
  return tally;
}

function derive_gematria(word) {
  return {
    simple: computeGematria(word, 'simple'),
    jewish: computeGematria(word, 'jewish'),
    english: computeGematria(word, 'english')
  };
}

function showResults(res, elem) {
  elem.innerHTML =
    '<b>Simple:</b> ' + res.simple + '<br>' +
    '<b>Jewish:</b> ' + res.jewish + '<br>' +
    '<b>English:</b> ' + res.english;
}

const btn_calc = document.getElementById('calcBtn');
const word_input = document.getElementById('wordInput');
const outputDiv = document.getElementById('output');
const container = document.querySelector('.gematria-container');

btn_calc.addEventListener('click', function handleClick() {
  let entry = word_input.value.trim();
  if (!entry) return;
  let gemVals = derive_gematria(entry);
  showResults(gemVals, outputDiv);
  container.classList.remove('animated-border');
  void container.offsetWidth; // force reflow
  container.classList.add('animated-border');
});

container.addEventListener('animationend', function() {
  container.classList.remove('animated-border');
}); 