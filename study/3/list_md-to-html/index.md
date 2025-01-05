## list_md-to-html

<details open>
<summary>C++</summary>

<pre><code>
#include <iostream>

/*
  Markdown 記法で書かれた リンク付きのリスト を、 HTML に変換するプログラムです。
  [] で囲んでリンクにしている文字列が全て同じである場合に使えます。
  Wandbox での動作デモ : https://wandbox.org/permlink/iiPNhsw2rB8N8xPm

  使い方
  1. 変換したい文字列の初めの行よりひとつ上の行に、[]で囲んでリンクにしている文字列を書く。
  2. （重要！）変換したい文字列の最後にひとつ改行して、 finish と書く（while 文を break するためです。例として、上記の動作デモを参照ください）。
  3. プログラムを実行して、入力として 変換したい文字列に上記1.2.の操作を加えたもの を与える。
*/

int main() {
  std::string name;
  std::cin >> name;
  
  std::cout << "<ul>" << '\n';
  while (true) {
    std::string S;
    getline(std::cin, S);
    
    if (S == "finish") break;

    S = S.substr(2, (int)S.size());

    int a = 0, b = 0;
    for (int i = 0; i < (int)S.size(); i++) {
      if (S.at(i) == '(') a = i;
      if (S.at(i) == ')') b = i;
    }
    std::cout << "  <li>" << S.substr(0, a-(int)name.size()-2) << "<a href=\"" << S.substr(a+1, b-a-1) << "\">" << name << "</a></li>" << '\n';
  }
  std::cout << "</ul>" << '\n';

  return 0;
}
</code></pre>
</details>

