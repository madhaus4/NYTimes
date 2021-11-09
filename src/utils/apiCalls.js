export const getData = (category) => {
  fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=5EdWhsnyQbSNLLfvv9XAl96fXPastXTg`)
    .then(res => res.json())
    .then(data => console.log('data: ', data.results))
}






// API_KEY = '5EdWhsnyQbSNLLfvv9XAl96fXPastXTg'