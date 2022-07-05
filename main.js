async function findMax(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (arr instanceof Array) {
        let max = arr[0]
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > max) {
            max = arr[i];
          }
        }
        resolve(max)
      } else {
        reject('Phải nhập vào 1 hàm!!!')
      }
    });
  });
}

async function doIt(){
    try{
        let result = await findMax([1,2,3,4,99,-10])
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}
doIt();

async function doIt1(){
    try{
        let result = await findMax(12)
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}
doIt1();
