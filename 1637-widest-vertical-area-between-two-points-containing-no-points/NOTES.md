처음에 Note에 그려보고 x축의 너비를 의미하는건가 싶었는데 `수직`이라는 말 때문에 문제를 이해하는데 어려움을 겪었다.

문제가 정확히 이해가 되지 않아서 ChatGPT에게 문제 해설을 요청하였고, LeetCode의 솔루션을 참고한 후 풀이할 수 있었다.


## 문제 해설​

이 문제는 2차원 평면상에 있는 점들 사이에서 가장 넓은 수직 영역을 찾는 것과 관련이 있습니다. 여기서 말하는 '수직 영역'이란 y축을 따라 무한히 높이 올라가는 고정된 너비를 가진 영역을 말합니다. 이 영역 안에는 어떠한 점도 포함되지 않아야 하며, 가장 넓은 수직 영역이란 이러한 조건을 만족하면서 너비가 최대인 영역을 의미합니다.

문제의 핵심은 각 점들의 x좌표를 기준으로 이들 사이의 최대 간격을 찾는 것입니다. 수직 영역의 너비는 이러한 간격으로 결정되며, y축의 값은 이 문제에서 중요하지 않습니다.

해결 방법은 다음과 같습니다:

모든 점들의 x좌표만을 추출합니다.
이 x좌표들을 정렬합니다.
인접한 x좌표들 사이의 간격을 계산합니다.
이 중 최대 간격이 가장 넓은 수직 영역의 너비가 됩니다.
예를 들어, 점들이 
` [(1,2),(2,3),(4,5)]` 로 주어졌다면, x좌표들은 `[1, 2, 4]`가 됩니다. 이를 정렬한 후, 인접한 점들 사이의 간격을 계산하면, 간격들은 `[1, 2]`가 됩니다. 여기서 최대 간격은 2이므로, 이것이 가장 넓은 수직 영역의 너비가 됩니다.
