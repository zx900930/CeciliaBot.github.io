importScripts('js-combinatorics@0.5.js');

var AoEHeroes = ["adventurer-ras","kawerik","cerise","specter-tenebria","tempest-surin","pavel","ambitious-tywin","alencia","benevolent-romann","elena","cecilia","vildred","charlotte","baal-sezan","yufine","ravi","kayron","charles","yuna","sez","haste","tywin","lidica","aramintha","tenebria","basar","tamarinne","ludwig","bellona","luluca","zeno","vivian","lilias","dizzy","faithless-lididca","fallen-cecilia","judge-kise","arbiter-vildred","sage-baal-sezan","specimen-sez","martial-artist-ken","silver-blade-aramintha","desert-jewel-basar","seaside-bellona","silk","mercedes","armin","zerato","corvus","cartuja","schuri","dingo","clarissa","leo","purrgis","crozet","dominiel","romann","khawana","shadow-rose","celestial-mercedes","champion-zerato","blood-blade-karin","watcher-schuri","blaze-dingo","kitty-clariss","roaming-warrior-leo","auxiliary-lots","general-purrgis","ras","sven","church-of-ilryos-axe","rikoris","adlay","carrot","jena","jecht","elson","hurado","kiris","celeste","pearlhorizon","gloomyrain","kikirat-v2","chaos-sect-axe","captain-rikoris","researcher-carrot","lena"];

if (!Array.prototype.flat) { // create .flat() function only if not already supported by browser
    Object.defineProperty(Array.prototype, 'flat', {
      value: function(depth = 1) {
        return this.reduce(function (flat, toFlatten) {
          return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
        }, []);
      }
    });
};

