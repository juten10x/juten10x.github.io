## 乱数ジェネレータ（製作中）

<form action="#" id="form">  
  <input type="text" name="content">
  <input type="submit" value="OK">
  <p id="output"></p>
</form>

<script>
  function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

  function rd(N) {
    let tf_array = Array(N).fill(0);
    for (let i = 0; i < N; i++) {
      tf_array[i] = i+1;
    }

    let cnt = 0;
    let rd_n = "";
    while (true) {
      let t = getRandomInt(N);
      if (tf_array[t-1] == 0) {
        rd_n += t + "<br>---------<br>";
        tf_array[t-1] = 1;
        cnt++;
      }
      if (cnt == N) break;
    }

    return rd_n;
  }
  
  document.getElementById('form').onsubmit = function(event) {
    event.preventDefault();
    
    let inputForm = document.getElementById('form').content.value;
    let N = `${inputForm}`;
    
    if (N == "") {
      alert("値を入力してください");
    }
    else if (!isFinite(N)) {
      alert("数値を入力してください");
    }
    else {
      alert("すみません、まだ製作中です");
      /* let M = Number(N);
      let rd_n = rd(M);
      document.getElementById('output').textContent = rd_n; */
    }
  }
</script>

<style>#ccby4 { display: none; }</style>

```js
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function rd(N) {
  let tf_array = Array(N).fill(0);
  for (let i = 0; i < N; i++) {
    tf_array[i] = i+1;
  }

  let cnt = 0;
  let rd_n = "";
  while (true) {
    let t = getRandomInt(N);
    if (t == 0) continue;
    if (tf_array[t-1] == 0) {
      rd_n += t + "<br>---------<br>";
      tf_array[t-1] = 1;
      cnt++;
    }
    if (cnt == N) break;
  }

  return rd_n;
}

let S = rd(3);
document.write(S);
```

以下にコード（これとは関係ない）がどのように表示されるのかを試す

<pre>
  <code>
    #include <iostream>
    using namespace std;

    int main() {
      ios::sync_with_stdio(false);
      cin.tie(nullptr);

      cout << "Hello" << '\n';

      return 0;
    }
  </code>
</pre>

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

template <typename T>
string _10to2(T N) {
  if (N == 0) return string("0");
  string S = "";
  
  while (N != 0) {
    S += (N%2 == 0 ? '0' : '1');
    N /= 2;
  }
  reverse(S.begin(), S.end());

  return S;
}


int main() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);

  long long N;
  cin >> N;

  cout << _10to2(N) << '\n';
  return 0;
}
```
