
BFS로 풀 수 있었던 문제.


> 어려웠던 부분

BFS로 풀 수 있겠다는 생각은 들었지만, 풀이 방법이 잘못되어 어려움이 있었다. 
처음에는 아이디어가 떠오르지 않아서 단순히 `current`의 left, right를 push하고 상수 값(2)로 나눠서 일부 TC를 통과하지 못하는 문제가 있었다.
계층이 깊어질 수록 해당 계층의 자식 노드의 개수가 많아진 다는 점을 간과했다.

> 해결 방법
> 
이 부분은 바이너리 트리 특성상 하위 자식들이 많아질 경우 해당 계층에 있는 모든 노드의 value를 더하고 노드의 개수만큼 나누는 방법으로 풀어야 했다.


```js
const result = []; // 결과 값을 담을 배열
const q = []; // 큐
q.push(root); // 최상위 루트노드는 1개인 것이 자명하므로 초기에 push

while(q.length){    // 큐가 빌 때까지 순회
    let len = q.length;
    // 현재 큐의 요소 개수, 이 값을 사용하여 현재 depth에 몇 개의 노드가 있는지 알 수 있다.

    let count = 0;
    // 현재 계층의 모든 노드의 value의 total count
    
    for(let i = 0; i < len; i++){ // 큐에 있는 요소의 개수는 현재 depth의 노드 개수를 의미
        let current = q.shift(); 
        if(current.left) q.push(current.left); 
        if(current.right) q.push(current.right);
        count += current.val; // 현재 노드의 value 카운팅
    }
    
    result.push(count / len); // for문을 빠져나왔다면 현재 계층의 모든 노드의 값을 계산했다는 의미이므로 count에서 처음 큐의 길이만큼 나눠준 값을 담는다.
}

return result;

```
