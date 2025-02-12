const t = new Date(document.lastModified);
const day = t.getFullYear() + "-" + ('0' + (t.getMonth() + 1)).slice(-2) + "-" + ('0' + (t.getDate())).slice(-2);
document.getElementById('lastModifiedDay').innerHTML = "<time datetime=\"" + day + "\">" + day + "</time>";
