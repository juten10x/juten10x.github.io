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
