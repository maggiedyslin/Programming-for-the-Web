const vm = Vue.createApp({
    data() {
        return {
            firstNum: null,
            secondNum: null,
            operation: 'add',
            total: null
        }
    },
    methods: {
        calculate: (num1, num2) => {
            switch(vm.operation) { // like a big if statement, but passing specific values to check
                case 'add':
                    vm.total = num1 + num2;
                    break; // needs a break so it won't go on to the next line
                case 'subtract':
                    vm.total = num1 - num2;
                    break;
                case 'multiply':
                    vm.total = num1 * num2;
                    break;
                case 'divide':
                    vm.total = num1 / num2;
                    break
                default: // always good to have this
                    window.alert('unexpected operator');
                    break;
            }
            vm.firstNum = vm.secondNum = null; // assigns both of them as null, could also be done on separate lines
            // this clears out the numbers in both inputs
        }
    }
}).mount('#calcApp');