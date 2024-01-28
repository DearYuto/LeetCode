## 문제 해결 전략​

풀이 및 제출 시간 : 13분 12초

- string 타입의 배열이 인자로 들어오고 가장 많이 등장한 빈도수를 가진 k개의 문자를 배열에 담아 리턴하는 문제이다. 이때 동일한 빈도수인 경우 오름차순 기준으로 더 먼저온 것을 출력해야 한다.

- 먼저 각각의 문자열이 얼마나 등장하는지 체크할 수 있도록 map 자료구조를 사용했다.
- map자료구조를 배열 메서드를 사용기 위해 배열로 변환한 후, 모든 문자열을 순회하며 등장 횟수를 카운트하고, 등장 횟수 기준으로 정렬한 후 만약 횟수가 동일할 경우 `localeCompare`를 사용하여 더 먼저오는 문자열이 앞에 오도록 했다.
- k개만큼의 문자열을 뽑아야하므로 `slice`를 사용했다.

```js
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const m = new Map();
    
    for(let w of words){
        m.set(w, (m.get(w) || 0) + 1);
    }
    
    return [...m].sort((a, b) => {
        if(b[1] === a[1]){
            return a[0].localeCompare(b[0]);
        }
        
        return b[1] - a[1]
    }).map((v) => v[0]).slice(0, k);
    
};
```

