<script type="text/javascript">
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function rd() {
    if (rd_form.rd.value == "") {
      alert("値を入力してください");
      return false;
    } else {
      let N = rd_form.rd.value;
      let tf_array = Array(N).fill(0);
      for (let i = 0; i < N; i++) {
        tf_array[i] = i+1;
      }

      let cnt = 0;
      while (true) {
        let t = getRandomInt(N) - 1;
        if (tf_array[t] == 0) {
          document.write(t + "<br>");
          tf_array[t] = 1;
          cnt++;
        }
    }
  }
</script>


<h1 id="_title">乱数ジェネレータ</h1>

<form action="index.html" method="get" name="rd_form">
  何人?: <input type="text" name="rd">
  <input type="submit" value="OK" onClick="rd();">
</form>
