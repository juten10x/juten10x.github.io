<h1 id="_title">乱数ジェネレータ</h1>

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
        document.getElementById('output').textContent = t + "<br>---------<br>";
        tf_array[t-1] = 1;
        cnt++;
      }
      if (cnt == N) break;
    }
  }
  
  document.getElementById('form').onsubmit = function(event) {
    event.preventDefault();
    
    let inputForm = document.getElementById('form').content.value;
    let N = `${inputForm}`;
    
    if (N == "") {
      alert("値を入力してください");
    } else {
      let M = Number(N);
      rd(M);
    }
  }
</script>
