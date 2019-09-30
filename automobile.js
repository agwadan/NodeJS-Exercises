class Automobile  {
    constructor(name, horsepower){
        this.name = name;
        this.horsepower = horsepower;
    }

    testing(){
        console.log(`The ${this.name} has been to tested to have ${this.horsepower} horsepower`)
    }

}

module.exports = Automobile 