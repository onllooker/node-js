const abc = "abcdefghijklmnopqrstuvwxyz",
  t = {},
  ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  b = {};
for (let i = 0, j = abc.length; j; ) t[abc.charAt(i++)] = abc.charAt(--j);
for (let i = 0, j = ABC.length; j; ) b[ABC.charAt(i++)] = ABC.charAt(--j);
const c = Object.assign(t, b);
Atbash = (s) => (s ? (c[s.charAt(0)] || s.charAt(0)) + atbash(s.slice(1)) : s);
console.log(Atbash(""));

const result = {};
Object.entries(c).forEach(([key, value]) => {
  result[value] = key;
});
console.log(result);
DeAtbash = (s) =>
  s ? (c[s.charAt(0)] || s.charAt(0)) + atbash(s.slice(1)) : s;
console.log(DeAtbash(""));
