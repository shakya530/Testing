export class Init {
    load() {
      if(localStorage.getItem('employees') === null || localStorage.getItem('employees') == undefined) {
        console.log('No employees Found... Creating...');
        let emps = [
          {
            id:1,
            firstName:'Prashant',
            address:'Mumbai',
            phone: '9837847475'
          },
          {
            id:2,
            firstName:'Abhishek',
            address:'Chennai',
            phone: '8837847475'
          }, {
            id:3,
            firstName:'Akshay',
            address:'Delhi',
            phone: '7837847475'
          },
        ];

        localStorage.setItem('employees', JSON.stringify(emps));
        return
      } else {
        console.log('Found employees...');
      }
    }
  }
