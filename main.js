const button = document.querySelector('#submit-button');

button.addEventListener('click', function () {

    // query input box, and save its value to variable
    // why doesn't query selector all work here

    const textInput = document.querySelectorAll('input[type=text]');
    const textValue = textInput.value;

    // variable to store output
    const h1 = document.querySelector('#results')

    // output function and save it to a variable
    h1.innerText = encode(textValue);

    // 

    // check radio buttons // why is the name of the value encode / whatever??
    const checkedRadio = document.querySelectorAll('input[type=radio]:checked');
    const radioValue = checkedRadio.value;

    if (radioValue === "encode") {
        encode();

    } else if (radioValue === "translate") {
        translate();
    }

    else if (radioValue === "madlib") {
        madlib();
    }

    else if (radioValue === "search") {
        search();
    }

    console.log(search())

});

