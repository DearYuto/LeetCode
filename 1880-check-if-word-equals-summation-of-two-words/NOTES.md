## 문제 해결 전략

`firstWord`, `secondWord`, `targetWord`의 letter를 a = 0 b = 1 ... etc. 로 변환한다.

`ab` 일때 `01` 이 되어야 하므로 string으로 이어붙인 뒤 숫자로 변환하여 (01 -> 1, 0001 -> 1)
변환한 숫자(`firstWord` + `secondWord`)를 더했을 때 `targetWord`가 되는지 T/를 리턴하는 문제이다.

1. 배열에 넣어 배열 메서드를 사용해 순회하기 위해 인자로 들어온 string을 모두 배열의 원소로 담아주었다.
2.  내부 반복문에서 들어온 string의 인덱스를 해당 string length까지 순회하며 아스키코드 숫자 값으로 변환(charCodeAt)하고, 아스키값 a는 97에 해당하므로 97에서 아스키코드로 변환한 string[i] 빼도록 했다. 이때 음수 값이 나오면 안되므로 Math.abs를 사용해주었다. 여기서 초기 변수 값을 string으로 만들어서 덧셈해주어야 올바른 결과가 나올 수 있다.
3. 이제 string을 다시 number로 변환하기 위해 map(Number)를 사용해 reduce가 리턴한 배열을 요소들을 숫자 타입으로 만들어주고 요소는 항상 고정된 0, 1, 2번 인덱스를 가지므로 하드코딩해서 연산 결과를 T/F로 리턴하도록 했다.
