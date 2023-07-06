// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];

console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = () => {
    let counter = 0;
    const increment = () => {
        return ++counter;
    }

    const decrement = () => {
        return --counter;
    }

    const printCounter = () => {
        console.log(counter);
    }

    return {
        increment,
        decrement,
        printCounter
    }
}

let count = createCounter();
count.increment();
count.increment();
count.increment();
count.decrement();
count.printCounter();
console.log(count);


// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

const rootElement = document.getElementById('root');

const findElementByClass = (rootNode, classEl = 'my-class') => {
    const elChilds = rootNode.children;
    let i = elChilds.length;
    while (i--) {
        if (elChilds[i].classList.contains(classEl)) {
            return elChilds[i];
        } else {
            const foundElement = findElementByClass(elChilds[i], classEl)
            if (foundElement) {
                return foundElement;
            };
        };
    };
};

const rootEl = document.querySelector('#root');

console.log(findElementByClass(rootEl));
