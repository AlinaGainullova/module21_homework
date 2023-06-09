
// случайное число
let num;
function number() {
	num = Math.ceil(Math.random() * 100);
}

// Создаем promise
const myPromise = new Promise((resolve, reject) => {
	setTimeout(number(), 3000);
	if (num % 2 === 0) {
		resolve(`Завершено успешно. Сгенерированное число - ${num}`);
	} else {
		reject(`Завершено с ошибкой. Сгенерированное число - ${num}`);
	}
});

//Выполняем promise
myPromise
    .then((result) => {
		console.log('Обрабатываем resolve', result);
	})
	.catch((error) => {
		console.log('Обрабатываем reject', error);
	});