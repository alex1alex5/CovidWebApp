//info will change based on user input (city)
//build the api url to pass back to index
const requestCity = async (city) => {
    const baseUrl = 'https://api.covidtracking.com/v1/states'
    const query = `/${city}/current.json?=state=${city}`;
    const response = await fetch(baseUrl + query);
    const data = await response.json();
    return data;
}