const endDate = "30 April 2023 01:06:40 AM"

document.getElementById("end-date").innerText = endDate;

// isse days,minute.... wale ka access mil jayega
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    // here diff is in millisecond convert into second
    const diff = (end-now)/1000; 
    if(diff<0){
        return;
    } 
    //convert into days
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor((diff/3600)%24);
    inputs[2].value = Math.floor((diff/60)%60);
    inputs[3].value = Math.floor(diff%60);
}
clock()
setInterval( 
    () => {
        clock()
    },
    1000
)