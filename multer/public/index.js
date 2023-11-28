getTodos()

const form = document.querySelector('#form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const todo = document.querySelector('#todo').value
  postData('http://localhost/api/todo', { todo: todo }).then((donnees) => {
    console.log(donnees) // Les données JSON analysées par l'appel `donnees.json()`
    document.querySelector('#form').reset()
    location.reload()
  })
})
document.querySelector('#list').addEventListener('click', (e) => {
  deleteTodo(e.target.id).then((data) => {
    console.log(data)
    location.reload()
  })
})


async function postData(url = 'http://localhost/api/todo', donnees = {}) {
  // Les options par défaut sont indiquées par *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(donnees), // le type utilisé pour le corps doit correspondre à l'en-tête "Content-Type"
  })
  return await response // transforme la réponse JSON reçue en objet JavaScript natif
}
