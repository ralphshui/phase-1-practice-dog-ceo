fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((data) => {
        const dogData = data.message;
        dogData.forEach((dog) => {
            renderDogImg(dog);
        })
})

function renderDogImg(dog) {
    const dogImgContainer = document.getElementById("dog-image-container")
    const dogImg = document.createElement("img");

    dogImg.src = dog
    dogImgContainer.append(dogImg)
}
const breedContainer = document.getElementById("dog-breeds")
let allBreedsArray = [];

fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((data) => {
        let dogBreeds = Object.entries(data.message);
        dogBreeds.forEach((dog) => {
            allBreedsArray.push(dog[0]);
        });

        allBreedsArray.forEach((dog) => {
            let allBreeds = document.createElement('li');
            allBreeds.textContent = dog;
            
            allBreeds.addEventListener("click", () => {
                allBreeds.style.color = "orange";
                })

            breedContainer.append(allBreeds);
            firstLetterArrays(dog); 
        })
    })

const aBreed = [];
const bBreed = [];
const cBreed = [];
const dBreed = [];
    
function firstLetterArrays(dog) {
    const firstLetter = dog[0];
        if (firstLetter === 'a') {
            aBreed.push(dog);
        } else if (firstLetter === 'b') {
            bBreed.push(dog);
        } else if (firstLetter === 'c') {
            cBreed.push(dog);
        } else if (firstLetter === 'd') {
            dBreed.push(dog);
        }
}

function renderBreed() {
    breedDisplay.textContent = "";
    breedDisplay.forEach((breed) => {
        const breedList = document.createElement('li')
        breedList.textContent = breed;
        breedList.addEventListener("click", () => {
            breedList.style.color = "orange";
            })

        breedContainer.append(breedList);
    })
}

let breedDisplay = [];
const dropDown = document.getElementById("breed-dropdown")
console.log(dropDown.value)
dropDown.addEventListener("change", () => {
    breedContainer.textContent = "";
    if (dropDown.value === 'a') {
        breedDisplay = aBreed;   
    } else if (dropDown.value === 'b') {
        breedDisplay = bBreed;   
    } else if (dropDown.value === 'c') {
        breedDisplay = cBreed;       
    } else if (dropDown.value === 'd') {
        breedDisplay = dBreed;          
    } else if (dropDown.value === '') {
        breedDisplay = allBreedsArray;
    }
    renderBreed();
})   
