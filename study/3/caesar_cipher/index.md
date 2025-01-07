## caesar_cipher
### C++
```cpp
#include <iostream>

/*
   シーザー暗号を解くためのプログラムです。
   空白を無視して、1から25文字までずらし、すべて大文字にした文字列を全列挙します。
 */

int main() {
  std::string S;
  getline(std::cin, S);

  for (int i = 1; i <= 25; i++) {
    std::string T = "";
    std::cout << i << ": ";
    for (int j = 0; j < (int)S.size(); j++) {
      if (S[j] == ' ') {
        T += ' ';
        continue;
      }
      int t = (S[j] - 'A' + i) % 26;
      T += (char)(t + 'A');
    }
    std::cout << T << '\n';
  }

  return 0;
}
```

<style>
  #ccby4, #p_ilst, #_menu {
    display: none;
  }
</style>

