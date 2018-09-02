const WeatherElement = (weatherData) => {
    return `<div class="card col-4 p-0 mb-4 shadow-sm">
        <div class="card-header">
            <h4 class="my-0 font-weight-normal">${weatherData.cityName}</h4>
        </div>
        <div class="card-body">
            <h1 class="card-title">${weatherData.detail}</h1>
            <ul class="list-unstyled mt-3 mb-4">
                <li>High Temp: ${weatherData.highValue}</li>
                <li>Low Temp: ${weatherData.lowValue}</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">See details</button>
        </div>
    </div>`;
};

export default WeatherElement;
