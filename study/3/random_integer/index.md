## random_integer

<details open>
<summary>C++</summary>

<pre><code>
#include <iostream>
#include <vector>
#include <random>
using namespace std;

/* 1 から N までの整数をランダムな順序で出力します。 */

unsigned long long rdm() {
  random_device rd;
  return rd();
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);

  int N;
  cin >> N;

  vector<int> S(N), tf(N, 0);
  for (int i = 0; i < N; i++) {
    S.at(i) = i+1;
  }

  int cnt = 0;
  while (true) {
    unsigned long long t = rdm() % N;
    if (tf.at(t) == 0) {
      cout << S.at(t) << "\n---------\n";
      tf.at(t) = 1;
      cnt++;
    }
    if (cnt == N) break;
  }

  return 0;
}

</code></pre>
</details>

<style>#ccby4 { display: none; }</style>

