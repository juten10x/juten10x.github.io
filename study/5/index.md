## C++コードがどのように表示されるか
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  
  int N, K;
  string S;
  cin >> N >> K >> S;
  
  vector<pair<char, int> > R;
  for (char c : S) {
    if (!R.empty() && R.back().first == c) R.back().second++;
    else R.push_back(make_pair(c, 1));
  }
  
  for (int i = 0; i < (int)R.size(); i++) {
    if (R[i].first == '1') {
      K--;
      if (K == 0) {
        swap(R[i-1], R[i]);
      }
    }
  }
  
  for (auto [k, v] : R) {
    while (v--) cout << k;
  }
  cout << '\n';
  
  return 0;
}

```
