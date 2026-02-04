const generatorBtn = document.querySelector('.generator-btn')
const inputEl = document.querySelector('#input-el')


generatorBtn.addEventListener('click', () => {
  generatingPassword()
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


