## 문제 풀이 전략

좌표 값을 가지고 매핑시키는데서 어떤 알고리즘을 사용해야될지 몰라서 Hint를 참고했다.

`Hash`라는 힌트를 받고 다음과 같은 풀이를 떠올릴 수 있었다.

```js
  const obj = {
      'N' : [1, 0],
      'S' : [-1, 0],
      'E' : [0, 1],
      'W' : [0, -1]
  }
```

시작은 `0, 0`으로 y, x축이라는 가정 하에 좌표 값은 다음과 같게 세팅할 수 있다.

북(N): y + 1, x + 0,
남(S): y - 1, x + 0,
서(E): y + 0, x + 1
동(W): y + 0, x - 1

```js
const map = new Map();
let start = [0, 0];
```

map에는 방문한 위치 좌표를 key, value로 세팅할 것이다. 
start 변수는 현재 이동한 좌표를 변경시킬 때 사용하고자 선언했다.

이후 `path`의 문자를 하나씩 순회한다.

```js
for(let p of path){        
    const [y, x] = obj[p];
    map.set(start.join(' '), start);
    start = [start[0] + y, start[1] + x];
    
    if(!!map.get(start.join(' '))) return true;

    map.set(start.join(' '), start);
}

return false;
```

처음에 결과가 실패하는 문제가 있어서 디버깅해본 결과 join을 할 때 공백 없는 '' 형태로 join을 해서 문제가 발생했었다.

예를 들면, [11, 0] 과 [1, 10]을 join해버리면 둘 다 '110'이라는 키 값이 되어버리므로 join을 할 때 y와 x 구분자가 필요함을 알게 되었다.

map의 key가 존재하는 경우 이미 방문했던 좌표이므로 true를 리턴시키면 된다.


> TMI

key값을 원래는 문자열로 변경하지 않고 배열 자체를 사용할까 했었지만, 아앗..ㅠ 

배열은 레퍼런스 타입이기 때문에 참조값이 같아야 한다는 점에서 문자열로 변환시켜 key값을 프리미티브 타입으로 사용해야 한다.

