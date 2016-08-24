var lists=[];
for (var i = 0; i < 10000; i++) {
  lists.push(i);
}


new Vue({
  el: '#app',
  data: {
    lists: lists
  }
});
