const rawCitater = require("./citater").citater
const { performance } = require('perf_hooks')
function parseCitater(raw) {
    var citater = []
    var startTime = performance.now()
    for (let i = 0; i < raw.length; i++) {
        const element = raw[i];
    
    
    
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
    
    
        //Test 1
            if( 
                typeof citat === "undefined" ||
                (typeof dato === "undefined" && multiline === true)||
                typeof person === "undefined"
            ) {
                alert("Der er noget galt med citat " + i + " (tæller fra 0). \nFortæl Vitus om det.\nFor nu ignorerer vi det bare.\n\nMere info:\nElement: " + element + "\nTjek konsollen for trace.")
                console.trace("Noget gik galt med et citat.")
                throw "Fejl på citat " + i + " (index 0-based)"
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
    var time = performance.now() - startTime 
    return {citater, time}
}
var hasErrors = false
//Tests
try {
    parseCitater(rawCitater)
    console.log("Passed test 1")
} catch (error) {
    hasErrors = true
    console.error("Failed test 1: " + error)
}
var citater = parseCitater(rawCitater).citater
try {
    for (let i = 0; i < citater.length; i++) {
        const element = citater[i];
        for (let o = 0; o < element.citater.length; o++) {
            const e = element.citater[o];
            if(String(e.person) == "") throw "Fejl på citat " + i + ", del " + o
        }
    }
    console.log("Passed test 2")

} catch (error) {
    hasErrors = true
    console.error("Failed test 2: " + error)
}
var citater = parseCitater(rawCitater).citater
try {
    for (let i = 0; i < citater.length; i++) {
        const element = citater[i];
        
        if(element.dato.match(/[^0-9\-\?]+/) != null) throw "Fejl på citat " + i
    }
    console.log("Passed test 3")

} catch (error) {
    hasErrors = true
    console.error("Failed test 3: " + error)
}
try {
    for (let i = 0; i < citater.length; i++) {
        const element = citater[i];
        for (let o = 0; o < element.citater.length; o++) {
            const e = element.citater[o];
            if(e.person.match(/:/)) throw "Fejl på citat " + i + ", del " + o
        }
    }
    console.log("Passed test 4")
} catch (error) {
    hasErrors = true
    console.error("Failed test 4: " + error)
}

console.log("")
try {
    for (let i = 0; i < citater.length; i++) {
        const element = citater[i];
        for (let o = 0; o < element.citater.length; o++) {
            const e = element.citater[o];
            if(e.person[0].match(/[a-zæøå]/)) throw "Fejl på citat " + i + ", del " + o
        }
    }
    console.log("Passed spelling & grammar 1")
} catch (error) {
    console.error("Failed spelling & grammar 1: " + error)
}
try {
    for (let i = 0; i < citater.length; i++) {
        const element = citater[i];
        for (let o = 0; o < element.citater.length; o++) {
            const e = element.citater[o];
            if(e.citat[0].match(/[a-zæøå]/)) throw "Fejl på citat " + i + ", del " + o
        }
    }
    console.log("Passed spelling & grammar 2")
} catch (error) {
    console.error("Failed spelling & grammar 2: " + error)
}

console.log("")

if(hasErrors == false) {
    var totalTime = 0
    var runs = 0
    for (let i = 0; i < 1000; i++) {
        totalTime += parseCitater(rawCitater).time
        runs += 1
    }
    console.log("Average parse time: " + (totalTime/runs) + "ms")
    console.log("Over 1000 runs " + totalTime + "ms")
}
