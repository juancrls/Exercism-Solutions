//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const promisify = (cb) => {
  return (cb) => new Promise(() => cb())
};

export const all = (promises) => {
  return new Promise((res, rej) => promises.map(p => {
    try {
      p.res()
    } catch(err) {
      throw err
    }
  })) // return Promise.all(promises);
};

export const allSettled = (promises) => {
    return new Promise((res, rej) => promises.map(p => {
    try {
      p.res()
    } catch(err) {
      throw err
    }
  }))
};

export const race = (promises) => {
    return new Promise((res, rej) => promises.map(p => {
    try {
      p.res()
    } catch(err) {
      throw err
    }
  }))
};

export const any = (promises) => {
    return new Promise((res, rej) => promises.map(p => {
    try {
      p.res()
    } catch(err) {
      throw err
    }
  }))
};
