// hotel registration ---- store in an object
var test = {
    hotelname: "Marriot",
    room: 456,
    booked: 123,
    display: function(){
        return this.hotelname;
    }
};

// Access the properites / change the properies
console.log(test.hotelname);
console.log(test.booked);
test.booked = 144; 

// Start the Hotel Reservation
var guestgroup =[];
function reservation(){
    // Get the values from the form, and put it in an object
    // Practice -- complete the project
    var guest = {
        name: $('#name').val(),
        numerofGuest: $('#num').val(),
        checkin: $('#checkin').val()
    };
    guestgroup.push(guest);
    console.log(guest);
    alert("Thank you for your reservation");
}

function displayList(){
    $("#guestlist").html("");
    $("#guestlist").append("<table>");
    for(var i in guestgroup){  // complete this table
        $("#guestlist").append("<tr><td>"+ guestgroup[i].name+"</td>"); 
        $("#guestlist").append("<td>"+ guestgroup[i].numerofGuest+"</td>");
        $("#guestlist").append("<td>"+ guestgroup[i].checkin+"</td></tr>");
    }
    $("#guestlist").append("</table>");
}


// Register the event handler
$('#submit').click(reservation);
$("#lists").click(displayList);