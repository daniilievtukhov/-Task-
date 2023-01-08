class Mp3 {
  constructor(volume, song) {
    this._volume = volume;
    this._song = song;
  }
  get volume() {
    return "Гучність:", this.volume;
  }
  set volume(volumeNumber) {
    if (volumeNumber >= 0 && volumeNumber <= 100) {
      this._volume = volumeNumber;
    } else {
      return false;
    }
  }
  get song() {
    return "Програється пісня:", this.song;
  }
  set song(song) {
    if (typeof song == "string") {
      this._song = song;
    } else {
      return false;
    }
  }
}
let m1 = new Mp3(3, "");

console.log(m1);
m1.volume = 34;
console.log(m1);
m1.song = "Carol of the bells";
console.log(m1);