///replace this. -> e.
onmessage = function(e) {
         let code = 200; // Success or fail code, 200 = ok; 400 Error during calculation
         let isCartesian = false;
         var e = e.data;
         var HeroDB = e.HeroDB;
         var campList = e.campList;
         if (e.cartesianLock.flat().length>0) isCartesian = true;
         console.log("Is cartesian product? " + isCartesian)

         const nuovoCampSimulatorTeam2 = function(inputTeam) {
              let pg1 = inputTeam[0];
              let pg2 = inputTeam[1];
              let pg3 = inputTeam[2];
              let pg4 = inputTeam[3];

              var tabConTagNome = [
                    {personaggio: HeroDB[pg1]._id, opzione: HeroDB[pg1].camping.topics[0],risultato: HeroDB[pg2].camping.values[HeroDB[pg1].camping.topics[0]]+HeroDB[pg3].camping.values[HeroDB[pg1]. camping.topics[0]]+HeroDB[pg4].camping.values[HeroDB[pg1].camping.topics[0]]},
                    {personaggio: HeroDB[pg1]._id, opzione: HeroDB[pg1].camping.topics[1],risultato: HeroDB[pg2].camping.values[HeroDB[pg1].camping.topics[1]]+HeroDB[pg3].camping.values[HeroDB[pg1].camping.topics[1]]+HeroDB[pg4].camping.values[HeroDB[pg1].camping.topics[1]]},
                    {personaggio: HeroDB[pg2]._id, opzione: HeroDB[pg2].camping.topics[0],risultato: HeroDB[pg1].camping.values[HeroDB[pg2].camping.topics[0]]+HeroDB[pg3].camping.values[HeroDB[pg2].camping.topics[0]]+HeroDB[pg4].camping.values[HeroDB[pg2].camping.topics[0]]},
                    {personaggio: HeroDB[pg2]._id, opzione: HeroDB[pg2].camping.topics[1],risultato: HeroDB[pg1].camping.values[HeroDB[pg2].camping.topics[1]]+HeroDB[pg3].camping.values[HeroDB[pg2].camping.topics[1]]+HeroDB[pg4].camping.values[HeroDB[pg2].camping.topics[1]]},
                    {personaggio: HeroDB[pg3]._id, opzione: HeroDB[pg3].camping.topics[0],risultato: HeroDB[pg1].camping.values[HeroDB[pg3].camping.topics[0]]+HeroDB[pg2].camping.values[HeroDB[pg3].camping.topics[0]]+HeroDB[pg4].camping.values[HeroDB[pg3].camping.topics[0]]},
                    {personaggio: HeroDB[pg3]._id, opzione: HeroDB[pg3].camping.topics[1],risultato: HeroDB[pg1].camping.values[HeroDB[pg3].camping.topics[1]]+HeroDB[pg2].camping.values[HeroDB[pg3].camping.topics[1]]+HeroDB[pg4].camping.values[HeroDB[pg3].camping.topics[1]]},
                    {personaggio: HeroDB[pg4]._id, opzione: HeroDB[pg4].camping.topics[0],risultato: HeroDB[pg1].camping.values[HeroDB[pg4].camping.topics[0]]+HeroDB[pg2].camping.values[HeroDB[pg4].camping.topics[0]]+HeroDB[pg3].camping.values[HeroDB[pg4].camping.topics[0]]},
                    {personaggio: HeroDB[pg4]._id, opzione: HeroDB[pg4].camping.topics[1],risultato: HeroDB[pg1].camping.values[HeroDB[pg4].camping.topics[1]]+HeroDB[pg2].camping.values[HeroDB[pg4].camping.topics[1]]+HeroDB[pg3].camping.values[HeroDB[pg4].camping.topics[1]]}
              ];


              //Ordina per risultato				   
              tabConTagNome.sort(function(a, b) {
                  return ((a.risultato > b.risultato) ? -1 : ((a.risultato == b.risultato) ? 0 : 1));
              });   

               while (tabConTagNome[0].opzione === tabConTagNome[1].opzione) {
                  tabConTagNome.splice(1, 1);
               };
                var campMiglioreRisultato1 = tabConTagNome[0].risultato;
                var campNomeMigliorScelta1 = tabConTagNome[0].opzione;
                var campMigliorePG1 = tabConTagNome[0].personaggio;

                var campMiglioreRisultato2 = tabConTagNome[1].risultato;
                var campNomeMigliorScelta2 = tabConTagNome[1].opzione;
                var campMigliorePG2 = tabConTagNome[1].personaggio;

                 var moraleTotaleGuadagnato = campMiglioreRisultato1 + campMiglioreRisultato2;

              let soluzioni = {}; 
                  soluzioni.morale = moraleTotaleGuadagnato;
                  soluzioni.opzioneMigliore1 = campNomeMigliorScelta1;
                  soluzioni.risultatoScelta1 = campMiglioreRisultato1;
                  soluzioni.opzioneMigliore2 = campNomeMigliorScelta2;
                  soluzioni.risultatoScelta2 = campMiglioreRisultato2;
                  soluzioni.migliorPG1 = campMigliorePG1;
                  soluzioni.migliorPG2 = campMigliorePG2;
                  soluzioni.team = [HeroDB[pg1]._id,HeroDB[pg2]._id,HeroDB[pg3]._id,HeroDB[pg4]._id];
              return soluzioni;
            };
               e.risultati = [];

               if (isCartesian == false) {
                    if ( (e.locked.length + e.classe.length) > 4 || (e.locked.length + e.elemento.length) > 4 ) { // team size error
                        code = 400; // error
                        e.risultati = ["team_size_exceeded"];
                    } else { // can calculate
                        Combinatorics.bigCombination(campList,4-e.locked.length).forEach(teamComb => {
                                    if (teamComb.length>4 || e.locked.length == 4) teamComb = []; // Se locked = 4 allora team deve riportare array vuota
                                    var team = [].concat(teamComb, e.locked);
                                    let elementoFiltro = teamComb;
                                    let elementoRisultati = elementoFiltro.map(function (hero, i) { return HeroDB[hero].attribute }).flat();
                                    let buffsRisultati = elementoFiltro.map(function (hero, i) { return HeroDB[hero].buffs }).flat();
                                    let debuffsRisultati = elementoFiltro.map(function (hero, i) { return HeroDB[hero].debuffs }).flat();
                                    let S1debuffsRisultati = elementoFiltro.map(function (hero, i) { return HeroDB[hero].skills[0].debuff }).flat();
                                    let classeRisultati = elementoFiltro.map(function (hero, i) { return HeroDB[hero].role }).flat();
                                    let AoE_inTeam = AoEHeroes.some(i => elementoFiltro.includes(i));
                                    if (e.locked.every(i => team.includes(i)) &&
                                        e.classe.every(i => classeRisultati.includes(i)) && 
                                        e.elemento.every(i => elementoRisultati.includes(i)) &&
                                        e.debuffs.every(i => debuffsRisultati.includes(i)) &&
                                        e.buffs.every(i => buffsRisultati.includes(i)) &&
                                        (e.AoE === false || (e.AoE === true && AoE_inTeam )) &&
                                        (e.noS1debuffs === false || (e.noS1debuffs === true &&  S1debuffsRisultati.filter(function (team) {return team != 20 && team != 25 && team != 21 && team != 24}).length === 0)) &&
                                        (e.noDebuffs === false || (e.noDebuffs === true && debuffsRisultati.filter(function (team) {return team != 20 && team != 25 && team != 21 && team != 24}).length === 0)  )
                                    ){
                                        let risultatoDiQuestoTeam = nuovoCampSimulatorTeam2(team)
                                        if ( ( e.preferenzeRisultati.numeroMassimo === false || (e.preferenzeRisultati.numeroMassimo === true && e.risultati.length < e.preferenzeRisultati.n) ) && (e.preferenzeRisultati.minMorale === false || (e.preferenzeRisultati.minMorale === true && e.preferenzeRisultati.morale <= risultatoDiQuestoTeam.morale))) {
                                            e.risultati.push(risultatoDiQuestoTeam);
                                            e.risultati.sort(function(a, b)  {return ((a.morale > b.morale) ? -1 : ((a.morale == b.morale) ? 0 : 1));});
                                        } else {
                                            e.risultati.sort(function(a, b) {return ((a.morale > b.morale) ? -1 : ((a.morale == b.morale) ? 0 : 1));});
                                            if (e.preferenzeRisultati.minMorale === false || (e.preferenzeRisultati.minMorale === true && e.preferenzeRisultati.morale <= risultatoDiQuestoTeam.morale) ) {
                                                if ( e.preferenzeRisultati.numeroMassimo === false || (e.preferenzeRisultati.numeroMassimo === true && risultatoDiQuestoTeam.morale > e.risultati[e.risultati.length-1].morale) ) {
                                                    e.risultati.unshift(risultatoDiQuestoTeam);
                                                    if (e.preferenzeRisultati.numeroMassimo === true) e.risultati.splice(e.preferenzeRisultati.n);
                                                };
                                            };
                                        };
                                    };
                        });
                    };
                } else if (isCartesian == true) {
                    function printCombos(array) {
                        var results = [[]];for (var i = 0; i < array.length; i++) {
                        var currentSubArray = array[i];
                        var temp = [];
                        for (var j = 0; j < results.length; j++) {
                            for (var k = 0; k < currentSubArray.length; k++) {
                            temp.push(results[j].concat(currentSubArray[k]));
                            }
                        }
                        results = temp;
                        }
                        return results;
                    };
                    for (var i=0; i < e.cartesianLock.length; i++){
                        if (!e.cartesianLock[i].length) {e.cartesianLock.splice(i, 1);i--}
                    };
                    for (var i = 0; i < campList.length; i++){
                        var tmp = e.cartesianLock.flat();
                        if (tmp.includes(campList[i]) ) {campList.splice(i, 1);i--}
                    };
                    if ((e.cartesianLock.length + e.locked.length) < 4 && campList.length < 4-(e.cartesianLock.length + e.locked.length)) { // can't calculate not enough heroes to fill remaining slots
                        code = 400; // error
                        e.risultati = ["not_enough_heroes"];
                    } else if ((e.cartesianLock.length + e.locked.length + e.classe.length) > 4 || (e.cartesianLock.length + e.locked.length + e.elemento.length) > 4) { // Too many locked heroes
                        code = 400; // error
                        e.risultati = ["team_size_exceeded"];
                    } else { // can calculate 
                        if ( (e.cartesianLock.length + e.locked.length) > 3 ) campList = ["Ras"]; // placeholder Ras if all heroes are used in multilock or lock-> avoid RangeError
                        c = printCombos(e.cartesianLock);
                        c.forEach( (cartesianLocked) => {
                                Combinatorics.bigCombination(campList,4-e.locked.length-cartesianLocked.length).forEach(teamComb => {
                                    var teamComb = teamComb;
                                    if (e.cartesianLock.length + e.locked.length>3) teamComb = []; // Se locked = 4 allora team deve riportare array vuota
                                    //teamComb = teamComb.concat(cartesianLocked);
                                    var team = [].concat(teamComb, cartesianLocked, e.locked);
                                    let elementoFiltro = teamComb; // applica filtro solo ai eroi non lockati
                                    let elementoRisultati = elementoFiltro.map(function (hero, i) { return HeroDB[hero].attribute }).flat();
                                    let buffsRisultati = elementoFiltro.map(function (hero, i) { return HeroDB[hero].buffs }).flat();
                                    let debuffsRisultati = elementoFiltro.map(function (hero, i) { return HeroDB[hero].debuffs }).flat();
                                    let S1debuffsRisultati = elementoFiltro.map(function (hero, i) { return HeroDB[hero].skills[0].debuff }).flat();
                                    let classeRisultati = elementoFiltro.map(function (hero, i) { return HeroDB[hero].role }).flat();
                                    let AoE_inTeam = AoEHeroes.some(i => elementoFiltro.includes(i));
                                    if (e.locked.every(i => team.includes(i)) &&
                                        e.classe.every(i => classeRisultati.includes(i)) && 
                                        e.elemento.every(i => elementoRisultati.includes(i)) &&
                                        e.debuffs.every(i => debuffsRisultati.includes(i)) &&
                                        e.buffs.every(i => buffsRisultati.includes(i)) &&
                                        (e.AoE === false || (e.AoE === true && AoE_inTeam )) &&
                                        (e.noS1debuffs === false || (e.noS1debuffs === true &&  S1debuffsRisultati.filter(function (team) {return team != 20 && team != 25 && team != 21 && team != 24}).length === 0)) &&
                                        (e.noDebuffs === false || (e.noDebuffs === true && debuffsRisultati.filter(function (team) {return team != 20 && team != 25 && team != 21 && team != 24}).length === 0)  )
                                    ){
                                        let risultatoDiQuestoTeam = nuovoCampSimulatorTeam2(team)
                                        if ( ( e.preferenzeRisultati.numeroMassimo === false || (e.preferenzeRisultati.numeroMassimo === true && e.risultati.length < e.preferenzeRisultati.n) ) && (e.preferenzeRisultati.minMorale === false || (e.preferenzeRisultati.minMorale === true && e.preferenzeRisultati.morale <= risultatoDiQuestoTeam.morale))) {
                                            e.risultati.push(risultatoDiQuestoTeam);
                                            e.risultati.sort(function(a, b)  {return ((a.morale > b.morale) ? -1 : ((a.morale == b.morale) ? 0 : 1));});
                                        } else {
                                            e.risultati.sort(function(a, b) {return ((a.morale > b.morale) ? -1 : ((a.morale == b.morale) ? 0 : 1));});
                                            if (e.preferenzeRisultati.minMorale === false || (e.preferenzeRisultati.minMorale === true && e.preferenzeRisultati.morale <= risultatoDiQuestoTeam.morale) ) {
                                                if ( e.preferenzeRisultati.numeroMassimo === false || (e.preferenzeRisultati.numeroMassimo === true && risultatoDiQuestoTeam.morale > e.risultati[e.risultati.length-1].morale) ) {
                                                    e.risultati.unshift(risultatoDiQuestoTeam);
                                                    if (e.preferenzeRisultati.numeroMassimo === true) e.risultati.splice(e.preferenzeRisultati.n);
                                                };
                                            };
                                        };
                                    };
                                });
                        });
                    };
                };

            e.risultati.sort(function (a,b) {return ((a.morale > b.morale) ? -1 : ((a.morale == b.morale) ? 0: 1))}); // riordina l'ultimo elemento aggiunto
            postMessage({code: code, risultati: e.risultati});
}
