// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody=d3.select("tbody");

tableData.forEach(function(row){
    trow= tbody.append("tr");
    // console.log(row)
    trow.append("td").text(row.datetime);
    trow.append("td").text(row.city);
    trow.append("td").text(row.state);
    trow.append("td").text(row.country);
    trow.append("td").text(row.shape);
    trow.append("td").text(row.durationMinutes);
    trow.append("td").text(row.comments)

})

var inputdate = d3.select("#datetime")
var button= d3.select("#filter-btn")



function SearchDate(event){
    var inputdateValue = inputdate.node().value;
    console.log(inputdateValue)
    tbody.text("");
    // var number_of_record_fount=0
    // console.log(number_of_record_fount);
    // table_area_text= d3.select("#table-area").append("div").text(" ")




    tableData.forEach(function(row){
        if (row.datetime===inputdateValue){
            // console.log(inputdateValue)
            trow= tbody.append("tr");
            // console.log(row)
            trow.append("td").text(row.datetime);
            trow.append("td").text(row.city);
            trow.append("td").text(row.state);
            trow.append("td").text(row.country);
            trow.append("td").text(row.shape);
            trow.append("td").text(row.durationMinutes);
            trow.append("td").text(row.comments);
            // number_of_record_fount+=1;
        }
    })

    // console.log(number_of_record_fount);

    // if(number_of_record_fount===0){
    //     // console.log(inputdateValue)
    //     d3.select("#table-area").append("div").text("No data found!")
    // }

}

button.on("click", SearchDate)

// inputdate.on("change", function(){
//     console.log("hey")
// });