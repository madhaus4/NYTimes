const getData = (category) => {
  fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=5EdWhsnyQbSNLLfvv9XAl96fXPastXTg`)
}

export default getData;




// API_KEY = '5EdWhsnyQbSNLLfvv9XAl96fXPastXTg'