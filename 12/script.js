const buttonsList = document.querySelectorAll('.faq-toggle')
console.log(buttonsList.parentNode)

buttonsList.forEach((button) => {
  button.addEventListener('click', () =>
    button.parentNode.classList.toggle('active')
  )
})
