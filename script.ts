//I know that it is not the best solution, since eval() executes JS code passed in a string as an argument. But you have told to do this task without making the system too hard, so here is the solution under 50 lines of code. Anyway, I have limited executable code to 20 symbols for srot of security.

//setting up

const input: HTMLElement = document.getElementById('input')!;
const result: HTMLElement = document.getElementById('result')!;
const clear: HTMLElement = document.getElementById('clear')!;

const numbers: Element[] = Array.from(document.getElementsByClassName('inpSymbols'));
const signs: Element[] = Array.from(document.getElementsByClassName('mathSigns'));
const signsContent: string[] = signs.map((sign) => sign.textContent!);

if (numbers === null && input === null) {
	alert('oops');
} else if (numbers !== null && input !== null) {
	numbers.forEach((number) => {
		number.addEventListener('click', () => {
			input.textContent! += number.textContent;
		});
	});
}

if (signs === null && input === null) {
	alert('oops');
} else if (signs !== null && input !== null) {
	signs.forEach((sign) => {
		sign.addEventListener('click', () => {
			let lastChar: string = input.textContent!.charAt(input.textContent!.length - 1);
			if (!signsContent.includes(lastChar)) {
				input.textContent! += sign.textContent;
			}
		});
	});
}

const count = (input: HTMLElement): void => {
	let oldInp: string = input.textContent!;
	if (oldInp.length > 20) {
		alert('I am just a stupid calculator, not a rocket');
		return;
	}
	let newInp: number = eval(oldInp);
	input.textContent = '' + newInp;
};

result.addEventListener('click', () => {
	count(input);
});

clear.addEventListener('click', () => {
	input.textContent = '';
});
