## isPrime
```cpp
#include <iostream>

/*
  素数かどうかを判定します。
  素数でない場合には、何で割ることができるかを式で示します。
*/

long long isPrime(long long x) {
  if (x == 1) return 0;
  for (long long i = 2; i*i <= x; i++) {
    if (x%i == 0) return i;
  }
  return 1;
}

int main() {
  long long N;
  std::cin >> N;

  long long t = isPrime(N);

  if (t == 1) {
    std::cout << N << " は素数です。\n";
  }
  else {
    std::cout << N << " は素数ではありません。\n";
    if (N != 1) {
      std::cout << N << " ÷ " << isPrime(N) << " = " << N/isPrime(N) << '\n';
    }
  }

  return 0;
}
```
