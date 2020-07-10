const celFarForm = document.getElementById('cel-far')
const farCelForm = document.getElementById('far-cel')
const celciusInput = document.getElementById('celciusNumber')
const fahrenheitInput = document.getElementById('fahrenheitNumber')
const farResult = document.getElementById('farResult')
const celResult = document.getElementById('celResult')
const celtofarImg = document.getElementById('celtofarImg')
const fartocelImg = document.getElementById('fartocelImg')


celFarForm.addEventListener('submit', (e) => {
  celtofarImg.style.display = 'block'
  setTimeout(calculateCelToFar, 2000)
  e.preventDefault()
})

farCelForm.addEventListener('submit', (e) => {
  fartocelImg.style.display = 'block'
  setTimeout(calculateFarToCel, 2000)
  e.preventDefault()
})

function calculateCelToFar() {
  if (celciusInput.value == '') {
    alert('Enter celcius value')
  } else {
    const farValue = celciusInput.value * 1.8 + 32
    farResult.value = farValue + " °F"
  }
  celtofarImg.style.display = 'none'
}

function calculateFarToCel() {
  if (fahrenheitInput.value == '') {
    alert('Enter fahrenheit value')
  } else {
    const celValue = (fahrenheitInput.value - 32) / 1.8
    celResult.value = celValue + " °C"
  }
  fartocelImg.style.display = 'none'
}