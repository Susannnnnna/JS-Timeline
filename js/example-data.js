// Example data
var events = [
    {
        id: "001",
        event: "What are the sense?",
        description: "Short description about sensory nervous system. How we can define senses? How many senses we have? How senses works?",
        category: "Brain",
        link: "https://www.neuronaukowiec.com/zmysly/",
        startDate: "2021-10-30",
        endDate: "",
        image: "what-are-the-senses.png"

    },
    {
        id: "002",
        event: "Neurogenetic",
        description: "Neurogenetic is a subfield where scientists study how genetic influences on the development and functioning of the nervous system. The main subject of neurogenetic are neurogenetic ilnesses.",
        category: "Neurogenetic",
        link: "https://www.neuronaukowiec.com/neurogenetyka/",
        startDate: "2021-10-22",
        endDate: "",
        image: "neurogenetic.png"
    },
    {
        id: "003",
        event: "How neurons are formed?",
        description: "The creation of man can be compared to big bang. For relatively homogeneous, small matter, the entire universe is created, which as it expands acquired new features and becomes more and more diverse.",
        category: "Neurogenesis",
        link: "https://www.neuronaukowiec.com/neurogeneza/",
        startDate: "2021-09-05",
        endDate: "",
        image: "how-neurons-are-formed.png"
    },
    {
        id: "004",
        event: "Studying and brain - how it happens that we can learn?",
        description: "How our brain contols our learning? Should we associate learning only with school? How did science help our ancestors survive?",
        category: "Brain",
        link: "https://www.neuronaukowiec.com/uczenie-sie-i-mozg/",
        startDate: "2021-05-08",
        endDate: "",
        image: "studying-and-brain-how-it-happens-that-we-can-learn.png"
    },
    {
        id: "005",
        event: "Psychobiotics - help or fake?",
        description: "Psychobiotics are probiotics and prebiotics which gives you mental health benefits after taking it. It happens through interactions with commensal gut bacteria.",
        category: "Psychobiotics",
        link: "https://www.neuronaukowiec.com/psychobiotyki/",
        startDate: "2020-10-17",
        endDate: "",
        image: "psychobiotics-help-or-fake.png"
    },
    {
        id: "006",
        event: "Dreams - why do we dream such strange things?",
        description: "Dream is one of the most importat things for our body. It is also risky, but it is important enough that it is worth taking the risk!",
        category: "Brain",
        link: "https://www.neuronaukowiec.com/sny/",
        startDate: "2020-04-24",
        endDate: "",
        image: "dreams-why-do-we-dream-such-strange-things.png"
    },
    {
        id: "007",
        event: "Intelligence - what factors have inpact on its level?",
        description: "[pour. intelligentia 'ability to understand', 'reason'] psycho. one of the most ambiguous concepts in psychology relating to cognitive performance; in everyday language, intelligence is most often understood as the ability to solve practical problems, language skills or social competences.",
        category: "Neuroscience",
        link: "https://www.neuronaukowiec.com/inteligencja/",
        startDate: "2020-05-08",
        endDate: "",
        image: "intelligence-what-factors-have-inpact-on-its-level.png"
    },
    {
        id: "008",
        event: "Brain - what you HAVE to know?",
        description: "How to avoid falling victim to overwhelm? What do neuroscience conferences look like? What is the brain?",
        category: "Brain",
        link: "https://www.neuronaukowiec.com/mozg/",
        startDate: "2020-05-01",
        endDate: "",
        image: "brain-what-you-HAVE-to-know.png"
    },
    {
        id: "009",
        event: "Love and brain - the biggest addiction",
        description: "Why we fall in love? Love or infatuation? How do we fall in love?",
        category: "Brain",
        link: "https://www.neuronaukowiec.com/milosc-najwieksze-uzaleznienie-mozgu/",
        startDate: "2020-02-14",
        endDate: "",
        image: "love-and-brain-the-biggest-addiction.png"
    },
    {
        id: "010",
        event: "Neurosurgery - 5 most amazing brain surgeries",
        description: "Callostomy, commisurotomy, hemispherectomy, lobotomy... ",
        category: "Neurosurgery",
        link: "https://www.neuronaukowiec.com/neurochirurgia-5-najbardziej-zadziwiajacych-operacji-mozgu/",
        startDate: "2019-12-13",
        endDate: "",
        image: "neurosurgery-5-most-amazing-brain-surgeries.png"
    }
];


