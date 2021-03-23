var statistics = {
    forskelligecitater: 0,
    scoreboard: {
        
    },
    scoreboardforhumans: [

    ]
}



var citater = [
    "??-??-???? Random person fra rollespil: Hvorfor kyssede du hende ikke?",
    "{ML}Alfred: Fordi vi var til rollespil, og det ville være meget underligt.",
    "{ML}Random person: Det er dårligt rollespil!",
    "??-??-???? Vitus: Det er ikke en kappe, det er en tabard!",
    "??-??-2019 Emil: Piger er nogle girakkere.",
    "??-??-2019 Leo (fra N): vi har nok den mest almindelige klasse på årgangen",
    "{ML}Malthe: lå lå lå lålålålålålå vi har fransk... vi skal mobbe Alia!",
    "??-??-2020 Benjamin: Jeg kan skabe en ny sol igennem mine anal rør.",
    "??-??-2020 Aske: Jeg ved ikke hvordan ørnes parrringsdans virker!",
    "{ML}Alfred: To ørne mødes har sex og smutter igen. ",
    "{ML}Benjamin: Jeg vil gerne være en ørn så!",
    "??-??-2020 Siri (Alfreds lillesøster): JEG VIL IND I DIG!",
    "29-04-2019 Alfred: ... jeg er meget dybt koncentret i at skrive på et whiteboard.",
    "30-04-2019 Emil: Tænk hvis puden slår igen.",
    "01-05-2019 Emil: Jeg vil til darnhall.",
    "01-05-2019 Rune: Vi ruller lige heroppe.",
    "10-05-2019 Emil: ... han har snakket med kinesere.",
    "07-06-2019 Alfred: Det arger mig at Hitler ikke går i arv.",
    "14-06-2019 Emil: (peger på Alfred) Dit navn er Albert Charlie...",
    "05-08-2019 Benjamin: Yay! 98",
    "06-08-2019 Benjamin: Farven var brun da jeg kiggede på den igår.",
    "06-08-2019 Alfred: Den der lyskore, der kun er farlig når man stikker med den",
    "07-08-2019 Rune: Hvis du vil hårdt nok, så kan du det med alle instrumenter",
    "{ML}Benjamin: Hvad med en didgeridoo?",
    "07-08-2019 Emil: I er godt klar over, at jo flere i spiser, jo hurtigere er den tom",
    "07-08-2019 Benjamin: Den her popcorn smager lidt af gummi",
    "{ML}Alfred: Det er fordi at den er gummi agtig.",
    "{ML}Rune: Det sagde hun også igår.",
    "09-08-2019 Alfred: De er mest røvhul.",
    "12-08-2019 Alfred: Du sagde at du ville være med i dem.",
    "{ML}Benjamin: Men jeg vil ikke have en hat!",
    "12-08-2019 Adrian: Nimar er en jerk.",
    "12-08-2019 Emil: Er det dig der hedder stark?",
    "12-08-2019 Adrian: Hvis man tager alting ud af kontekst så tror man at vi er sådan nogen maniacs",
    "12-08-2019 Adrian: Yoda siger: \"Hvis at du vil have min ananas, så skal du give mig 30 kroner\"",
    "12-08-2019 Alfred: Jeg siger at du er blå!",
    "{ML}Adrian: Jeg siger at du er grøn!",
    "12-08-2019 Adrian: Jeg vidste ikke at fisgur var inden for sex.",
    "12-08-2019 Alfred: Jeg kan altså ikke se ideen med det der (slår på Adrian med en pude).",
    "12-08-2019 Adrian: Nej jeg er ikke fisgur!",
    "12-08-2019 Vitus: Men vi vil have en millitærbase!",
    "13-08-2019 Alfred: Piger er så fucking udspekulerede.",
    "{ML}Alfred: Hun er ligesom Hermione Granger!",
    "13-08-2019 Adrian: Nej det må du ikke Yoda!",
    "{ML}Adrian: Du må ikke sælge mig ananas!",
    "13-08-2019 Laura: Du er så fucking provokerende",
    "{ML}Emil: Ja, det er det jeg kan.",
    "13-08-2019 Tristan: Det forstår jeg intet af.",
    "{ML}Emil: Banan 39 46 Jørgen",
    "13-08-2019 Alfred: Fuck dig, hele din famillie, alt hvad du står for og alt hvad du har opnået hele dit liv!",
    "14-08-2019 Edina (Tidligere matlærer): Nej, 1 divideret med 5 er ikke 1.",
    "13-08-2019 Carla (en tidligere klassekammerat): Lad være, jeg har selv stjålet den!",
    "13-08-2019 Martin (Tidligere dansklærer): Jeg bruger ikke meget af min hjernekapacitet på at tænke over, hvad dumme mennesker gør og ikke gør.",
    "14-08-2019 Adrian: Vidste du at djorka er et synonym for min far er bedre end din far?",
    "{ML}Alfred: Ja det er rigtigt fordi Ragiiiil!",
    "15-08-2019 Thilde (fra S): Lad ham sove, ellers så dør han!",
    "15-08-2019 Elton: (lugter til en squishy) Ad den stinker... Den er giftig!",
    "16-08-2019 Benjamin: Halvejs igennem hoppet, huskede jeg at jeg kun havde 1 liv...",
    "20-08-2019 Lili-Luna: Kan i ikke lige have sex et andet sted?",
    "26-08-2019 Alfred: Man skulle forfanden tro at du står i ledtog med Dansk Folkeparti.",
    "29-08-2019 Rune: Glæd dig til at jeg får flere liv end dig.",
    "{ML}Jakob: Nej, du må ikke skifte karekter, jeg eeelsker dig!",
    "30-08-2019 Vitus: Don't give the dragon an existential crisis.",
    "30-08-2019 Adrian: Kan vi ikke sige, at jeg har en backpack med mine hoveder i?",
    "30-08-2019 Rune: Jeg kan ikke fejle.",
    "{ML}Emil: Whaao, stem på mig.",
    "30-08-2019 Rune: Giv mig noget kattemad, så kan vi finde ud af det.",
    "02-09-2019 Vitus: Er det nu et achivement at narre mig?",
    "{ML}Benjamin: Jeg har et achivement på dig: At dræbe dig to gange",
    "03-09-2019 Elton: Jeg leger at jeg er retaderet.",
    "19-08-2019 Villads W: Det er ikke din sexdukke, Chanel",
    "29-08-2019 En eller anden rollespiller: Fuck ragil.",
    "{ML}Alfred: NEEJ, du må ik kysse min ragil!",
    "13-09-2019 Vitus: Hvor er mine ører?",
    "13-09-2019 Emil: Romerriget og Nazityskland sat sammen og sat ind i middelalderen, så har du Emyr.",
    "20-09-2019 Alfred: Du ved godt at jeg har et oneshot sværd ik?",
    "25-09-2019 Vores kodelærer i skolen: ... og så kan man jo lave et intelligent æg.",
    "27-09-2019 Random lille pige: Jeg er ikke lille, jeg går allerede i første klasse",
    "30-09-2019 Leo (Vitus' lillebror): Ja, præsist han er fattig, så vi skal bare smide ham ud",
    "30-09-2019 Alfred: I virkeligheden, når nej Warhammer",
    "08-10-2019 Rune: Det er ligemeget, det er min drage, hun gør hvad jeg siger",
    "11-10-2019 Emil: Som person er vitus vidstnok printet af sine forældre",
    "11-10-2019 Alfred: Du skal heller ikke inhalere en orm, bare fordi den er der!",
    "25-10-2019 Benjamin: Jeg gider ikke gå igennem puberteten igen.",
    "28-10-2019 Emil: Jeg har ikke tænkt mig at tave pave snakken lige nu.",
    "07-11-2019 Emil (fra N): Din filipinske fisk!",
    "08-11-2019 Vitus: Vi skal købe flere børn, så vi kan avle dem",
    "08-11-2019 Emil: Man rør ikke bare med en tohåndshammer",
    "08-11-2019 Benjamin: It's not rape, it's surprice sex",
    "08-11-19 Adrian: Tak for barnet",
    "{ML}Alfred: Det sagde hun også igår",
    "15-11-2019 Mikkel (Tidligere dansklærer): Yakup, skal jeg seriøst konfiskere din sko?",
    "19-11-2019 Mikkel (Tidligere dansklærer): Nej nu blev den lidt for lang, så gør vi det igen",
    "19-11-2019 Mikkel (Tidligere dansklærer): Yakup, tror du også at den skal derind?",
    "{ML}Yakup: Nej jeg ved ikke hvor den skal ind!",
    "26-11-2019 Vitus: i har nu adgang til slaver",
    "Laura 26-11-2019: Ej hvor er du voldsom du siger piksvin",
    "{ML}Benjamin: Ja, til mine venner. Det må man godt gøre.",
    "29-11-2019 Alfred: Bare rolig, alt er under kontrol, jeg er ved at blive fanget",
    "02-12-2019 Benjamin: Han gemmer den mellem benene!",
    "{ML}Vitus: Det sagde hun også igår",
    "02-12-2019 En fra M3: how do you say \"its not rape if im swag\" in danish?",
    "01-09-2020 Willas fra Adrians klasse: Hygge er drugs",
    "03-12-2019 Asger M: Lederen af bortløbene slaver skal knippes 3 gange og derefter hænges",
    "04-12-2019 Alfred: Mor og morder minder om hinanden",
    "{ML}Ferdinand: Ja, hvis de har fået en abort",
    "05-12-2019 Luca: Jeg kunne ikke se dig, du er helt sort",
    "06-12-2019 Aske: Sex er en full action",
    "06-12-2019 Vitus: Alfred, er mine tænder skarpe?",
    "{ML}Alfred: Jeg kender svaret, men vil ikke sige det",
    "07-12-2019 Ferdinand: Så det du siger er at, Maria er blevet phykisk voldtaget af gud?",
    "10-12-2019 Aske: Okay, sig til din far at vi har givet dig opgaven som husslave fordi at du er kvinde",
    "11-12-2019 Mikkel (Tidligere dansklærer): Elton, skal jeg seriøst konfiskere din soya?",
    "12-12-2019 Laura: Shit en rapunsel wannabe",
    "12-12-2019 Alfred: Vitus jeg bider i den",
    "12-12-2019 Alfred: Jeg kunne rent faktisk ikke mærke ham",
    "13-12-2019 Aske: Det er fast luft som ikke gør ondt.",
    "13-12-2019 Adrian: Hvor meget salt har du lige?",
    "{ML}Aske: Uendeligt, jeg har havet!",
    "13-12-2019 Emil: Det har vi jo snakket om at jeg ikke må fortælle i kuglen.",
    "13-12-2019 Emil som en karekter: Nej herre, du kan ikke snyde mig.",
    "{ML}Adrian: Nå, men så hypnotiserer jeg ham",
    "13-12-2019 Mikkel (Tidligere dansklærer): Nogen af jer der har været i et fattigt land?",
    "{ML}Yakup: Jeg har været hjemme hos Noah",
    "13-12-2019 Vitus: Man laver altså ikke highfive efter et mord.",
    "20-12-2019 Alfred: og så havde adrian selvfølgelig tøj på, i forhold til mig",
    "20-12-2019 Alfred: Elverfyr, tag tøjet af og skaf dig en sele",
    "20-12-2019 Alfred: På det tidspunkt havde han bukserne halvt på.",
    "03-01-2020 Thor fra adrians klasse: Adrian gulerøderne har speedos på!",
    "14-01-2020 Alfred: Der er bryllup ude til life.",
    "{ML}Aske: Er der bryllup?",
    "{ML}Alfred: Ja og det er dårligt rollespil hvis de ikke kysser.",
    "{ML}Aske: Jeg kysser bruden",
    "07-02-2020 Alfred: De er børn, derfor skal de dø",
    "07-02-2020 Rune: Du vil dræbe børn!",
    "{ML}Alfred: Ja, hvad er problemet?",
    "07-02-2020 Aske: Ja vi må gerne slå kvinder ihjel, det er ligemeget",
    "07-02-2020 Alfred: Hvis det er kvinder kan det jo ikke være mænd",
    "20-02-2020 Benjamin: Nårh ja, den her chili brænder jo bare!",
    "Edina (Tidligere matlærer): Hvor mange søskende har du asger?",
    "{ML}Asger m: Halvanden",
    "21-02-2020 Aske og Rune: HoP inD i BilEn!",
    "21-02-2020 Alfred: Jeg har fået fri, jeg nægter at vide ting!",
    "02-03-2020 Alfred: skrub ud af mit hus din klamme ting",
    "03-03-2020 Asger M: Ulven er kønsforvirret",
    "07-03-2020 Sigurd: Jeg er ikke deep, jeg er en fucking pige!",
    "23-05-2020 Alfreds 7-årige kusine: Ja, vi skal da have noget mere øl!",
    "24-03-2020 Adrian: Jeg så noget klamt i min kugle!",
    "24-03-2020 Benjamin: Nej lars, du skal ikke spise ledningen!",
    "13-05-2020 Rune: Skal du have hvid maling for så skaffer jeg det",
    "11-06-2020 Benjamin: Min hjerne er ikke klog! Folk tror min hjerne er klog, men det er den ikke!",
    "23-05-2020 Rune: Jeg kan svinge en yoyo op i dilleren hvis jeg får noget for det.",
    "06-07-2020 Rune: Vi bliver jagtet af odense fodboldklub!",
    "06-07-2020 Rune: Kom her DF! Nu skal du dø!",
    "06-07-2020 Adrian: De sidder bare alle sammen og gangbanger en sten",
    "14-08-2020 Adrian: Jeg er ikke alkoholiker, jeg er en dværg",
    "14-08-2020 Vitus: Men, jeg kan ikke købe sjov med taknemmelighed",
    "14-08-2020 Aske: Så gå væk, din store lækre bacon",
    "15-08-2020 Rune: Så der bajer til far mand",
    "28-08-2020 Marta: Lad os gøre alfred til en mand",
    "28-08-2020 David: Madicken, du skal ikke sidde og bide. I må ikke savle på hinanden under coronatiden.",
    "31-08-2020 Rehan: Du er den eneste der har tysk her! Din hitler fan!",
    "03-09-2020 Rehan: Giv mig min stabber, jeg skal stabbe",
    "03-09-20 En pige fra adrians klasse: Dem der har fået 10 skal dø",
    "04-09-2020 Yakup: Sæt dig ned din fucking træstamme! Gå tilbage til randers regnskov med dig!",
    "04-09-2020 Alfreds biologilærer: Jaja, hver weekend så sætter jeg mig på bænkene, drikker nogle øl og graver nogle huler. Don't do drugs, kids!",
    "04-09-2020 Aske: hvem har størst chance for at have sex i en bil?",
    "{ML}Aske: Noah, det er de nigarianske metoder",
    "07-09-2020 Aske: jeg bliver nød til at vide hvordan man simper!",
    "14-09-2020 Adrian: Ytringsfrihed er overvurderet",
    "16-09-2020 Marta: Det er politisk ukorrekt at sige spåkone",
    "17-09-2020 Yakup: Han bliver voldtrakteret af 4 tyre om dagen for at få børn",
    "18-09-2020 Jens (en lærer i skolen): Den er teknisk set skolens stol...",
    "{ML}Yakup: Nej jeg har selv sat navneskilt på!!",
    "18-09-2020 Jens (lærer i skolen): Og nej du må selvfølgelig ikke tage andre folks stole Yakup",
    "25-09-2020 Emil: Og så føles den varm og pelset",
    "{ML}Alfred: Det sagde hun også i går!",
    "27-09-2020 Alfred og Aske: (overfalder benjamin)",
    "{ML}Aske: Bare rolig, det er bare bromance",
    "{ML}Benjamin: Det her er ikke bromance, det er brape",
    "02-10-2020 Aske: Prøv at høre, vi vil ikke have en alliance med Nordkorea og DF!",
    "02-10-2020 Aske: Hvis det her ikke havde været et børnevenligt rollespil, ville jeg have en pisse god ide til hvordan vi kunne lokke folk til byen",
    "{ML}Emil: Hvornår har det her nogensinde været et børnevenligt rollespil?",
    "02-10-2020 Alfred: Jeg synes at Åndernes herre skal få uendeligt kost og logi i vores slot",
    "{ML}Vitus: I vores <i>horehus</i>, ikke vores slot.",
    "02-10-2020 Alfred: Det eneste vi mangler er bare en fucking sump!",
    "02-10-2020 Aske: Skider vi i en <i>tornebusk</i>?",
    "02-10-2020 Aske: Nogle grundlæg et horehus, jeg gider ikke, det er uærefuldt.",
    "{ML}Alfred: Jeg gør det!",
    "02-10-2020 Alfred: Hvad hedder hun?",
    "{ML}Aske: Jeg ved det ikke!",
    "{ML}Rune: Hun hedder Caroline!",
    "02-10-2020 Aske: Nå, I er her?",
    "{ML}Rune: Velkommen til mit land!",
    "05-10-2020 Marcus: Giv mig nogle piger!",
    "06-10-2020 Rune: jeg læser fucking sovjetisk propaganda",
    "06-10-2020 Christian: hun sagde aldrig stop.",
    "{ML}Benjamin: det sagde han også i går",
    "09-10-2020 Alfred: Kys hende for Flarns navn!",
    "09-10-2020 Aske: Er det her en sædbank eller et bryllup?",
    "09-10-2020 Rune: De blev begge to smidt som børn.",
    "{ML}Emil: Hvad mener du?",
    "{ML}Rune: Ja, altså deres forældre spillede stangtennis med dem.",
    "12-09-2020 Alfred: Altså, jeg vil mene at hun bare gjorde ting på mig og jeg resistede bare ikke",
    "14-10-2020 Rune: Du er Osama Bin Laden øremorder",
    "18-10-2020 Rune: Jeg voldtager de her børn",
    "21-10-2020 Marta: Man kan ikke se hvor stor den er!",
    "22-10-2020 Yakup: Rune din pik!",
    "{ML}Aske: Rune er ikke en pik han er en pære!",
    "25-10-2020 Aske: NEJNEJ, hvorfor bygger den ikke?",
    "25-10-2020 Vitus: Så! Nu knuldrer de!",
    "{ML}Aske: Bliver de liderlige nu?",
    "{ML}Vitus: Ja!",
    "{ML}Aske: Fuck hvor fedt!",
    "2-11-2020 Benjamin: En øl så kysser vi.",
    "{ML}Aske: Et gram så går vi hele vejen!",
    "03-11-2020 Alfred: aehhh Aske... hvis jeg havde været en pige havde jeg fuldstændigt gennemsnavet dig...",
    "{ML}Aske: Hvorfor det?",
    "{ML}Alfred: jeg er ved at dø af tørst, og jeg skal bruge noget positivt i mit liv!",
    "06-11-2020 Rune: Emiiiil! Adrian styrker fællesskabet",
    "06-11-2020 Adrian: Mobning styrker fællesskabet",
    "06-11-2020 Adrian: Jeg kommer fra sverige! Skal du have noget snus?",
    "16-11-2020 Yakup: Jeg vil altid have at folk slås mere, for så har jeg noget at grine af!",
    "14-11-2020 Rune: Det er lidt som at have en 7eleven i et hospital det ved jeg godt...",
    "17-11-2020 Anne-Mette: Yakup, hvorfor har du så mange tasker?",
    "{ML}Yakup: Jeg skal springe skolen i luften",
    "19-11-2020 Shoto: Jeg har fanget Åndernes Herre!",
    "{ML}Sandrian: Hvad fanden laver den kultist i min kirke?",
    "20-11-2020 Aske: Runse, vær lige uenig i Alfred og Vitus' meninger om at jeg har en chance i livet!",
    "{ML}Rune: Det har du ikke.",
    "{ML}Aske: Tak, Runse",
    "20-11-2020 Adrian: Gider I ikke lade være med at kysse midt i ritualet?",
    "20-11-2020 Aske: Kan jeg låne dine kreditkort informationer?",
    "{ML}Rune: Du Får DEm TiLBagE iMorGeN",
    "23-11-2020 Vores biologilærer (Nanna): Ja, men hvad skal hunnen?",
    "{ML}Milo: Jeg ved det ikke, hun skal bolle?",
    "24-11-2020 Thilde (fra N): Jeg tror, jeg skal have noget botox på hagen",
    "24-11-2020 Otto: Altså jeg har ikke tal på hvor mange gange han har prøvet at kneppe mig",
    "24-11-2020 Adrians Kemi lærer: Så skal i tage nogle stoffer",  
    "25-11-2020 Yakup: Jeg brænder gingeren!",
    "25-11-2020 Aske: Ja, og derfor må du finde dig i voldtægt",
    "26-11-2020 Aske: Jeg føler at jeg er mere weird om aftenen",
    "{ML}Alfred: Der er jo en grund til at man har sex om aftenen ik?",
    "26-11-2020 Sigurd: Otto, din klasse er retaderet.",
    "{ML}David: Nej, de er bare mentalt udfordret.",
    "27-11-2020 Peter: Jeg kunne tage til Afrika, gokke 5 gange og tage tilbage igen på den tid!",
    "1-12-2020 aske: De er virkeligt rare at slappe de her!",
    "{ML}Amalie: så skulle du prøve en rigtig balle!",
    "03-12-2020 David (vores matematik lærer): Hvem fanden har voldtaget musen?",
    "17-12-2020 Sofie: Det er den alder nogle af jer får næste gang.",
    "{ML}Selina: 10?",
    "{ML}Sofie: Nej, vi snakker ikke mentalt her.",
    "26-12-2020 Alfred: Har du fundet weed i skibet?",
    "27-11-2020 Vitus: Nårh ja, det føles lidt som at smutte mandler",
    "27-11-2020 Alfred: Kan du ikke lade være med at misbruge min drikkedunk?",
    "27-11-2020 Aske: Det er rart at røre runes underdeller",
    "27-11-2020 Alfred: Jeg har ikke nogen deller, lad være med at røre min navle!",
    "01-01-2021 Rune: Tror du Katy Perry har en diamant pik?",
    "04-01-2021 viggo: jeg håber det er en kontroleret skovbrænd jeg laver...",
    "06-01-2021 Sigurd: (læser citatlisten) Hvem er Amalie? I kender da ikke nogle piger?",
    "Vitus: (grinende) Det er en pedagog på klubben",
    "Sigurd: Nååh",
    "06-01-2021 Sigurd: Evigflamme... Det er sådan et indianer navn",
    "{ML}Rune: INDIANER??",
    "25-01-2021 Siri (Alfreds lillesøster): jeg vil kilde dig på hele din krop. BÅDE UDENPÅ OG INDEN I DIG!",
    "26-01-2021 Anne-Mette: ... De har jo fået historien efter at det er sket.. Rune, læg lige din pistol fra dig, tak",
    "27-01-2021 Aske: Jeg kan ikke lide ikke at være den mest intelligente",
    "{ML}Rune: Så må du skifte race",
    "04-02-2021 Aske: Lad mig lige gamble hundrede tusinde.",
    "{ML}Vitus: Nej, Aske, du bliver ludoman",
    "{ML}Aske: Nejnej, jeg better lige to hundrede tusinde",
    "05-02-2021 Anne-Mette: Benjamin, når du bruger memes, hvor bruger du dem så?",
    "03-03-2021 Rune: Jeg er girakker, jeg er ikke rall indtager",
    "09-12-2020 Anne-Mette (lærer): Nej, Ferdinan, vi gider ikke mere gud!",
    "10-03-2021 Alfred: Hvorfor har du stjålet mit toiletpapir, Lili?",
    "10-03-2021 Adrian: Det der magnetisme, er det magnetisme?",
    "11-03-2021 Sofie: Det kan være, at I ser nogle piger.",
    "19-03-2021 Anne-Mette: Jeg, jeg ved da godt hvad en virgin er, men hvad har det med reddit at gøre?",
    "20-03-2021 Benjamin: Nej, Lenny er ikke død, han har bare fået et sværd igennem ryggen.",
    "22-03-2021 Aske: Aiolien flyder fandme!",
    "23-03-2021 Benjamin: Du misser meget, når du ikke sover med os.",
    "23-03-2021 Emil: Hun er blevet overfaldet af en hær af brændende babyer",
]
window.onload = function () {
    var x = 0
    for (let i = 0; i < citater.length; i++) {
        var src = citater[i].replace(/\: /,'¤').split('¤');
        var person = src[0].replace("{ML}", "")
        var citat = src[1];
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

    for (let i = 0; i < citater.length; i++) {
        var src = citater[i].replace(/\: /,'¤').split('¤');
        var person = src[0].replace("{ML}", "").split(" ")
        if(src[0].indexOf("{ML}") == -1) {
            //nyt citat
            var sidstecitat = false
            if(citater[i+1]) {
                var src2 = citater[i+1].replace(/\: /,'¤').split('¤');
                var person2 = src2[0].replace("{ML}", "")
            } else {
                sidstecitat = true
            }
            if(src2[0] == person2 || sidstecitat) {
                //citatet har kun 1 person i
                person.shift()
                person = person.join(" ")
                winner = String(person)
                if(winner == "") {
                    console.warn({src,person,winner})
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
    if(theme = "dark") {
        table.innerHTML = "<tr><th class='is-dark'>Person</th><th class='is-dark'>Citater</th></tr>"
    } else {
        table.innerHTML = "<tr><th>Person</th><th>Citater</th></tr>"
    }
    
    for (let i = 0; i < statistics.scoreboardforhumans.length; i++) {
        const element = statistics.scoreboardforhumans[i];
        table.innerHTML += "<tr><td>" + element.name + "</td><td>" + element.occurences + "</td></tr>"
    }
}
