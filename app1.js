var carobj ={
    vehicle: "car",
    imageURL : "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    frarperkilo: 30,
    capacity: 4,
    description: "hi my name is naim you want to go with me , lets goo baby"
}
var bikeobj ={
    vehicle: "bike",
    imageURL : "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    frarperkilo: 20,
    capacity: 1,
    description: "have a safe and first joureny"
}
var busobj ={
    vehicle: "BUS",
    imageURL : "https://images.unsplash.com/photo-1569448096483-1114dddb646d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1c3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    frarperkilo: 10,
    capacity: 30,
    description: "hi my name is naim you want to go with me , lets goo baby"
}



function displayservice(service){

    //step-1: Access the main section by id 
    //step-2: Create a Div element 
    //step-3: Create innerHTML of the above div dinamically with service 
    //step-4: append the div to main section 
const mainsection = document.getElementById("main-section")
const div = document.createElement("div");
const stringfied = JSON.stringify(service)
div.innerHTML = `
<div class="card mt-3 mx-auto" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${service.imageURL}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Transport mood: ${service.vehicle}</h5>
      <p class="card-text">Ticket price: ${service.frarperkilo}</p>
      <p class="card-text">Capacity: ${service.capacity}</p>
      <p class="card-text">${service.description}</p>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick="handelbooking(${stringfied})" data-bs-target="#exampleModal">
        BOOK NOW
      </button>
    </div>
  </div>
</div>
</div>
`
mainsection.appendChild(div);
console.log(service);
}
displayservice(carobj)
displayservice(busobj);
displayservice(bikeobj);

/*
//handel booking info
1. write the function named handelbooking
2. it will have an object as parmeter  
*/
// function handelbooking(obj){
//     const modalbody = document.getElementById("modal-body")
// //     modalbody.innerHTML =
// //     `
// //     <div class="card mx-auto" style="width: 18rem;">
// //     <img src=${obj.imageURL} class="card-img-top" alt="...">
// //     <div class="card-body">
// //     <h5 class="card-title">Vichel mood : ${obj.vehicle}</h5>
// //     <p class="card-text">${obj.description}</p>
// //     <a href="#" class="btn btn-primary">Go somewhere</a>
// //     </div>
// //     </div>
// //  `;
//     modalbody.innerHTML = `
    
//     <div class="card mx-auto" style="width: 18rem;">
//   <img src=${obj.imageUrl} class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Vehicle Mood : ${obj.vehicle}</h5>
//     <p class="card-text">${obj.description}</p>

//     <p class="card-text"><small class="text-muted">Fare per kilo ${obj.farePerKilo}</small> <small class="text-muted">Capacity ${obj.capacity}</small></p>
//     <div class="d-flex flex-column" role="search">
//      <p>Fare: <small class="text-muted" id="fare"></small > </p>
//      <p>tax: <small class="text-muted" id="tax"></small > </p>
//      <p>Total-cost: <small class="text-muted" id="total-cost"></small > </p>

//     <input class="form-control m-2" id= "distance-input"  type="number" placeholder="How many km ?" aria-label="Search"/>
//     <input class="form-control m-2" type="number" id= "quantity-input" placeholder="how many car do you need?" aria-label="Search"/>
//     <button class="btn btn-outline-success" id="search-btn" aria-label="type="submit" onclick='calculateCost(${stringifiedObj})'>submit</button>
//   </div>
//   </div>
// </div>
    
//     `;

// }
function handleBooking(obj) {

    const modalBody = document.getElementById("modal-body");
  
    const stringifiedObj = JSON.stringify(obj);
  
    modalBody.innerHTML = `
      
      <div class="card mx-auto" style="width: 18rem;">
    <img src=${obj.imageUrl} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Vehicle Mood : ${obj.vehicle}</h5>
      <p class="card-text">${obj.description}</p>
  
      <p class="card-text"><small class="text-muted">Fare per kilo ${obj.farePerKilo}</small> <small class="text-muted">Capacity ${obj.capacity}</small></p>
      <div class="d-flex flex-column" role="search">
       <p>Fare: <small class="text-muted" id="fare"></small > </p>
       <p>tax: <small class="text-muted" id="tax"></small > </p>
       <p>Total-cost: <small class="text-muted" id="total-cost"></small > </p>
  
      <input class="form-control m-2" id= "distance-input"  type="number" placeholder="How many km ?" aria-label="Search"/>
      <input class="form-control m-2" type="number" id= "quantity-input" placeholder="how many car do you need?" aria-label="Search"/>
      <button class="btn btn-outline-success" id="search-btn" aria-label="type="submit" onclick='calculateCost(${stringifiedObj})'>submit</button>
    </div>
    </div>
  </div>
      
      `;
  }
