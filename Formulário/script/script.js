const name = document.querySelector("#name");
const age = document.querySelector("#age");
const job = document.querySelector("#time_job");
const btn = document.querySelector("#btn");
const res = document.querySelector("#result");

btn.addEventListener("click", () => {
    res.innerText = "";

    const ageValue = +age.value;
    const jobValue = +job.value;

    if(ageValue <= 18) {
        res.innerText = `Desculpe ${name.value}, você não tem idade suficiente para trabalhar em uma de nossas vagas!!`;
    } else {
        if(jobValue <= 3) {
            res.innerText = `Infelizmente um dos nossos requisitos é o mínino de 3 anos de experiência, quem sabe numa próxima ${name.value}`;
        } else {
            res.innerText = `Parabéns ${name.value}, você atendeu todos os nossos requisitos!!!`;
        }
    }
})