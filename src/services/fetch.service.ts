// import some fetch
// import error service
// import cache service

import BASEURL from 'root/constants';

interface IFETCHOptions {
  cancelFunction: () => void,
}

export enum FETCH_STATUS {
  SUCCESS,
  ERROR,
}

export const postAPI = async (url: URL, body: {}, options: IFETCHOptions): Promise<any> => {
  let data;

  try {
    const res = await fetch(`${BASEURL}/${url}`, body, options);

    // if (204) { ... }
    // if (500) { ... }
    // if ()

    data = { res };
  } catch(error: Error) {
    // catch error
    data = {
      error: {},
      status: 'Error',
      // .....
    }

    // errorService
  }

  return data;
};
