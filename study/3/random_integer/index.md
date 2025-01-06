## random_integer
### C++
```cpp
#include <iostream>
#include <vector>
#include <numeric>
#include <random>

int main() {
  std::random_device seed_gen;
  std::mt19937 engine(seed_gen());

  int N;
  std::cin >> N;

  std::vector<int> S(N), tf(N, 0);
  std::iota(S.begin(), S.end(), 1);

  int cnt = 0;
  while (true) {
    std::uint32_t t = engine() % N;

    if (tf[t] == 0) {
      std::cout << S[t] << "\n----------\n";
      tf[t] = 1;
      cnt++;
    }
    if (cnt == N) break;
  }

  return 0;
}
```

<style>#ccby4 { display: none; }</style>

