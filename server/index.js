import http from 'http'

const server = http.createServer(maCallback)

server.listen(3000, () => {
  console.log('en écoute sur le port 3000')
})

function maCallback(request, response) {
  // SERVEUR DES PAGES INDEX ET FORM :

  
  //   let data = ''
  //   if (request.method == 'POST') {
  //     request.on('data', function (chunk) {
  //       console.log('Received data:', chunk.toString())
  //       data += chunk.toString()
  //     })
  //     request.on('end', function () {
  //       console.log('Complete data:', data)
  //       response.end('received')
  //     })
  //   }
}
