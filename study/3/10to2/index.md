## 10to2
### C++
```cpp
#include <iostream>
#include <algorithm>

/*
  10進数を2進数に変換します。
  小数には対応していません。
*/

std::string _10to2(long long N) {
  if (N == 0) return std::string("0");
  std::string S = "";

  while (N != 0) {
    S += (N%2 == 0 ? '0' : '1');
    N /= 2;
  }
  std::reverse(S.begin(), S.end());

  return S;
}


int main() {
  long long N;
  std::cin >> N;

  std::cout << _10to2(N) << '\n';

  return 0;
}
```

<style>
  #ccby4, #p_list, #_menu {
    display: none;
  }
</style>

