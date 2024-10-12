let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.map(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }

  function PrintDeveloperbyForEach() {
    arr.forEach(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }

  function addData() {
    let employee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(employee);
    console.log(arr);
  }

  function removeAdmin() {
    let remove = arr.filter(employee => employee.profession !== "admin");
    console.log(remove);
  }

  function concatenateArray() {
    let newEmployee = [
      { id: 5, name: "Nikhil", age: "21", profession: "developer" },
      { id: 6, name: "Neeraj", age: "22", profession: "developer" },
      { id: 7, name: "Himanshu", age: "23", profession: "developer" }
    ];
    let addEmployee = arr.concat(newEmployee);
    console.log(addEmployee);
  }