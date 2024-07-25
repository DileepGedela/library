let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");


function displayBooks(result) {
    let {

        imageLink,
        author
    } = result;
    let containerEl = document.createElement("div");
    containerEl.classList.add("col-6", "d-flex", "flex-column", "mr-auto", "ml-auto");
    searchResultsEl.appendChild(containerEl);



    let imgEl = document.createElement("img");
    imgEl.classList.add("w-100", "mt-auto", "mr-auto")
    imgEl.src = imageLink;
    searchResultsEl.appendChild(imgEl)

    let authorEl = document.createElement("p");
    authorEl.classList.add("author");
    authorEl.textContent = author;
    searchResultsEl.appendChild(authorEl);
}

function displayresult(searchResults) {


    if (searchResults.length !== 0) {
        searchResultsEl.textContent = "Popular Books"
        for (let result of searchResults) {
            displayBooks(result)
        }
    } else {
        searchResultsEl.textcontent = "No results found"
    }
}

function searchBook() {
    if (event.key === "Enter") {
        spinnerEl.classList.remove("d-none");
        searchResultsEl.classList = ""
        let searchInputsVal = searchInputEl.value
        let url = "https://apis.ccbp.in/book-store?title=" + searchInputsVal;
        let options = {
            method: "GET"
        };


        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {

                console.log(jsonData);

                // console.log(JSON.stringify(jsonData))
                displayresult(jsonData.search_results);
            });
    }
}



searchInputEl.addEventListener("keydown", searchBook);