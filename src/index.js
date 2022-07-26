console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl)
        .then(res => res.json())
        .then(data => (data.message).forEach(item => createImg(item)))

    function createImg(item) {
        const dogContainer = document.getElementById("dog-image-container")
        const dogImg = document.createElement('img')
        dogImg.src = item
        dogContainer.appendChild(dogImg)
    }
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    let dogBreeds = []

    fetch(breedUrl)
        .then(res => res.json())
        .then(data => {
            dogBreeds = (Object.keys(data.message))
            createDogList(dogBreeds)
        })

    const dropDown = document.getElementsByName('select-breed')[0]
    dropDown.addEventListener("change", (e) => {
        const maybeList = dogBreeds.filter(item => item[0] === e.target.value)
        createDogList(maybeList)

    })

    function createDogList(items) {
        const breedList = document.getElementById("dog-breeds")

        Array.from(breedList.children).forEach(item => item.remove())


        items.forEach(item => {
            const breeds = document.createElement('li')
            breeds.textContent = item
            breeds.addEventListener('click', (e) => {
                e.target.style.color = 'darkgreen'
            })
            breedList.appendChild(breeds)
        })
    }

})
