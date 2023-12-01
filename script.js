var formsubmit = document.getElementById("form")
console.log(formsubmit);
formsubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    var firstName = document.querySelector("#first-name").value;
    var lastName = document.querySelector('#last-name').value;
    var address = document.querySelector("#address").value;
    var pincode = document.querySelector("#pincode").value;
    var gender = document.querySelector("#gender").value;
    var food = document.querySelector("#food").value;
    var state = document.querySelector("#state").value;
    var country = document.querySelector("#country").value;

    var array = [firstName, lastName, address, pincode, gender, food, state, country]
    //console.log(firstname.value);

    var tableRow = document.createElement("tr")
    var count = 0;

    for( var i=0; i< array.length; i++ ){
        if(array[i] != ''){
            var tableData = document.createElement("td")
            console.log(array[i]);
            tableData.innerHTML=array[i]
            tableRow.append(tableData)
            count++;
        }
    }

    if(count > 2) {
        document.querySelector('tbody').append(tableRow)
      }else{
        alert("Must choose at least 2 out of 5 options")
      }
      
      for(let i of array){
        i.value = ''
      }
      

});