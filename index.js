class Hero {
    constructor(name, level){
        this.name = name;
        this.level = level;
    }
}

const heroes = [
    new Hero('Captain America', 3500), 
    new Hero('Batman', 5200), 
    new Hero('Wonder Woman', 6500),
    new Hero('Super Man', 9000),
    new Hero('Jesus', 9999999)];


for(let hero in heroes){
    let level = '';
    if(heroes[hero].level < 1000){
        level = "FERRO";
    } else if (heroes[hero].level >= 1000 && heroes[hero].level < 2000) {
        level = "BRONZE";
    } else if (heroes[hero].level >= 2000 && heroes[hero].level < 5000) {
        level = "PRATA";
    } else if (heroes[hero].level >= 5000 && heroes[hero].level < 7000) {
        level = "OURO";
    } else if (heroes[hero].level >= 7000 && heroes[hero].level < 8000) {
        level = 'PLATINA'
    } else if (heroes[hero].level >= 8000 && heroes[hero].level < 9000) {
        level = 'ASCENDENTE';
    } else if (heroes[hero].level >= 9000 && heroes[hero].level < 10000) {
        level = 'IMORTAL';
    } else if (heroes[hero].level >= 10000) {
        level = 'RADIANTE';
    } else {
        console.log("Invalid Level");
    }
    console.log(`O Herói de nome ${heroes[hero].name} está no nível de ${level}`);
}