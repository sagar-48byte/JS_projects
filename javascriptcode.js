const buttons  = document.querySelectorAll('.button')
const body = document.querySelector('body')

const button2 = document.querySelector('.button2')

buttons.forEach(function(button){
    
    button.addEventListener('click', function(e){

        switch(e.target.id){
            case e.target.id : {
                body.style.backgroundColor = e.target.id;
                break;
            }
        }
    })
})

button2.addEventListener('click', function(e){

    body.style.background = 'grey';
})