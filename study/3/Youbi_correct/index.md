## Youbi_correct

<details open>
<summary>C++</summary>

<pre><code>
#include <iostream>
#include <vector>
#include <math.h>

/*
  * ツェラーの公式を使って、年月日から曜日を計算します。
  * 現在使われている、グレゴリオ暦にのみ対応しています（1582年10月15日以降）。
  * 年　月　日　の順に、改行または空白区切りで入力して下さい。
*/

int floor_mine(int a, int b) {
  return std::floor(a / b);
}

std::string Zeller_c(int y, int m, int d) {
  std::vector<std::string> Youbi_vec = {"土", "日", "月", "火", "水", "木", "金"};

  if (m < 3) {
    m += 12;
    y -= 1;
  }
  int Y = y%100;

  int ans = floor_mine(26*(m+1), 10)%7 + d%7 + Y%7 + floor_mine(Y, 4)%7 - (2*floor_mine(y, 100))%7 + floor_mine(y, 400)%7;

  return Youbi_vec[ans%7];
}

int main() {
  int y, m, d;
  std::cin >> y >> m >> d;

  std::string Youbi = Zeller_c(y, m, d);

  printf("%d年%d月%d日は ", y, m, d);
  std::cout << Youbi << "曜日 です。\n";

  return 0;
}
</code></pre>
</details>

<details open>
<summary>JavaScript</summary>

<pre><code>
/*
  * ツェラーの公式を使って、年月日から曜日を計算します。
  * 現在使われている、グレゴリオ暦にのみ対応しています（1582年10月15日以降）。
*/

function floor(a, b) {
  return Math.floor(a/b);
}

function Zeller_c(y, m, d) {
  let Youbi_str = "土日月火水木金";
  
  if (m < 3) {
    m += 12;
    y -= 1;
  }
  let Y = y%100;
  
  
  let ans = floor(26*(m+1), 10)%7 + d%7 + Y%7 + floor(Y, 4)%7 - (2*floor(y, 100))%7 + floor(y, 400)%7;
  
  return Youbi_str[ans%7];
}


let yp = prompt("何年？");
let mp = prompt("何月？");
let dp = prompt("何日？");

let y = Number(yp);
let m = Number(mp);
let d = Number(dp);

let Youbi = Zeller_c(y, m, d);

document.write(y + "年" + m + "月" + d + "日は " + Youbi + "曜日 です。");
</code></pre>
</details>

