## 문제 해결 전략

- 풀이 + 제출 시간 : 8분 59초

```js
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    if(s.length < 3) return 0;
    
    let result = 0;
    const sw = [s[0], s[1]];
    
    for(let i = 2; i < s.length; i++){
        const char = sw[i - 2] + sw [i - 1] + s[i];
        if(new Set(char.split('')).size === 3) result++;
        
        sw[i] = s[i];
    }
        
    return result;
};
```

1. 3개의 문자를 모았을 때 중복되는 문자를 포함하지 않아야 한다.
2. 인풋 값이 1개 이상 100개 이하로 들어오기 때문에 `3개`의 문자가 절대 만들어질 수 없는 경우인 2개 이하는 0을 리턴하도록 했다.
3. for문 하나만을 사용하기 위해 메모리를 썼다. 배열을 하나 만들어 둔 후, 0번째 요소와 1번째 요소를 미리 push해 놓고, for문 index를 2부터 돌리면서 i-2 i-1번 인덱스의 문자열과 합치고 이 문자열을 배열로 변환하고 set 자료구조로 변경하여 중복되는 값을 지웠을 떄도 사이즈가 3인지 체크한다.
4. 만약 중복 요소를 제거했는데도 사이즈가 3이라면 result를 1증가시킨다.



## 더 나은 풀이

```js
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    if(s.length < 3) return 0;
    
    let result = 0;
    let a = s[0]
        b = s[1]
        c = s[2];
    if(a !== b && a !== c && b !== c) result++;
    
    for(let i = 3; i < s.length; i++){
        a = b;
        b = c;
        c = s[i];
        
        if(a !== b && a !== c && b !== c) result++;
    }
        
    return result;
};
```

먼저 내가 작성했던 코드는 input을 length만큼 늘려나간다는 문제가 있다.
최대 3개의 문자만 만들면 되므로 길이 3만큼의 메모리만 사용하는 방법으로도 문제를 풀 수 있다. 

[참고 코드](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/discuss/1238665/Easy-Solution-O(n)-approach)

