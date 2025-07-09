function HideXML() {
    let container = document.getElementById("xmlDataContainer");
    container.innerHTML = "";
}
function loadXML() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            parseXML(this.responseXML); 
        }
    };
    xmlhttp.open("GET", "movie.xml", true);
    xmlhttp.send();
}

function parseXML(xml) {
   
    let movieList = xml.getElementsByTagName("movie");
    let container = document.getElementById("xmlDataContainer");
    container.innerHTML = ""; 

    let header = document.createElement("h2");
    header.textContent = "Showing Movie " + movieList.length + " Records";
    container.appendChild(header);

    for (let i = 0; i < movieList.length; i++) {
        let title = movieList[i].getElementsByTagName("title")[0].textContent;
        let genre = movieList[i].getElementsByTagName("genre")[0].textContent;
        let year = movieList[i].getElementsByTagName("year")[0].textContent;
        let director = movieList[i].getElementsByTagName("director")[0].textContent;
        let duration = movieList[i].getElementsByTagName("duration")[0].textContent;

       
        let castElements = movieList[i].getElementsByTagName("actor");
        let castList = [];
        for (let j = 0; j < castElements.length; j++) {
            castList.push(castElements[j].textContent);
        }

        let movieDiv = document.createElement("div");

        movieDiv.innerHTML =
            
            `<strong> ${i + 1}). Title:</strong> ${title} <br>` +
            `<strong>Genre:</strong> ${genre} <br>` +
            `<strong>Year:</strong> ${year} <br>` +
            `<strong>Director:</strong> ${director} <br>` +
            `<strong>Duration:</strong> ${duration} minutes<br>` +
            `<strong>Cast:</strong> ${castList.join(", ")} <br>`;
        
        movieDiv.classList.add("movie-card");
        container.appendChild(movieDiv);
    }
}
