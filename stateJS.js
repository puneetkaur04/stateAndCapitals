function myFunction(){
    var selectedState = (document.getElementById('state').value);
    var displayCapital = (document.getElementById('capital'));

    var arizona =["Phoenix"];
    var california =["Sacramento"];
    var nevada = ["Carson"];
    var washington =["Olympia"];

    document.getElementById('capital').innerHTML="";

    if(selectedState == "AZ")
    {
        for (i=0; i < arizona.length;i++)
        {
            var selectoptions = document.createElement('option');
            selectoptions.innerHTML = arizona[i];
            selectoptions.value=arizona[i];
            displayCapital.appendChild(selectoptions);
        } 
    }
    else if(selectedState == "Cali")
    {
        for (i=0; i < california.length;i++)
        {
            var selectoptions = document.createElement('option');
            selectoptions.innerHTML = california[i];
            selectoptions.value=california[i];
            displayCapital.appendChild(selectoptions);
        }
    }
    else if(selectedState == "Washington")
    {
        for (i=0; i < washington.length;i++)
        {
            var selectoptions = document.createElement('option');
            selectoptions.innerHTML = washington[i];
            selectoptions.value=washington[i];
            displayCapital.appendChild(selectoptions);
        }
    }
    else{
        for (i=0; i< nevada.length;i++)
        {
            var selectoptions = document.createElement('option');
            selectoptions.innerHTML = nevada[i];
            selectoptions.value=nevada[i];
            displayCapital.appendChild(selectoptions);
        }
    }

}