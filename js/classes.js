/*
Setting up a virtual console in the browser
*/
const virtualConsole = document.getElementById('virtual-console');
function logToVC(itemToLog) {
    const newElement = document.createElement('p');
    newElement.innerHTML = itemToLog;
    virtualConsole.appendChild(newElement);
};

/*
Classes are object templates and declared with the class keyword, capitalize and CamelCase name
Unlike with objects, do not include a comma between properties
Use static keyword to create methods that are called directly from the class itself, and cannot be called from instances of the class
*/
class HospitalEmployee {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    static generatePassword() {
        return Math.floor(Math.random() * 10000);
    }

    static someStaticProperty = 'myStaticProperty';

    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacation(daysOff) {
        this._remainingVacationDays -= daysOff;
    }

    earnVacationDay() {
        this._remainingVacationDays++;
    }
}

/*
Create an instance of a class using the new keyword
new keyword will run the class's constructor method with the provided arguments
*/
logToVC(HospitalEmployee.generatePassword());
const employeeCurry = new HospitalEmployee('Curry', 'Cardiovascular');
logToVC(employeeCurry.name);
logToVC(employeeCurry.department);
logToVC(employeeCurry.remainingVacationDays);
employeeCurry.takeVacation(3);
logToVC(employeeCurry.remainingVacationDays);
employeeCurry.earnVacationDay();
logToVC(employeeCurry.remainingVacationDays);

/*
Create a subclass aka child class using the extends keyword that inherits all of the properties of the superclass AKA parent class
i.e. all properties/getters/setters/metods in the parent class can be used with instances of the child class, plus the child class can have its own properties/getters/setters/methods
super calls the constructor of the parent class with the given arguments, you must call super before using the 'this' keyword and best practice is to call it in the first line of the child class constructor
You can also use super to call methods in the super class
*/

class Nurse extends HospitalEmployee {
    constructor(name, department, certifications) {
        super(name, department);
        this._certifications = certifications;
    }

    get certifications() {
        return this._certifications;
    }

    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }

    earnVacationDay() {
        super.earnVacationDay();
        super.earnVacationDay();
        //double vacation days for nurses
    }
}

logToVC(Nurse.generatePassword());
const nurseBillie = new Nurse('Billie', 'Surgery', ['Trauma', 'Pediatrics']);
logToVC(nurseBillie.name);
logToVC(nurseBillie.department);
logToVC(nurseBillie.certifications);
logToVC(nurseBillie.remainingVacationDays);
nurseBillie.takeVacation(3);
logToVC(nurseBillie.remainingVacationDays);
nurseBillie.earnVacationDay();
logToVC(nurseBillie.remainingVacationDays);
nurseBillie.addCertification('anesthesia');
logToVC(nurseBillie.certifications);

/*
Generator methods
*/

class Polygon {
  constructor(...sides) {
    this.sides = sides;
  }
  // Method
  *getSides() {
    for(const side of this.sides){
      yield side;
    }
  }
}

const pentagon = new Polygon(1,2,3,4,5);

logToVC([...pentagon.getSides()]); // [1,2,3,4,5]