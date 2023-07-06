let favNum = [3,5,7,9];
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favNum}?json`).then(data => {
    let arr = [];

    for (let i = 0; i < favNum.length; i++) {
        arr.push(data[favNum[i]]);
    }
    console.log(arr);
    let facts = document.getElementsByTagName("li"); 
    for (let i =0; i<facts.length;i++) {
        facts[i].innerHTML = arr[i]
    }
});

// let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

// axios
//     .get(url)
//     .then(res => {
//         let deck_id = res.data.deck_id
//         console.log(deck_id)
//         axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
//             .then(res => {
//                 console.log(res.data.cards[0].suit);
//                 console.log(res.data.cards[0].value);
//             })
//         axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
//             .then(res => {
//                 console.log(res.data.cards[0].suit);
//                 console.log(res.data.cards[0].value);
//             })
//     })

//     // 2.