//Citater bliver loadet fra citater.js

var dateSortedCitater = []
var citater = []
console.time("Format")
for (let i = 0; i < rawCitater.length; i++) {
    const element = rawCitater[i];



    //Split mit menneskelige format op til noget computer-læseligt. Det her splitter kun på det første ": ", og ignorerer resten.
    var tempSplit = element.split(/: /)
    var datoOgNavn = tempSplit.shift() //Den her skal vi splitte igen senere
    const citat = tempSplit.join(": ")


    var person, dato
    var multiline = false
    //Hvis citatet er et svar på et andet citat
    if(datoOgNavn.includes("+n ")) {
        multiline = true
        person = datoOgNavn = datoOgNavn.replace("+n ", "")
    } else {
        tempSplit = datoOgNavn.split(/ /) //Lad os bare genbruge variablen og koden. Den her gang splitter vi på det første mellemrum.
        dato = tempSplit.shift()
        person = tempSplit.join(" ")
    }

    

    
    


    //Lad os lige teste citatet for at sikre, at det virker.
        if( 
            typeof citat === "undefined" ||
            (typeof dato === "undefined" && multiline === true)||
            typeof person === "undefined"
        ) {
            alert("Der er noget galt med citat " + (i +1) + " (tæller fra 1). \nFortæl Vitus om det.\nFor nu ignorerer vi det bare.\n\nMere info:\nElement: " + element + "\nTjek konsollen for trace.")
            console.trace("Noget gik galt med et citat.")
        }

    //Tilføj det computervenlige format til en liste med objekter
    if(multiline === false) {
        //Det er en liste, for at man kan tilføje ekstra citater under.
        citater.push({
            citater: [
                {
                    citat: citat,
                    person: person
                }
            ],
            dato: dato
        })
    } else {
        //Tilføj det her citat til det sidste i listen.
        citater[citater.length-1].citater.push({
            citat: citat,
            person: person
        })
    }
    
}
console.timeEnd("Format")
function showNormalOrder() { //I den rækkefølge, som de er tilføjet.
    console.time("normalOrder")
    var fragment = new DocumentFragment() //Performance grunde...
    var el

    for (let i = 0; i < citater.length; i++) {
        const element = citater[i];
        
        
        el = document.createElement("div")
        el.classList.add("citat")
        el.innerHTML = "<p class='citatDate'><strong>" + element.dato + "</strong></p>"

        for (let o = 0; o < element.citater.length; o++) {
            const citat = element.citater[o];
            el.innerHTML += "<p class='citatNameAndContent'>" + citat.person + ": " + citat.citat + "</p>"
        }

        fragment.appendChild(el)

    }

    document.getElementById("citater").appendChild(fragment)
    console.timeEnd("normalOrder")
}

showNormalOrder()
/*
window.onload = function () {
    console.time("gammel")
    var x = 0
    for (let i = 0; i < rawCitater.length; i++) {
        let src = rawCitater[i].replace(/\: /,'¤').split('¤');
        let person = src[0].replace("+n ", "")
        let citat = src[1];
        if (person == src[0]) {
            document.getElementById("citater").innerHTML += "<br>" + "<p>" + person + ": \"" + citat + "\"" + "</p>";
            x++
        } else {
            document.getElementById("citater").innerHTML += "<p>" + person + ": \"" + citat + "\"" + "</p>";
        }
        

    }
    document.getElementById("citater").innerHTML += "<br>"
    statistics.forskelligecitater = x
    document.getElementById("forskelligecitater").textContent = x

    for (let i = 0; i < rawCitater.length; i++) {
        let src = rawCitater[i].replace(/\: /,'¤').split('¤');
        let person = src[0].replace("+n ", "").split(" ")
        if(src[0].indexOf("+n ") == -1) {
            //nyt citat
            var sidstecitat = false
            if(rawCitater[i+1]) {
                var src2 = rawCitater[i+1].replace(/\: /,'¤').split('¤');
                var person2 = src2[0].replace("+n ", "")
            } else {
                sidstecitat = true
            }
            if(src2[0] == person2 || sidstecitat) {
                //citatet har kun 1 person i
                person.shift()
                person = person.join(" ")
                var winner = String(person)
                if(winner == "") {
                    alert("Noget er galt med citatet" + {src,person,winner})
                }
                //console.log(winner, person[0])
                
                if(statistics.scoreboard[winner]) {
                    statistics.scoreboard[winner] += 1
                } else {
                    statistics.scoreboard[winner] = 1
                }
            }
            
        }
    }

    setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight)
    }, 10);
    console.timeEnd("gammel")
}

//Statistik



function returnSortedArrayFromObject(input) {
    var temp = {...input}
    var output = []
    while (Object.keys(temp).length > 0) {
        var highestYet = {name:"",occurences:-1}
        for (const property in temp) {
            if (input.hasOwnProperty(property)) {
                const element = temp[property];
                if(highestYet.occurences < element) {
                    highestYet.name=property
                    highestYet.occurences=element
                }
            }
        }
        output.push(highestYet)
        delete temp[highestYet.name]
    }
    return output
}

function closeStatistics() {
    document.getElementById("statistics").style.display = "none"
    document.getElementById("showStatistics").style.display = "block"
    document.getElementById("text").style.display = "block"
    
    //document.getElementsByTagName("body")[0].classList.remove("stop-scrolling")
}


function showStatistics() {
    document.getElementById("statistics").style.display = "block"
    document.getElementById("showStatistics").style.display = "none"
    document.getElementById("text").style.display = "none"
    
    window.scrollTo(0,20)
    //document.getElementsByTagName("body")[0].classList.add("stop-scrolling")

    document.getElementById("forskelligecitater2").textContent = statistics.forskelligecitater


    
    //Scoreboard
    statistics.scoreboardforhumans = returnSortedArrayFromObject(statistics.scoreboard)
    var table = document.getElementById("scoreboard")
    if(theme == "dark") {
        table.innerHTML = "<tr><th class='is-dark'>Person</th><th class='is-dark'>Citater</th></tr>"
    } else {
        table.innerHTML = "<tr><th>Person</th><th>Citater</th></tr>"
    }
    
    for (let i = 0; i < statistics.scoreboardforhumans.length; i++) {
        const element = statistics.scoreboardforhumans[i];
        table.innerHTML += "<tr><td>" + element.name + "</td><td>" + element.occurences + "</td></tr>"
    }
}*/