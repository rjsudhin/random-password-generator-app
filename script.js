const copyBtnEl = document.querySelector('#copy-btn')
const inputEl = document.querySelector('#input-el')
const generatorBtn = document.querySelector('.generator-btn')

inputEl.value = '' // loads first time in emtpy

generatorBtn.addEventListener('click', () => {
  generatingPassword()
})


copyBtnEl.addEventListener('click', () => {
  if (inputEl.value != '') {
    let copyText = inputEl.value // get the text content from the field
  
    // use the clipboard API to write the text to the clipboard
    navigator.clipboard.writeText(copyText).then(function() {
      // Optional: Alert the user or provide visual feedback
      showMessage()
    }).catch(function(err) {
      console.err('unable to copy', err)
    })
  }
})

function generatingPassword() {
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charLength = 14
  let pwd = ''
  for (let i = 0; i < charLength; i++) {
    pwd += char.charAt(Math.floor(Math.random() * char.length))
  }

  // showing the input screen to generated password
  inputEl.value = pwd
}




function showMessage() {
  const outputScreen = document.querySelector('.output')
  outputScreen.textContent = 'Copied'

  outputScreen.classList.add('visible-message')

  setTimeout(() => {
    outputScreen.classList.remove('visible-message')
    outputScreen.textContent = ''
  }, 3000)
}