var r = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var c = r((n, s) => {
  const a = require("./countries.json"), o = require("./states.json");
  s.exports = {
    countries: a.countries,
    states: o.states
  };
});
export default c();
