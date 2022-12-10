import React from 'react'

const Result = (props) => {

    let content = null;

    if (!props.error && props.city) {
        const sunriseTime = new Date(props.sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(props.sunset * 1000).toLocaleTimeString();
        content = (
            <div>
                <hr/>
                <h2>Pogoda dla: <code><em>{props.city}</em></code></h2>
                <p>Data i godzina: <code>{props.date} {props.time}</code></p>
                <p>Temperatura: <code>{props.temp}&#176;C</code></p>
                <p>Wschód Słońca dzisiaj o: <code>{sunriseTime}</code></p>
                <p>Zachód Słońca dzisiaj o: <code>{sunsetTime}</code></p>
                <p>Wiatr: {props.wind}m/s</p>
                <p>Ciśnienie {props.pressure} hPa</p>
            </div>
            )
    }
    
    return (
        <div className='result'>
            {props.error ? `Nie mamy w bazie ${props.city}` : <h1>{content}</h1>}
        </div>
    )
}

export default Result