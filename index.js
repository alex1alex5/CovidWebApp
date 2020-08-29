const cityValue = document.querySelector('.search-location input');
const searchForm = document.querySelector('.search-location');
const cardBody = document.querySelector('.containerCards')
const cardBody2 = document.querySelector('.containerCards2')
update = (city) => {
    console.log(city);
    cardBody.innerHTML = `<div class="container containerCards text-center">
    <h1 class="today m-2">Today</h1>
    <div class="card-deck m-4">
        <div class="card cardDeathToday p-4">
            <h3 class="card-title cardTitleDiedToday">Died Today</h3>
            <h5 class="card-subtitle">${city.deathIncrease}</h5>
        </div>

        <div class="card cardCasesToday p-4">
            <h3 class="card-title cardTitleNew">New Cases</h3>
            <h5 class="card-subtitle">${city.positiveIncrease}</h5>
        </div>

        <div class="card cardRecoveredToday p-4">
            <h3 class="card-title cardTitledRecoveredToday">Hospitalized</h3>
            <h5 class="card-subtitle">${city.hospitalizedIncrease}</h5>
        </div>
    </div>
</div>
`
    cardBody2.innerHTML = `<div class="container containerCards text-center">
    <h1 class="all m-2">Total</h1>

    <div class="card-deck m-4">
        <div class="card cardDeathToday p-4">
            <h3 class="card-title cardTitleDiedToday">Died</h3>
            <h5 class="card-subtitle">${city.death}</h5>
        </div>

        <div class="card cardCasesToday p-4">
            <h3 class="card-title cardTitleNew">New</h3>
            <h5 class="card-subtitle">${city.positive}</h5>
        </div>

        <div class="card cardRecoveredToday p-4">
            <h3 class="card-title cardTitledRecoveredToday">Recovered</h3>
            <h5 class="card-subtitle">${city.recovered}</h5>
        </div>
    </div>
</div>`

}

//event listener added to form
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();//prevent page from refreshing on enter
    const citySearched = cityValue.value.trim();//rm whitespace
    searchForm.reset();//reset the input box

    requestCity(citySearched)   //the url is passed back from reqcity
        .then((data) => {
            update(data);   //pass url api into function called update
        })
        .catch((error) => { console.log(error) })
})