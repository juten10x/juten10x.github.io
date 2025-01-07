## prime_factorization
### C++
```
#include <iostream>
#include <map>

std::map<long long, long long> res;
long long t = 0;

void pf_mapA(long long N) {
  for (long long i = 2; i*i <= N; i++) {
    if (N%i != 0) continue;
    long long cnt = 0;
    while (N%i == 0) {
      cnt++;
      N /= i;
    }

    res[i] += cnt;
    t++;
  }

  if (N != 1) res[N] = 1, t++;
}

int main() {
  long long N;
  std::cin >> N;

  if (N == 1) {
    std::cout << "1は素因数を持ちません\n";
    return 0;
  }

  pf_mapA(N);

  std::cout << N << " = ";
  long long r = 0;
  for (auto i : res) {
    r++;
    std::cout << i.first << '^' << i.second;
    if (t > r) std::cout << " * ";
  }
  std::cout << '\n';

  return 0;
}
```
### JavaScript
```js
let N = prompt("10^9 以下の正整数を入力してください");

let pf_array = Array(N).fill(0);
let judge = [];
let size = 0;

function pf(N) {
  let x = N;
  for (let i = 2; i <= N; i++) {
    if (x%i != 0) continue;

    let cnt = 0;
    while (x%i == 0) {
      cnt += 1;
      x /= i;
    }
    pf_array[i] = cnt;
    judge.push(i);
    size += 1;
  }

  if (x != 1) pf_array[x] = 1;
}

pf(N);

if (N == 1) {
  document.write("1は素因数を持ちません");
}
else if (N != 0) {
  document.write(N + " = ");
  for (let i = 0; i < size; i++) {
    let v1 = judge[i];
    let v2 = pf_array[v1];
    document.write(v1 + '^' + v2);
    if (i + 1 != size) {
      document.write(" * ");
    }
  }
}
```


<style>
  #ccby4 {
    display: none;
  }
  #_menu {
    display: none;
  }
</style>

