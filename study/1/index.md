<h1 id="_title">乱数ジェネレータ</h1>

<form action="#" name="rd_form">  
  何人?: <input type="text" name="rd">
  <input type="submit" value="OK">
  <p id="output"></p>
</form>

<script type="text/javascript">
  function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

  function rd(N) {
    let tf_array = Array(N).fill(0);
    for (let i = 0; i < N; i++) {
      tf_array[i] = i+1;
    }

    let cnt = 0;
    while (true) {
      let t = getRandomInt(N);
      if (tf_array[t-1] == 0) {
        document.write(t + "<br>");
        tf_array[t-1] = 1;
        cnt++;
      }
      if (cnt == N) break;
    }
  }

  function _main(N) {
    if (N == "") {
      return "値を入力してください";
    } else {
      return 12;
    }
  }
  
  document.getElementById('form').onsubmit = function(event) {
    event.preventDefault();
    
    let inputForm = document.getElementById('form').content.value;
    let N = '${inputForm}';

    document.getElementById('output').textContent = '${inputForm}';
  }
</script>
