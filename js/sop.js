const candidates = [
    {
        name: "Arjun Raizada",
        position: "Chair",
        link: "https://drive.google.com/file/d/1xta5x8MYPmggQW2Q8GwdywUI3P9BHHpL/preview",
    },
    {
        name: "Mridul Mishra",
        position: "Vice Chair and Secretary",
        link: "https://drive.google.com/file/d/18iGyebSByMns7us3yoDcB3dHgKFqWHyo/preview",
    },
    {
        name: "Lakshmi Prabha K",
        position: "Secretary and Executive Director",
        link: "https://drive.google.com/file/d/1Scsavfg8gGrRzYK4_su7iwkakXqKmG-7/preview",
    },
    {
        name: "Mayuri G",
        position: "Secretary",
        link: "https://drive.google.com/file/d/1S80Q2lO6VpNPUCjT_9tkeHchEq2-5Xl9/preview",
    },
    {
        name: "Akhila Ajith P",
        position: "Treasurer",
        link: "https://drive.google.com/file/d/1WXfQfEVMlDbJvU5NrTniIGqzmjwdeeTI/preview",
    },
    {
        name: "Vishesh Agrawal",
        position: "Corporate Affairs & Funding Director",
        link: "https://drive.google.com/file/d/1gUlSKrHQhFLXh0x1NsxqzHyk4maVhXbj/preview",
    },
    {
        name: "Laxana S",
        position: "At Large",
        link: "https://drive.google.com/file/d/1gPvY5OaOpudCp_QN5FAhhZV9yMjB6cuL/preview",
    },
    {
        name: "Lavanya Ananthan",
        position: "At Large",
        link: "https://drive.google.com/file/d/1Ns7gntu_5w3d-k5VB2IyBVaM__crc-8z/preview",
    },
]


window.addEventListener("load", function(){

    var table = document.createElement('table');

    var tableHead = document.createElement('thead');
    var row1 = tableHead.insertRow();
    var cell1 = row1.insertCell();
    cell1.innerHTML = "Name";

    var cell2 = row1.insertCell();
    cell2.innerHTML = "Positions Applying For";

    var cell3 = row1.insertCell();
    cell3.innerHTML = "Statement of Purpose";

    var tableBody = document.createElement('tbody');
    var row = tableBody.insertRow();


    for (var i = 0; i < candidates.length; i++) {
      var j=i;
      var cell1 = row.insertCell();
      cell1.innerHTML = candidates[i].name;

      var cell2 = row.insertCell();
      cell2.innerHTML = candidates[i].position;

      var cell3 = row.insertCell();
      var button = document.createElement('button');

      var a = document.createElement('a');
    //   a.addEventListener("click", function(){
    //     var cand = a.getAttribute('id')


    //     var numb = cand.match(/\d/g);
    //     numb = numb.join("");
    //     console.log(numb);


    //     localStorage.setItem('link',candidates[numb].link);
    //     sopDisplay();
    //   });
      a.setAttribute('id',candidates[j].link)
      a.setAttribute('onclick','sopDisplay(this)')

      a.target = "_blank"
      var link = document.createTextNode("View");

      a.appendChild(link);
      button.appendChild(a);

      cell3.appendChild(button);

      row = tableBody.insertRow();
    }

    table.appendChild(tableHead);
    table.appendChild(tableBody);

    document.getElementById("soptable")?.appendChild(table);
  });


  function sopDisplay(link){

    console.log(link.id)
    window.open("sopdisplay.html", "_blank");
    localStorage.setItem('link',link.id)
    finalSop();
  }

  function finalSop(){
    var iframe = document.createElement('iframe');
    iframe.src = localStorage.getItem('link');
    iframe.width = 720;
    iframe.height = 1000;
    iframe.allow = "autoplay";

    document.getElementById("sopdisplay")?.appendChild(iframe);
  }
