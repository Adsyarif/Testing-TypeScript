class Departement {
  //   private id: string;
  //   public name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Departement) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Departement {
  constructor(id: string, public admins: string[]) {
    super(id, "IT"); // Karena constructor Departement terdiri dari 2 input
  }
}

class AccountingDepartment extends Departement {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("No Report Found");
    }
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please input the valid report");
    } else {
      this.addReport(value);
    }
  }

  constructor(id: string, public reports: string[]) {
    super(id, "Accounting"); // Karena constructor Departement terdiri dari 2 input
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printReport() {
    console.log(this.reports);
  }
}

const employee1 = Departement.createEmployee("BABANG");
console.log(employee1);
const it = new ITDepartment("d1", ["Nani", "Mawang"]);

it.describe();
it.addEmployee("Adrisa");
it.addEmployee("Max");
it.printEmployeeInformation();
console.log(it);

const accounting = new AccountingDepartment("d2", []);
accounting.mostRecentReport = "Hello";
accounting.mostRecentReport;
accounting.addReport("Something wrongs here!");
accounting.addReport("Almost Done~");
accounting.addEmployee("Hasan");
accounting.printEmployeeInformation();
accounting.printReport();
console.log(accounting);
// accounting.employees[2] = "Nina";
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
