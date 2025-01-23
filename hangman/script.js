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
    const gallowsImage = document.createElement('img');
    gallowsImage.setAttribute('src', '../hangman/gallows.png');
    gallowsImage.setAttribute('alt', 'Gallows image');
    gallows.appendChild(gallowsImage);

    //Set quiz part
    const text = document.createElement('div');
    text.classList.add('text');
    quiz.appendChild(text);
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    quiz.appendChild(keyboard);
    const word = document.createElement('div');
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
            checkLetter(event);
        });
    }

    document.addEventListener('keyup', function(event) {
        checkLetter(event);
        allButtons.forEach((element) => {
            if ('Key' + element.textContent === event.code) {
                element.classList.add('chosen');
            }
        })
    })

    //Implement modal window

    
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
    
    const bodyParts = ['head', 'body', 'hand-one', 'hand-two', 'leg-one', 'leg-two'];
    const index = Math.floor(Math.random() * questions.length);
    hint.textContent = questions[index];
    const value = pairs[String(index)];
    const wordLength = value.length;
    word.textContent = '_ '.repeat(wordLength);
    let errors = 0;
    let openLetters = 0;
    let guess = word.textContent.split(' ');

    function checkLetter(event) {
        let rightGuess = false;
        for (let i = 0; i < wordLength; i += 1) {
            if (value[i].toUpperCase() === event.target.textContent || 'Key' + value[i].toUpperCase() === event.code) {
                guess[i] = value[i].toUpperCase();
                rightGuess = true;
                openLetters += 1;
            }
        }
        if (rightGuess) word.textContent = guess.join(' ');
        else {
            errors += 1;
            score.textContent = `${errors}/6`;

            //Implement part of a body
            if (errors !== 6) {
                const part = document.createElement('img');
                part.setAttribute('src', '../hangman/' + bodyParts[errors - 1]);
                part.setAttribute('alt', bodyParts[errors - 1]);
                part.classList.add(bodyParts[errors - 1]);
                gallows.appendChild(part);
            }
        }
    }
})