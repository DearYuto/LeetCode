## 문제 풀이 전략

**- 이 문제는 요구사항 그대로 코드로 옮기면 되는 문제인데 다음과 같은 방법을 따른다.**

-  nums[n] and nums[n+1] are not equal, so we skip this operation.
-  n번째 인덱스와 n + 1번째 인덱스를 기준으로 요소의 크기 확인하고, 동일하지 않을 경우 스킵한다.

-  nums[n] and nums[n+1] are equal, we multiply nums[n] by 2 and change nums[n+1] to 0. The array becomes [1,4,0,1,1,0].
-  n번째 인덱스 요소와 n+1번째 인덱스 요소의 크기를 확인하고​, 동일하다면 `n번째 인덱스`의 위치에 있는 요소에 `x2`를 해주고, `n + 1번째 위치의 요소는 0으로 값을 변경`시킨다.

-  위와 같은 과정을 끝까지 반복한 후에 0으로된 요소만 배열의 뒷쪽으로 빼주면 된다.

```js
const withoutZero = nums.filter((v) => !!v);
const onlyZero = Array(nums.length - withoutZero.length).fill(0);

return [...withoutZero, ...onlyZero];
```

- 본인은 for문을 사용하여 파라미터로 받아온 nums 배열을 변형시킨 후, filter 메서드를 사용하여 0이 아닌 값만 뽑은 배열을 하나 만들었다.
- 그리고 기존 nums로 넘어온 배열의 길이에서 filter 메서드로 뽑은 배열의 크기를 제외한 새로운 빈 배열을 만들고, 해당 배열의 값을 0으로 모두 초기화 시켜주었다.
- 마지막으로 두 배열을 rest 문법을 사용하여 합친 후 리턴하였다.
