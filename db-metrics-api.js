const express = require ('express')
const app = express()
const PORT = process.env.PORT || 3001;
 
app.get('/oia', function (req, res) {
    res.send('Marróia, mundo!')
  })
 
app.get('/pepeto', function (req, res) {
    res.send('<h3>Entrou no Pepeto!</h3>Você agora faz parte da comunidade que entrou no Pepeto com sucesso! <br>Bem-vindo!')
  })

app.listen(PORT, err => {
if (err) {
    console.error(`👽 Houston we have a problem : ${err} ☠️`);
}
{
    console.log(`🎉 API escutando na porta : ${PORT} 🎉`);
}
});
