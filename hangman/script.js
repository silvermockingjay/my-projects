//Generate the body with the start of the game
window.addEventListener('load', function() {
    const parent = document.querySelector('body');
    const main = document.createElement('main');
    parent.appendChild(main);
    const gallows = document.createElement('section');
    gallows.classList.add('gallows');
    main.appendChild(gallows);
    const quiz = document.createElement('section');
    quiz.classList.add('quiz');
    main.appendChild(quiz);

    //Set gallows part
    const container = document.createElement('div');
    container.classList.add('container');
    gallows.appendChild(container);
    const gallowsImage = document.createElement('img');
    gallowsImage.setAttribute('src', '../hangman/gallows.png');
    gallowsImage.setAttribute('alt', 'Gallows image');
    gallowsImage.classList.add('gallowsImg');
    container.appendChild(gallowsImage);

    //Implement parts of a hangman's body
    const bodyPartsName = ['head', 'body', 'hand-one', 'hand-two', 'leg-one', 'leg-two'];
    const bodyPartsElements = [];
    for (let i = 0; i < bodyPartsName.length; i += 1) {
        const div = document.createElement('div');
        const classDiv = 'div' + bodyPartsName[i];
        div.classList.add(classDiv);
        const part = document.createElement('img');
        const link = '../hangman/' + bodyPartsName[i] + '.png';
        part.setAttribute('src', link);
        part.setAttribute('alt', bodyPartsName[i]);
        part.classList.add('child');
        part.classList.add('hidden');
        div.appendChild(part);
        container.appendChild(div);
        bodyPartsElements.push(part);
    }

    //Set quiz part
    const text = document.createElement('div');
    text.classList.add('text');
    quiz.appendChild(text);
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    quiz.appendChild(keyboard);
    const word = document.createElement('div');
    word.classList.add('word');
    text.appendChild(word);
    const hint = document.createElement('p');
    text.appendChild(hint);
    const guesses = document.createElement('p');
    text.appendChild(guesses);
    guesses.textContent = 'Incorrect guesses: ';
    const score = document.createElement('span');
    score.textContent = '0/6';
    guesses.appendChild(score);

    //Implement keyboard
    const usedLetters = new Set();
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const allButtons = [];
    for (let char in alphabet) {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = alphabet[char];
        keyboard.appendChild(button);
        allButtons.push(button);
        button.addEventListener('click', function(event) {
            button.classList.add('chosen');
            if (!usedLetters.has(button.textContent)) {
                usedLetters.add(button.textContent);
                checkLetter(event);
            }
        });
    }

    document.addEventListener('keyup', function(event) {
        if (event.code.startsWith('Key')) {
            if (!usedLetters.has(event.key.toUpperCase())) {
                usedLetters.add(event.key.toUpperCase());
                checkLetter(event);
                allButtons.forEach((element) => {
                    if ('Key' + element.textContent === event.code) {
                        element.classList.add('chosen');
                    }
                })
            }
        }
    })

    //Implement modal window
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.classList.add('hidden');
    parent.appendChild(modal);
    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modalWindow');
    modal.appendChild(modalWindow);
    const message = document.createElement('p');
    modalWindow.appendChild(message);
    const answer = document.createElement('p');
    modalWindow.appendChild(answer);
    const play = document.createElement('button');
    modalWindow.appendChild(play);
    play.textContent = 'Play again!';
    
    //Implement quiz
    const questions = [
        'Hint: National Italian dish',
        'Hint: The biggest animal on Earth',
        'Hint: One of the 7 continents',
        'Hint: Programming language',
        'Hint: Hogwarts House',
        'Hint: A bird that became a symbol of rebellion in Hunger Games',
        'Hint: A fruit that looks like tomato',
        'Hint: Traditional Scottish instrument',
        'Hint: A surname of a fictional detective',
        'Hint: One of the highest mountains in the world',
        'Hint: Central European country',
        'Hint: A hormone in your body', 
        'Hint: The fastest land animal',
        'Hint: The hottest planet of solar system',
        'Hint: A part of a flower', 
        'Hint: It lives underground',
        'Hint: A plant with bright pink flowers',
        'Hint: It opens all doors',
        'Hint: A pattern in music or literature',
        'Hint: A line or sequence'
    ];

    const pairs = {
        0: 'pizza',
        1: 'whale',
        2: 'Australia',
        3: 'JavaScript',
        4: 'Gryffindor',
        5: 'mockingjay',
        6: 'persimmon',
        7: 'bagpipe',
        8: 'Marple',
        9: 'Manaslu',
        10: 'Slovenia',
        11: 'melatonin',
        12: 'cheetah',
        13: 'Venus',
        14: 'stamen',
        15: 'centipede',
        16: 'fuchsia', 
        17: 'politeness',
        18: 'rhythm',
        19: 'queue'
    };
    
    let index = Math.floor(Math.random() * questions.length);
    hint.textContent = questions[index];
    let value = pairs[String(index)].toUpperCase();
    let wordLength = value.length;
    word.textContent = '_ '.repeat(wordLength);
    let errors = 0;
    let openLetters = 0;
    let guess = word.textContent.split(' ');
    let indexesUsed = index;

    //Implement checkLetter 
    function checkLetter(event) {
        let rightGuess = false;
        for (let i = 0; i < wordLength; i += 1) {
            if (event.type === 'click' && value[i] === event.target.textContent) {
                guess[i] = value[i];
                rightGuess = true;
                openLetters += 1;
            }
            if (event.type === 'keyup' && 'Key' + value[i] === event.code) {
                guess[i] = value[i];
                rightGuess = true;
                openLetters += 1;
            }
        }
        if (rightGuess) {
            word.textContent = guess.join(' ');
            if (openLetters === wordLength) {
                message.textContent = 'Congratulations! You win!';
                answer.textContent = `Secret word: ${value}`;
                setTimeout(() => {
                    modal.classList.remove('hidden');
                }, 500);
                
            }
        }
        else {
            errors += 1;
            score.textContent = `${errors}/6`;

            //Show part of a body
            if (errors < 7) {
                bodyPartsElements[errors - 1].classList.remove('hidden');
            }

            //Show modal window
            if (errors >= 6) {
                message.textContent = 'Game over. Sorry, try one more time!';
                answer.innerHTML = `Secret word: <b>${value}</b>`;
                setTimeout(() => {
                    modal.classList.remove('hidden');
                }, 500);
            }
        }
    }

    //Implement play again
    play.addEventListener('click', function() {
        while(index === indexesUsed) {
            index = Math.floor(Math.random() * questions.length);
        }
        indexesUsed = index;
        hint.textContent = questions[index];
        value = pairs[String(index)].toUpperCase();
        wordLength = value.length;
        word.textContent = '_ '.repeat(wordLength);
        errors = 0;
        openLetters = 0;
        guess = word.textContent.split(' ');
        score.textContent = `${errors}/6`;
        bodyPartsElements.forEach((element) => {
            element.classList.add('hidden');
        })
        allButtons.forEach((element) => {
            element.classList.remove('chosen');
        })
        usedLetters.clear();
        modal.classList.add('hidden');
    })
})