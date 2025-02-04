## list_md-to-html
### C++
```cpp

#include <iostream>

/*
  Markdown 記法で書かれた リスト(リンク付きも可) を、 HTML に変換するプログラムです。
  Wandboxでの動作デモ: https://wandbox.org/permlink/avYYBHDzFt3Ha0ry

  使い方
  1.(重要！)変換したい文字列の最後にひとつ改行して、 finish と書く(while 文を break するためです。例として、上記の動作デモを参照ください)。
  2. プログラムを実行して、入力として 変換したい文字列に上記の操作を加えたもの を与える。
 */

int main() {
  int where = 0, pre = 0;

  std::cout << "<ul>" << '\n';
  int ul = 1;

  while (true) {
    std::string S;
    getline(std::cin, S);

    if (S == "finish") {
      if (ul) {
        std::cout << std::string(where, ' ') << "</ul>" << '\n';
        ul--;
      }
      break;
    }

    where = 0;
    for (int i = 0; i < (int)S.size(); i++) {
      if (S[i] == '*') {
        where = i;
        break;
      }
    }
    std::string St = S.substr(where + 2, (int)S.size());

    if (where > pre) {
      std::cout << std::string(pre + 2, ' ') << "<ul>" << '\n';
      ul++;
    }
    if (where < pre) {
      int cnt = pre;
      for (int i = 0; i < (pre-where)/2; i++) {
        std::cout << std::string(where - 2 + cnt, ' ') << "</ul>" << '\n';
        cnt -= 2;
        ul -= 2;
      }
    }
    pre = where;

    bool link = false;
    if (S.find("](http") != std::string::npos) {
      link = true;
    }

    if (link) {
      int begin = 0, end = 0;
      int begin_c = 0, end_c = 0;
      for (int i = where+1; i < (int)S.size(); i++) {
        if (St[i] == '[') begin = i;
        if (St[i] == ']') end = i;
        if (St[i] == '(') begin_c = i;
        if (St[i] == ')') end_c = i;
      }
      std::cout << std::string(where + 2, ' ')  << "<li>" << St.substr(0, begin) << "<a href=\"" << St.substr(begin_c + 1, end_c - begin_c - 1) << "\">" << St.substr(begin + 1, end - begin - 1) << "</a></li>" << '\n';
    }
    else {
      std::cout << std::string(where + 2, ' ') << "<li>" << St << "</li>" << '\n';
    }
  }

  std::cout << "</ul>" << '\n';

  return 0;
}
```

<style>
  #ccby4, #_menu {
    display: none;
  }
</style>

