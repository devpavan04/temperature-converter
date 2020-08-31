const calculate = new Calculate

const celciusToFahrenheit = document.getElementById('celciusToFahrenheit'),
  celciusToKelvin = document.getElementById('celciusToKelvin'),
  fahrenheitToCelcius = document.getElementById('fahrenheitToCelcius'),
  fahrenheitTokelvin = document.getElementById('fahrenheitTokelvin'),
  KelvinToCelcius = document.getElementById('KelvinToCelcius'),
  KelvinToFahrenheit = document.getElementById('KelvinToFahrenheit')

celciusToFahrenheit.addEventListener('submit', (e) => {
  const cel = celciusToFahrenheit.children[0].value
  if (cel === '') {
    alert('Enter Celcius value!')
  } else {
    calculate.celciusToFahrenheit(cel)
  }
  e.preventDefault()
})

celciusToKelvin.addEventListener('submit', (e) => {
  const cel = celciusToKelvin.children[0].value
  if (cel === '') {
    alert('Enter Celcius value!')
  } else {
    calculate.celciusToKelvin(cel)
  }
  e.preventDefault()
})

fahrenheitToCelcius.addEventListener('submit', (e) => {
  const fah = fahrenheitToCelcius.children[0].value
  if (fah === '') {
    alert('Enter Fahrenheit value!')
  } else {
    calculate.fahrenheitToCelcius(fah)
  }
  e.preventDefault()
})

fahrenheitTokelvin.addEventListener('submit', (e) => {
  const fah = fahrenheitTokelvin.children[0].value
  if (fah === '') {
    alert('Enter Fahrenheit value!')
  } else {
    calculate.fahrenheitTokelvin(fah)
  }
  e.preventDefault()
})

KelvinToCelcius.addEventListener('submit', (e) => {
  const kel = KelvinToCelcius.children[0].value
  if (kel === '') {
    alert('Enter kelvin value!')
  } else {
    calculate.KelvinToCelcius(kel)
  }
  e.preventDefault()
})

KelvinToFahrenheit.addEventListener('submit', (e) => {
  const kel = KelvinToFahrenheit.children[0].value
  if (kel === '') {
    alert('Enter kelvin value!')
  } else {
    calculate.KelvinToFahrenheit(kel)
  }
  e.preventDefault()
})
