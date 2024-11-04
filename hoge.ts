interface Data {
    hoge: Hoge,
    hage: Hage
};

interface Hoge {
    a: number,
    b: number,
    c: number
};

interface Hage {
    d: number,
    e: number,
    f: number
};


let data: Data = {
    hoge: {
        a: 1,
        b: 2,
        c: 3
    },
    hage: {
        d: 4,
        e: 5,
        f: 6
    }
}

function f({hoge, hage}: Data) {
    console.log(hoge, hage);
}

f(data);

