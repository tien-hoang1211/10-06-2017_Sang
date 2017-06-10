const add = (a, b, cb) => {
    setTimeout(() => {
        if (typeof(a) === "number" && typeof(b) === "number")
            return cb(null, a + b);
        return cb(new Error("Type error!"));
    }, 1000);
};
const mul = (a, b, cb) => {
    setTimeout(() => {
        if (typeof(a) === "number" && typeof(b) === "number")
            return cb(null, a * b);
        return cb(new Error("Type error!"));
    }, 1000);
};
const div = (a, b, cb) => {
    setTimeout(() => {
        if (typeof(a) !== "number" && typeof(b) !== "number")
            cb(new Error("Type error!"));
        if (b === 0)
            cb(new Error("Chia cho 0!"));
        return cb(null, a / b);
    }, 1000);
};

add(4, 5, (err, data) => {
    if (err) return console.log(err + '');
    mul(data, 6, (err, data) => {
        if (err) return console.log(err + '');
        div(data, 2, (err, data) => {
            if (err) return console.log(err + '');
            return console.log(data);
        })
    })
})

function tinhDienTich(a, b, h, cb) {
    add(a, b, (err, data) => {
        if (err) return cb(err + '');
        mul(data, h, (err, data) => {
            if (err) return cb(err + '');
            div(data, 2, (err, data) => {
                if (err) return cb(err + '');
                return cb(null, data);
            })
        })
    })
}

tinhDienTich(4, 5, '6', (err, data) => {
    if (err) return console.log(err + '');
    console.log(data);
})