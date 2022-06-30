import App from './app';

App.get("/", function(req, res){
    res.send("Servidor de feedback de alunos");
})

App.listen(process.env.APP_PORT, function(){
    console.log("Servidor Funcionando Corretamente.");
    
});
