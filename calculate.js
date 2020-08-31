class Calculate {
  celciusToFahrenheit = (cel) => {
    let result
    result = (Number(cel) * 9 / 5) + 32
    result = result.toFixed(2)
    document.getElementById('celciusToFahrenheitResult').value = result + ' °F'
  }

  celciusToKelvin = (cel) => {
    let result
    result = Number(cel) + 273.15
    result = result.toFixed(2)
    document.getElementById('celciusToKelvinResult').value = result + ' K'
  }

  fahrenheitToCelcius = (fah) => {
    let result
    result = (Number(fah) - 32) * (5 / 9)
    result = result.toFixed(2)
    document.getElementById('fahrenheitToCelciusResult').value = result + ' °C'
  }

  fahrenheitTokelvin = (fah) => {
    let result
    result = (Number(fah) + 459.67) * (5 / 9)
    result = result.toFixed(2)
    document.getElementById('fahrenheitTokelvinResult').value = result + ' K'
  }

  KelvinToCelcius = (kel) => {
    let result
    result = Number(kel) - 273.15
    result = result.toFixed(2)
    document.getElementById('KelvinToCelciusResult').value = result + ' °C'
  }

  KelvinToFahrenheit = (kel) => {
    let result
    result = (Number(kel) * (9 / 5)) - 459.67
    result = result.toFixed(2)
    document.getElementById('KelvinToFahrenheitResult').value = result + ' °F'
  }
}