// Showing all example elements in table 
function inputExampleData() {

    
    var table = document.getElementById("outputTable");
    var rows = table.querySelectorAll('tr');
    // var checkIfFirstRowHasData = document.getElementById("outputTable").rows[1].getElementsByTagName('td');

    // alert(table[0].td);
    console.log(rows)

    for (let i = 1; i < (events.length + 1); i++) {

        let newRow = table.insertRow(table.rows.length); 
        
        newRow.insertCell(0).innerHTML = events[i-1].id
        newRow.insertCell(1).innerHTML = events[i-1].event
        newRow.insertCell(2).innerHTML = events[i-1].description
        newRow.insertCell(3).innerHTML = events[i-1].category
        newRow.insertCell(4).innerHTML = events[i-1].startDate
        newRow.insertCell(5).innerHTML = events[i-1].endDate
        newRow.insertCell(6).innerHTML = '<p><a class="link" href="' + events[i-1].link + '">click</a></p>'
        newRow.insertCell(7).innerHTML = ''
    }
}

// Showing elements on timline from the given range
function showTimeline(firstItem, lastItem) {

    // var html1 = '<span class="close" id="<span class="close">&times;</span>';
    var html2 = '<h4>';
    var html3 = '</h4 id="timelineEventTitle"><p>';
    var html4 = '</p><small><a class="navbar-brand" href="';
    //var html5 = ''; 
    var html5 = '"><i>';
    var html6 = '</i></a></small><p>';
    var html7 = '</p>'

    events.sort((events1, events2) => {
        events1 = events1.startDate;
        events2 = events2.startDate;
        if (events1 < events2) {
            return -1;
        }
        if (events1> events2) {
            return 1;
        }
        return 0;
    });

    for ( i = firstItem; i < lastItem; i++)
    {
        // alert(i);
        // document.getElementById('timeline').innerHTML = 
        // html1 + i + html2 + events[i].event + html3 + events[i].startDate + html4 + events[i].description + html5;
        
        var parent = document.querySelector('#timeline');
        var elementDiv = document.createElement('div'); 

        elementDiv.className = 'event';
        elementDiv.id = i;
        elementDiv.innerHTML = html2 + events[i].event + html3 + events[i].startDate + html4 + events[i].link + html5 +  events[i].category + html6 + events[i].description + html7;
        
        parent.appendChild(elementDiv);
    }
}


// Return id element which is visible on website
function getElementId() {
    var elementDivId = document.querySelector('.event').id;
    return parseInt(elementDivId);
}


// TEST
// function getElementId2() {
    // var elementDivId = document.querySelector('.event').id;
    // alert(parseInt(elementDivId));
    // if (events[4].startDate < events[6].startDate) {
    //     alert(events[4].startDate + ' < ' + events[6].startDate);
    // } else if (events[4].startDate > events[6].startDate) {
    //     alert(events[4].startDate + ' > ' + events[6].startDate);
    // }

//     const x = document.getElementById("outputTable").rows[1].getElementsByTagName('td');
//     if (x[1] != '') {
//         alert('puste')
//     } else {
//         alert(x[1].innerText)
//     } 
// }


// Shows next data (you can see only 3 elements on the page!)
function nextData() {
    var currentPageFirstItem = getElementId();
    var futurePageFirstItem = getElementId() + 3;
    var futurePageLastItem = getElementId() + 6;

    if ( (getElementId() + 2) < events.length ) {
    for ( i = 0; i < 3; i++) {
        var elementToRemove = document.getElementById(currentPageFirstItem);
        elementToRemove.remove();
        currentPageFirstItem++;
    };
    showTimeline(futurePageFirstItem,futurePageLastItem);
    };
}


// Shows previews data (you can see only 3 elements on the page!)
function prevData() {
    var currentPageFirstItem = getElementId();
    var futurePageFirstItem = getElementId() - 3;
    var futurePageLastItem = futurePageFirstItem + 3;

    if ( (currentPageFirstItem > 2) ) { // && ((events.length - currentPageFirstItem) > 2) 
        for ( i = 0; i < 3; i++ ) {
            var elementToRemove = document.getElementById(currentPageFirstItem);
            elementToRemove.remove();
            currentPageFirstItem++;
        };
        showTimeline(futurePageFirstItem,futurePageLastItem);

    // } else if ((events.length - currentPageFirstItem) = 0) {
    //     for ( i = 0; i < 1; i++ ) {
    //         var elementToRemove = document.getElementById(currentPageFirstItem);
    //         elementToRemove.remove();
    //         currentPageFirstItem++;
    //     };
    //     showTimeline(futurePageFirstItem,futurePageLastItem);

    // } else if ((events.length - currentPageFirstItem) = 1) {
    //     for ( i = 0; i < 2; i++ ) {
    //         var elementToRemove = document.getElementById(currentPageFirstItem);
    //         elementToRemove.remove();
    //         currentPageFirstItem++;
    //     };
    //     showTimeline(futurePageFirstItem,futurePageLastItem);
    };
}