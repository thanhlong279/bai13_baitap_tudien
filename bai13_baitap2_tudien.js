function tudien() {
    let str = document.getElementById("str").value;
    let arr_eng = ["banana", "table", "hello"];
    let arr_vn = ["qua chuoi", "cai ban", "xin chao"];
    let result = '';
    let index = 0;
    for (let i = 0; i < arr_eng.length; i++) {
        if (str === arr_eng[i]) {
            index = i;
        }
        for (let j = 0; j < arr_vn.length; j++) {
            if (index === j) {
                result = arr_vn[j];
            }else{
                result = "ko tim thay.";
            }
        }
    }
    document.getElementById("result").innerHTML = result;
}