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
