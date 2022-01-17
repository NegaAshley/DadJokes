//The comments section is just trying different ways of fetching from various APIs.

// fetch("https://api.cryptonator.com/api/full/btc-usd")
//     .then(res => {
//         console.log("RESPONSE, waiting to parse...", res);
//         return res.json();
//     }).then(data => {
//         console.log("Data parsed...", data);
//         console.log(data.ticker.price);
//     })
//     .catch(e => {
//         console.log("Oh no! ", e);
//     });

// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await fetch('https://api.cryptonator.com/api/full/btc-usd');
//         const data = await res.json();
//         console.log(data.ticker.price)
//     } catch (e) {
//         console.log("Error!", e);
//     }
// }

// axios.get('https://api.cryptonator.com/api/full/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price);
//     })
//     .catch(err => {
//         console.log("Error! ", err);
//     });

// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/full/btc-usd')
//         console.log(res.data.ticker.price);
//     }
//     catch (err) {
//         console.log("Error! ", err);
//     }
// }

// const getDadJoke = async () => {
//     const config = { headers: { Accept: 'application/json' } };
//     const res = await axios.get('https://icanhazdadjoke.com/', config);
//     console.log(res);
// }


// const config = { headers: { Accept: 'application/json' } };
// axios.get('https://icanhazdadjoke.com/', config)
//     .then(res => {
//         const newLI = document.createElement('LI');
//         newLI.append(res.data.joke);
//         console.log(res.data.joke);
//         dadJokes.append(newLI);
//     })
//     .catch(err => {
//         console.log("Error: ", err);
//     });

const dadJokes = document.querySelector('#dadJokes');
const getNewDadJokeButton = document.querySelector('#getNewDadJokeButton');


getNewDadJokeButton.addEventListener('click', function () {
    const config = { headers: { Accept: 'application/json' } };
    axios.get('https://icanhazdadjoke.com/', config)
        .then(res => {
            const newLI = document.createElement('LI');
            newLI.append(res.data.joke);
            console.log(res.data.joke);
            dadJokes.append(newLI);
        })
        .catch(err => {
            console.log("Error: ", err);
        });
});

