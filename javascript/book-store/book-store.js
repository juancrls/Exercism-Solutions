export const cost = (basket) => {
    let types = [];

    while (basket.length > 0) {
        let booksGroups = new Set(basket);

        booksGroups.forEach(book => basket.splice(basket.indexOf(book), 1));
        types.push(booksGroups);
    }

    if (types.length == 0) return 0;

    types.reduce((prev, cur) => {
        if (prev && prev.size == 5 && cur.size == 3) {
            Array.from(prev).forEach(num => {
                if (!cur.has(num) && cur.size !== prev.size) {
                    prev.delete(num);
                    cur.add(num);
                }
            })
        } else if (prev && prev.size == 5 && cur.size == 5) {
            if (types.filter(x => x.size == 3).length > 0) {
                let available = types.filter(x => x.size == 3)[0];
                Array.from(prev).forEach(num => {
                    if (!available.has(num) && prev.size == 5) {
                        prev.delete(num)
                        available.add(num);
                    }
                })
                if (types.filter(x => x.size == 3).length > 0) {
                    available = types.filter(x => x.size == 3)[0];
                    Array.from(cur).forEach(num => {
                      if (!available.has(num) && cur.size == 5) {
                          cur.delete(num)
                          available.add(num);
                      }
                    })
                }
            }
        }
    });

    return types.map(l => {
        l = l.size
        let price = 800;
        return l == 2 ? l * price * 0.95 : l == 3 ? l * price * 0.90 : l == 4 ? l * price * 0.80 : l == 5 ? l * price * 0.75 : l * price
    }).reduce((a, b) => a + b);
};