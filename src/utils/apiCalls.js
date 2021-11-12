export const getData = (category) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=5EdWhsnyQbSNLLfvv9XAl96fXPastXTg`)
    .then(res => res.json())
}



