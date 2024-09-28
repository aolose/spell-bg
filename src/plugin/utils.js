const base =
  '\x03\x04\x05\x06\x07\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19' +
  '\x1a\x1b\x1c\x1d\x1e\x1f\x7f\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89' +
  '\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a' +
  '\x9b\x9c\x9d\x9e\x9f\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xab' +
  '\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc' +
  '\xbd\xbe\xbf\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd' +
  '\xce\xcf\xd0\xd1\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda\xdb\xdc\xdd\xde' +
  '\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef' +
  '\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff';

const [ba, bb] = [115, 33];
const baseStr = base.slice(0, ba);
const tStr = base.slice(ba, ba + bb);
const hStr = base.slice(ba + bb);
export const n2s = (a) => {
  if (a < ba) return baseStr[a];
  let v = a % ba;
  let s = baseStr[v];
  a = (a - v) / ba;
  if (a < bb) return tStr[a] + s;
  v = a % bb;
  a = (a - v) / bb;
  return hStr[a] + tStr[v] + s;
};
export const s2n = (str) => {
  const l = str.length;
  let a = baseStr.indexOf(str[l - 1]);
  if (l > 1) a += tStr.indexOf(str[l - 2]) * ba;
  if (l > 2) a += hStr.indexOf(str[0]) * ba * bb;
  return a;
};

export const compressor = (tokenizer) => {
  const dic = [];
  const counter = {};
  let ori = 0;
  let reduce = 0;
  const parsWord = (str) => {
    tokenizer(str).forEach((k) => {
      if (k.length > 5) counter[k] = (counter[k] || 0) + 1;
    });
  };
  const strZip = (str) => {
    const words = tokenizer(str);
    words.forEach((a, i) => {
      const idx = dic.indexOf(a);
      if (idx !== -1) {
        words[i] = n2s(idx);
      }
    });
    const ss = words.join('');
    ori += str.length;
    reduce += str.length - ss.length;
    console.log(`compressed: ${((reduce * 100) / ori).toFixed(2)}%`);
    return ss;
  };

  return {
    dic,
    parse: parsWord,
    zip: strZip,
    sort() {
      const kvs = Object.entries(counter);
      kvs.sort((a, b) => {
        return b[1] - a[1];
      });
      let base = n2s(dic.length).length;
      kvs.forEach(([str, num]) => {
        if (num > 1 && str.length > base + 1) {
          dic.push(str);
          base = dic.length.toString(36).length;
        }
      });
    }
  };
};
