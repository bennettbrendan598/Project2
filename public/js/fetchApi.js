 
// Error handler for fetch
var handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
  }
  
  
  // Function to get and display the current conditions
  var displayApiContent = (event) => {
    let informationArray = [];
    // Set the queryURL to fetch API using weather search 
    let queryURL = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=a161effe73b28c87ebf73a8d87b55244f454e967e428b58fcae86d3f3a119d8f"
    fetch(queryURL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(handleErrors)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((response) => {
        let cardHtml;
        let infodata = response.Data;
        console.log(response.Data[1].title);
        for (var i = 0; i <= 2; i++) {
            var infoBlock = infodata[i];
            informationArray.push(infoBlock);
        }

        informationArray.forEach(function (news) {
            console.log(response.Data[2].title);
            console.log(informationArray);
            
            cardHtml += `
            <div class="col-md-4">
                <div class="card">
                    <img class="card-img-top" src=${news.imageurl} alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title border-bottom pb-3">${news.title} <a href=${news.url} target="_blank" class="float-right btn btn-sm btn-info d-inline-flex share"><i class="fas fa-share-alt"></i></a></h5>
                        <p class="card-text">${news.body}.</p>
                        <a href=${news.url} target="_blank" class="btn btn-sm btn-info float-right">Read more <i class="fas fa-angle-double-right"></i></a>
                    </div>
                </div> 
            </div>
            `;

            var mainRow = document.getElementById("showCard");
            mainRow.innerHTML = cardHtml ;
        });


        
    })
  }


  displayApiContent();