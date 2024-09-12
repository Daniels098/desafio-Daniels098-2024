class RecintosZoo {
    
    analisaRecintos(animal, quantidade) {
        var animais = ["LEAO","LEOPARDO","CROCODILO","MACACO","GAZELA","HIPOPOTAMO"];
        var tamn = {"LEAO": 3,"LEOPARDO": 2,"CROCODILO": 3,"MACACO": 1,"GAZELA": 2,"HIPOPOTAMO": 4}
        var recintos = [
            {"Livre": 7, "Total": 10, bioma: "savana", animalExistente: "MACACO"}, //1
            {"Livre": 5, "Total": 5, bioma: "floresta", animalExistente: "VAZIO"}, //2
            {"Livre": 5, "Total": 7, bioma: "savanaRio", animalExistente: "GAZELA"}, //3
            {"Livre": 8, "Total": 8, bioma: "rio", animalExistente: "VAZIO"}, //4
            {"Livre": 6, "Total": 9, bioma: "savana", animalExistente: "LEAO"} //5
        ];
        var i;
        let recintosEncontrados = [];

        // Verifica animal habilitado para o zoológico
        if(!animais.includes(animal)) {
            return {
                erro: "Animal inválido",
                recintosViaveis: null
            }
        }
        // Verifica quantidade inválida de animal
        if(quantidade <= 0 || !Number.isInteger(quantidade)) {
            return {
                erro: "Quantidade inválida",
                recintosViaveis: null
            }
        }
        
        // Verifica animais dentro dos recintos
        
        // MACACO especificidades
        if(animal === "MACACO") {
            var quant = quantidade * tamn.MACACO;
            // Verifica todos os recintos
            for(i=0;i<recintos.length;i++) {
                if((recintos[i].bioma === "savana" ||
                    recintos[i].bioma === "floresta" ||
                    recintos[i].bioma === "savanaRio") &&
                    recintos[i].Livre >= quant) {
                    
                    // Verifica animais existentes
                    if(recintos[i].animalExistente != "MACACO" &&
                        recintos[i].animalExistente != "VAZIO") { 
                        recintos[i].Livre -= quant+1;
                    } else {
                        recintos[i].Livre -= quant;
                    }

                    // Verifica animal carnívoro
                    if(recintos[i].animalExistente != "LEAO" &&
                        recintos[i].animalExistente != "LEOPARDO") {
                        recintosEncontrados.push(`Recinto ${i+1} (espaço livre: ${recintos[i].Livre} total: ${recintos[i].Total})`);
                    }
                }
            }
            if(recintosEncontrados.length > 0) {
                return {
                    recintosViaveis: recintosEncontrados,
                    erro: null
                }
            } else {
                return {
                    erro: "Não há recinto viável",
                    recintosViaveis: null
                }
            }
        }

        // CROCODILO especificidades
        if(animal === "CROCODILO") {
            var quant = quantidade * tamn.CROCODILO;
            // Verifica todos os recintos
            for(i=0;i<recintos.length;i++) {
                if(recintos[i].bioma === "rio" &&
                    recintos[i].Livre >= quant) {
                    
                    recintos[i].Livre -= quant;
                    
                    // Verifica animais existentes e de espécies diferentes (carnívoro)
                    if(recintos[i].animalExistente === "CROCODILO" ||
                        recintos[i].animalExistente === "VAZIO") {
                        recintosEncontrados.push(`Recinto ${i+1} (espaço livre: ${recintos[i].Livre} total: ${recintos[i].Total})`);
                    }
                }
            }
            if(recintosEncontrados.length > 0) {
                return {
                    recintosViaveis: recintosEncontrados,
                    erro: null
                }
            } else {
                return {
                    erro: "Não há recinto viável",
                    recintosViaveis: null
                }
            }
        }

        // LEAO especificidades
        if(animal === "LEAO") {
            var quant = quantidade * tamn.LEAO;
            // Verifica todos os recintos
            for(i=0;i<recintos.length;i++) {
                if(recintos[i].bioma === "savana" &&
                    recintos[i].Livre >= quant) {
                    
                    recintos[i].Livre -= quant;
                    
                    // Verifica animais existentes e de espécies diferentes (carnívoro)
                    if(recintos[i].animalExistente === "LEAO" ||
                        recintos[i].animalExistente === "VAZIO") {
                        recintosEncontrados.push(`Recinto ${i+1} (espaço livre: ${recintos[i].Livre} total: ${recintos[i].Total})`);
                    }
                }
            }
            if(recintosEncontrados.length > 0) {
                return {
                    recintosViaveis: recintosEncontrados,
                    erro: null
                }
            } else {
                return {
                    erro: "Não há recinto viável",
                    recintosViaveis: null
                }
            }
        }

        // LEOPARDO especificidades
        if(animal === "LEOPARDO") {
            var quant = quantidade * tamn.LEOPARDO;
            // Verifica todos os recintos
            for(i=0;i<recintos.length;i++) {
                if((recintos[i].bioma === "savana" ||
                    recintos[i].bioma === "savanaRio") && 
                    recintos[i].Livre >= quant) {
                    
                    recintos[i].Livre -= quant;
                    
                    // Verifica animais existentes e de espécies diferentes (carnívoro)
                    if(recintos[i].animalExistente === "LEOPARDO" ||
                        recintos[i].animalExistente === "VAZIO") {
                        recintosEncontrados.push(`Recinto ${i+1} (espaço livre: ${recintos[i].Livre} total: ${recintos[i].Total})`);
                    } 
                    // Não passa pelo o if já que não tem nenhum recinto com algum leopardo ou que esteja vazio
                }
            }
            // Como ele não passa pelo if então tem como retornar algum recinto viável
            if(recintosEncontrados.length > 0) {
                return {
                    recintosViaveis: recintosEncontrados,
                    erro: null
                }
            } else {
                return {
                    erro: "Não há recinto viável",
                    recintosViaveis: null
                }
            }
        }

        // GAZELA especificidades
        if(animal === "GAZELA") {
            var quant = quantidade * tamn.GAZELA;
            // Verifica todos os recintos
            for(i=0;i<recintos.length;i++) {
                if((recintos[i].bioma === "savana" ||
                    recintos[i].bioma === "savanaRio") &&
                    recintos[i].Livre >= quant) {
                    
                    // Verifica animais existentes
                    if(recintos[i].animalExistente != "GAZELA" &&
                        recintos[i].animalExistente != "VAZIO") {
                        recintos[i].Livre -= quant+1;
                    } else {
                        recintos[i].Livre -= quant;
                    }

                    // Verifica animal carnívoro
                    if(recintos[i].animalExistente != "LEAO" &&
                        recintos[i].animalExistente != "LEOPARDO") {
                        recintosEncontrados.push(`Recinto ${i+1} (espaço livre: ${recintos[i].Livre} total: ${recintos[i].Total})`);
                    }
                }
            }
            if(recintosEncontrados.length > 0) {
                return {
                    recintosViaveis: recintosEncontrados,
                    erro: null
                }
            } else {
                return {
                    erro: "Não há recinto viável",
                    recintosViaveis: null
                }
            }
        }

        // HIPOPOTAMO especificidades
        if(animal === "HIPOPOTAMO") {
            var quant = quantidade * tamn.HIPOPOTAMO;
            // Verifica todos os recintos
            for(i=0;i<recintos.length;i++) {
                if((recintos[i].bioma === "rio" ||
                    recintos[i].bioma === "savanaRio") &&
                    recintos[i].Livre >= quant) {
                    
                    // Verifica animais existentes e outras espécies
                    if(recintos[i].animalExistente != "HIPOPOTAMO" &&
                        recintos[i].animalExistente != "VAZIO" &&
                        recintos[i].bioma === "savanaRio") {
                        recintos[i].Livre -= quant+1;
                    } else {
                        recintos[i].Livre -= quant;
                    }

                    // Verifica animal carnívoro
                    if(recintos[i].animalExistente != "LEAO" &&
                        recintos[i].animalExistente != "LEOPARDO") {
                        recintosEncontrados.push(`Recinto ${i+1} (espaço livre: ${recintos[i].Livre} total: ${recintos[i].Total})`);
                    }
                }
            }
            if(recintosEncontrados.length > 0) {
                return {
                    recintosViaveis: recintosEncontrados,
                    erro: null
                }
            } else {
                return {
                    erro: "Não há recinto viável",
                    recintosViaveis: null
                }
            }
        }

    }

}

export { RecintosZoo as RecintosZoo };
