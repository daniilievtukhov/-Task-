//анонімна функція
var user = {
  name: "Tom",
};
function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
}

var tomFormat = function () {
  format.call(user, "<<<", ">>>");
};
tomFormat(); // "<<<Tom>>>"

// .bind()
var user = {
  name: "Tom",
};
function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
}
var tomFormat = format.bind(user);
tomFormat("<<<", ">>>"); // "<<<Tom>>>"
