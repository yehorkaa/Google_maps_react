import { styled, alpha } from "@mui/material/styles";
import {
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { get } from "http";
import { arrayBuffer } from "node:stream/consumers";

export const FormaControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: "30px",
  paddingTop: "6px",
  marginTop: "15px",
}));

export const Container = styled("div")(({ theme }) => ({
  padding: "25px",
}));

export const Lists = styled(Grid)(({ theme }) => ({
  height: "75vh",
  overflow: "auto",
}));

export const LoadComp = styled("div")(({ theme }) => ({
  height: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const isUnique = (str) => {
  let maxQuantity = 0;
  let FINAL = "";
  str.split(" ").reduce((acc, next) => {
    acc[next] ? acc[next]++ : (acc[next] = 1);

    if (acc[next] > maxQuantity) {
      maxQuantity = acc[next];
      FINAL = next;
    }

    return acc;
  }, {});

  return FINAL;
};

console.log(isUnique("def def def biba biba good koko kwk"));

const getRes = (arr) => {
  const obj = arr.reduce((acc, next) => {
    acc[next] ? acc[next]++ : (acc[next] = 1);
    return acc;
  }, {});

  const maxNum = Math.max(...Object.values(obj));
  const res = [];
  for (let item in obj) {
    if (obj[item] === maxNum) {
      res.push(item);
    }
  }
  return res;
};

console.log(
  getRes([
    "herbata",
    "herbata",
    "herbata",
    "def",
    "def",
    "biba",
    "biba",
    "biba",
    "biba",
  ])
);

const findShort = (str) => {
  return str.split(" ").sort((a, b) => a.length - b.length)[0];
};

console.log(findShort("Hello my name is Yehor i would like to wotk at GL"));

const getInitials = (str) => {
  return str
    .split(" ")
    .map((item) => {
      return item.slice(0, 1).toUpperCase();
    })
    .join(".");
};

console.log(getInitials("Elon Musk"));

const r = "asrt";
console.log(r.slice(0, 3));

const getSumOfNum = (num) => {
  console.log(Math.abs(num));
  return Math.abs(num)
    .toString()
    .split("")
    .reduce((acc, item) => {
      return +acc + +item;
    }, 0);
};
console.log(getSumOfNum(-18));

const getFib = (num) => {
  const arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    let prev1 = arr[i - 1];
    let prev2 = arr[i - 2];
    arr.push(prev1 + prev2);
  }
  return arr.join(",");
};
console.log(getFib(15));

const capitalLetters = (str) => {
  return str.split("").reduce((acc, next, index) => {
    if (next === next.toUpperCase()) {
      acc.push(index);
    }
    return acc;
  }, []);
};

console.log(capitalLetters("CodeWaRsAssignMent"));

const getNewRes = (...arrays) => {
  return [...new Set(arrays.flat().sort((a, b) => a - b))];
};
console.log(getNewRes([1], [5, 2], [3, 2, 2], [4, 1, 1, 2]));

console.log(0 == []);
console.log(0 == {});
console.log(0 == 0);
console.log(0 == "");

const getBuffClouser = (name) => {
  return {
    add: () => {
      const surname = "Yesypenko";
      return "HIS NAME IS " + name.toUpperCase() + surname;
    },
    change: () => {
      const surname = "biba";
      return "His name is " + name + "ka" + surname;
    },
  };
};

const child = getBuffClouser("Yehor");
console.log(child.add());
console.log(child.change());
// export default makeStyles((theme) => ({

//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   loading: {
//     height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
//   },
//   container: {
//     padding: '25px',
//   },
//   marginBottom: {
//     marginBottom: '30px',
//   },
//   list: {
//     height: '75vh', overflow: 'auto',
//   },
// }));
