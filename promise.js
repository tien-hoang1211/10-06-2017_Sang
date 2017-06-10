const add = (a, b) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof(a) !== 'number' || typeof(b) !== 'number')
                return reject(new Error('Type error!'));
            resolve(a + b);
        }, 1000);
    })
);

add(3, '4')
    .then(tong => console.log(tong))
    .catch(err => console.log(err + ''));