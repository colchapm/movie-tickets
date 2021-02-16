function Receipt() {
  this.ticketsList = []
}

Receipt.prototype.addTicket = function (ticket) {
  this.ticketsList.push(ticket)
}

function Ticket(name, time, age, quantity, price) {
  this.name = name
  this.time = time
  this.age = age
  this.quantity = quantity
  this.price = price
}

Ticket.prototype.ticketTotal = function () {
  if (this.time === "12:00") {
    this.price === 5

  } /// matinee
  else {

    if (this.age >= 65) {
      console.log(this.price * .2)
    } else if (this.age <= 12) {
      console.log(this.price * 2)
    } else this.price

  }

}

const movies = [
  { title: "the rock" }

]
// function showContact(movieName) {
//   const contact = addressBook.findContact(contactId);
//   $("#show-contact").show();
//   $(".first-name").html(contact.firstName);
//   $(".last-name").html(contact.lastName);
//   $(".phone-number").html(contact.phoneNumber);
//   let buttons = $("#buttons");
//   buttons.empty();
//   buttons.append("<button class='deleteButton' id=" + + contact.id + ">Delete</button>");
// }


function attachMovieListeners() {
  let movieTitle = null;
  $("ul#movies").on("click", "li", function () {
    console.log(this.id)
    movieTitle = {currentmovie}
    // showMovie(this.id)
  });


};

let receipt = new Receipt();

$(document).ready(function () {

  attachMovieListeners();
  $("form#new-ticket").submit(function (event) {
    event.preventDefault();
    const inputtedName = "The Rock"
    const inputtedTime = $("#movie-times").val();
    const inputtedAge = $("#age-group").val();
    const inputtedQuantity = $("#quantity").val();
    const total = 10.00

    let newTicket = new Ticket(inputtedName, inputtedTime, inputtedAge, inputtedQuantity, total);
    // name, time, age, quantity, price

    receipt.addTicket(newTicket);
    console.log(receipt)
    // console.log(newTicket)
  })
});