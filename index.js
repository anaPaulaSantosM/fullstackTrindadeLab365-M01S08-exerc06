(async () => {

    const database = require('./db');
    const Equipamento = require('./equipamento');
    await database.sync();

    /*const novoEquipamento = await Equipamento.create({
        nome: 'Corda',
        preco: 150          
    })

    console.log(novoEquipamento);*/
    
    //const equipamentos = await Equipamento.findAll();

    const equipamentos = await Equipamento.findByPk(4);
    console.log(equipamentos);

    //equipamentos.preco = 200
    //await equipamentos.save();

    await equipamentos.destroy();

})();