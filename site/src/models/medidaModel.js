var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select jogador.nome, count(fkjogador) 
        as votos from jogador join cadastro on idjogador = fkjogador
         group by jogador.nome;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select jogador.nome, count(fkjogador) 
        as votos from jogador join cadastro on idjogador = fkjogador
         group by jogador.nome;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select jogador.nome, count(fkjogador) 
        as votos from jogador join cadastro on idjogador = fkjogador
         group by jogador.nome;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select jogador.nome, count(fkjogador) 
        as votos from jogador join cadastro on idjogador = fkjogador
         group by jogador.nome;`;;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}





function buscarescudo(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select escudo.nome as nome, count(fkescudo) as escudo from escudo 
        join cadastro on idescudo = fkescudo group by(escudo.nome);`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select escudo.nome as nome, count(fkescudo) as escudo from escudo 
        join cadastro on idescudo = fkescudo group by(escudo.nome);`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




function obitersorteio(idusuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select jogador.nome, jogador.posicao, jogador.gols, jogador.titulos, jogador.jogos
        from sorteio join cadastro  on cadastro.idcadastro = sorteio.fkcadastro 
        join jogador on jogador.idjogador= cadastro.fkjogador where cadastro.idcadastro = ${idusuario} limit 1;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select jogador.nome, jogador.posicao, jogador.gols, jogador.titulos, jogador.jogos
        from sorteio join cadastro  on cadastro.idcadastro = sorteio.fkcadastro 
        join jogador on jogador.idjogador= cadastro.fkjogador where cadastro.idcadastro = ${idusuario} limit 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarescudo,
    obitersorteio
}
