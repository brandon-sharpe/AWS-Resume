window.addEventListener('DOMContentLoaded', (event)=>{
    getVisitCount();
})

const functionAPI = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json
    }).then(response =>{
        console.log("Website called function api.");
        count = reponse.count;
        document.getElementById("counter").innnertext = count;
    }).catch(function(error){
        console.log(error);
    });
}