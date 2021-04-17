 
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
        for (var i = 0; i <= 2; i++) { //This is the for loop that controls the amount of articles on the homepage
            var infoBlock = infodata[i];
            informationArray.push(infoBlock);
        }

        informationArray.forEach(function (news) {
            console.log(response.Data[2].title);
            console.log(informationArray);
            
            cardHtml += `
    <div span class='full-homepage'>
        <div span class='homepage-body'
            <div span class='news-grid'>
                <div span class="news-grid-item'>
                    <div span class="news-card>
                        <img span class="news-image" src=${news.imageurl} alt="Image Can't Load">
                        <div span class="card-content">
                        <h1 span class="article-title">${news.title}</h1>
                        <p span class="article-preview">${news.body}</p>
                        <button onclick=${news.url} span class="article-button" target="_blank">
                            Continue Reading...
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
                            
                        

            
            `
            
            ;

            var mainRow = document.getElementById("showCard");
            mainRow.innerHTML = cardHtml ;
        });


        
    })
  }


  displayApiContent();