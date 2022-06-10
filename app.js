let stats = document.querySelector('.weekly-expenses');

let html =(e, maxamount)=>{
    let ht = e.amount / maxamount *100;
    //background-color : ${e.amount == maxamount ?  "red" : "blue"}
   return `
   <div class="daily flex"  data-title="${e.amount}">
     <div class="day-expenses" style="height : ${ht}px;background-color : ${e.amount == maxamount ?  "var(--Cyan)" : "var(--Soft-red)"}"></div>
     <div class="day"><p>${e.day}</p></div>
   </div>
   `;
}
async function Data (){

    const res = await fetch('data.json');
 
    const data = await res.json();
    let maxObj = data.reduce((max, obj) => (max.amount > obj.amount) ? max : obj);
    maxamount = maxObj.amount;
    console.log(maxamount,maxObj)
    data.map((e)=>{
        stats.innerHTML += html(e,maxamount);
    })
    
    
}
Data();