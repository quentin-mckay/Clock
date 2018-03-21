const $secondHand = document.querySelector('.second-hand')
const $minuteHand = document.querySelector('.minute-hand')
const $hourHand = document.querySelector('.hour-hand')

function setDate() {
  const now = new Date()
  const seconds = now.getSeconds()  // gets current seconds in the minute
  const minutes = now.getMinutes()  // gets current minutes in the hour
  const hours = now.getHours();  // gets current hours in the day    // RARE case where we need the semi-colon !!!!
  
  // === second hand === (explicit steps)
  //let secondsDegrees = seconds / 60  // convert to percentage
  //secondsDegrees *= 360  // spread over 360 (convert to degrees)
  //secondsDegrees += 270  // offset: by default 0deg points right so we add 270deg to point up


  // === deal with the "tick over to 0 spin" bug
  // $secondHand.style.transition = seconds === 0 ? 'none' : null
  // $minuteHand.style.transition = minutes === 0 ? 'none' : null
  // $hourHand.style.transition = hours === 0 ? 'none' : null
  [$secondHand, $minuteHand, $hourHand].forEach(el => el.style.transition = (seconds === 0) ? 'none' : null )
  
  let secondsDegrees = seconds * (360 / 60) + 270  // by default 0deg points right so we add 270deg to point up
  $secondHand.style.transform = `rotate(${secondsDegrees}deg)`  // update the DOM element style
  
  // === minute hand ===
  let minutesDegrees = minutes * (360 / 60) + 270  // by default 0deg points right so we add 270deg to point up
  $minuteHand.style.transform = `rotate(${minutesDegrees}deg)`  // update the DOM element style
  
  // === hour hand ===
  let hoursDegrees = (hours / 12) * 360 + 270
  $hourHand.style.transform = `rotate(${hoursDegrees}deg)`  // update the DOM element style


}

setDate() // run when page loads
setInterval(setDate, 1000)  // udpate every 1 second