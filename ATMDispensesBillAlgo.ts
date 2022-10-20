// Bills that the change machine has configured
const availableBills = [1, 5, 10, 20, 50, 100];
const Calculator = {
  // Given money amount, break into bills
  // input: 195
  // output: [100, 50, 20, 20, 5]
  changeMachine: (money: number) => {
    let result: Array<number> = [];
    if (money === 0) {
      return [];
    }
    if (money !== 0) {
      let moneyLeft = money;
      let descBills = availableBills.reverse();
      for (let i = 0; i <= descBills.length - 1; i++) {
        while (moneyLeft >= descBills[i]) {
          moneyLeft = moneyLeft - descBills[i];
          result.push(descBills[i]);
        }
      }
    }
    return result;
  }
};

console.log('result ->', Calculator.changeMachine(191));