const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkForPalindrome = (input) => {
    const originalInput = input;

    if (input === '') {
        alert('Please enter a word or phrase (or number)');
        return;
    }

    resultDiv.replaceChildren();

    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultMsg = `<strong>${originalInput}</strong> ${lowerCaseStr === 
    [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'} a palindrome.`;

    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = resultMsg;
    resultDiv.appendChild(pTag);

    resultDiv.classList.remove('hidden');
};

checkPalindromeBtn.addEventListener('click', () => {
    checkForPalindrome(userInput.value);
    userInput.value = '';
});

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      checkForPalindrome(userInput.value);
      userInput.value = '';
    }
  });



//info text

const infoBtn = document.getElementById('info-btn');
const infoPopup = document.getElementById('info-popup');

infoBtn.addEventListener('click', (event) => {
    // Stop the propagation of the click event
    event.stopPropagation();

    // Toggle the 'hidden' class on the popup
    infoPopup.classList.toggle('hidden');
});

document.addEventListener('click', function(event) {
    if (!infoPopup.contains(event.target) && !infoPopup.classList.contains('hidden')) {
        infoPopup.classList.add('hidden');
    }
});

// Night mode



const nightModeBtn = document.getElementById('night-mode-btn');
const doc = document.getElementById('doc');
const moon = document.getElementById('moon-icon')
const sun = document.getElementById('sun-icon')
const darkLabel = document.getElementById('dark-label')
const lightLabel = document.getElementById('light-label')

nightModeBtn.addEventListener('click', () => {
    doc.classList.toggle('darkmode')

    if (sun.classList.contains('hidden') && lightLabel.classList.contains('hidden')) {
        sun.classList.remove('hidden');
        lightLabel.classList.remove('hidden');
    } else {
        sun.classList.add('hidden')
        lightLabel.classList.add('hidden')
    }

    if (moon.classList.contains('hidden') && darkLabel.classList.contains('hidden')) {
        moon.classList.remove('hidden');
        darkLabel.classList.remove('hidden');
    } else {
        moon.classList.add('hidden');
        darkLabel.classList.add('hidden');

    }
})
