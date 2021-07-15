const button = document.querySelector('#submit-button');

button.addEventListener('click', function () {

    // query input box, and save its value to variable
    // why doesn't query selector all work here

    const textInput = document.querySelector('input[type=text]');
    const textValue = textInput.value;

    // variable to store output
    const h1 = document.querySelector('#results')


    // check radio buttons // why is the name of the value encode / whatever??
    const checkedRadio = document.querySelector('input[type=radio]:checked');
    console.log(checkedRadio)

    const radioValue = checkedRadio.value;
    console.log(radioValue)
    if (radioValue === "encode") {
        h1.innerText = encode(textValue);

    }

    else if (radioValue === "translate") {
        h1.innerText = translate(textValue);
    }

    else if (radioValue === "madlib") {
        h1.innerText = madlib(textValue);
    }
    else if (radioValue === "search") {
        h1.innerHTML = '';

        //store the results of search function into an array
        const postSearchEmojiArr = search(textValue)

        // console.log(postSearchEmojiArr)

        // loop through Array
        for (const object of postSearchEmojiArr) {

            // create element with a p tag
            const p = document.createElement('p');
            p.innerText = object.symbol
            h1.appendChild(p);
        }


    }

    console.log(h1);
});

