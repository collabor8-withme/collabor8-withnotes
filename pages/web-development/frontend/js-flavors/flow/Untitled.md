## 使用flow

Getting Started
``` shell
yarn add flow-bin

npm instal flow-bin
```

``` js
// @flow

function sum(a: number, b: number) {
    return a + b;
}

sum(100, 200)

sum("1", "2")        // error
```

``` shell
./node_modules/.bin/flow

yarn flow

npm exec flow

```

## Primitive Type 原始类型
### void 类型
``` javascript
const a: void = undefined;
```

### null 类型
``` javascript
const obj: null = null;
```

### string 类型
``` javascript
const str: string = "hello world";
```

### number 类型
``` javascript
const num1: number = 22;

const num2: number = NaN;

const num3: number = Infinity;
```

### boolean 类型
``` javascript
const isFalse: boolean = false;

const isTrue: boolean = trun;
```

### symbol 类型
``` javascript
const sym: symbol = Symbol();
```

## 结构类型
### Array 类型
``` javascript
const arr1: Array<number> = [ 1, 2, 3, 4 ];

const arr2: number[] = [1, 2, 3, 4];
```

### Tuple 类型
``` javascript
const tuple: [string, number] = ["hello", 22];
```

### Object 类型
``` javascript
const obj: {prop1: string, prop2: number} = {
	prop1: "shuhao",
	prop2: 22
}

const obj2: {prop1?: string, prop2: number} = {
	prop2: 22
}

const obj3: { [string]: "string" } = {}
obj3.key1 = "shuhao"
obj3.key1 = 22                 // error

```

### function 类型
``` javascript
function fn(a: nubmer, b: number): number {
	return a + b;
}

function fn2():void {
	console.log("hello world");
}

function fn3(callback: (string, nubmer) => void): void {
	callback("hello world", 1024);
}
```

## 特殊类型
### literal 字面量类型
``` javascript
const str: "hello" = "hello";

const num: 2 = 2;

const num: 3 = 2;           // error
```

### 联合类型
``` javascript
const str: "heart sco" | "zilong wang" | "tongzian zhang" = "heart sco"
```