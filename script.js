const form = document.querySelector("form")

form.addEventListener('submit', ( e ) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const answer = document.querySelector('#answer')

   if (!height || height <= 0 || !weight || weight <= 0) {
        answer.innerHTML = "Enter valid height and weight values!";
        answer.style.color = "yellow";
        answer.style.display = "block";
        return;
    }else {
        const result = ( weight / ( ( height * height / 10000 ) )).toFixed(2)

        if (result < 18.60 ){
            answer.innerHTML = `Your BMI is Under Weight -> ${result}`
            answer.style.color = "Red"
            answer.style.display = "block"
        } else if ( result > 24.90) {
            answer.innerHTML = `Your BMI is Over Weight -> ${result}`
            answer.style.color = "Red"
            answer.style.display = "block"
        } else {
            answer.innerHTML = `Your BMI is Normal -> ${result}`
            answer.style.color = "Green"
            answer.style.display = "block"
        }
    }
} )