import { config } from "./config.js";

export class Http {
  request(params) {
    wx.request({
      url: '',
      data: {},
      header: {
        'content-type': 'application/json',
        appkey: config.appkey
      },
      method: 'GET',
      timeout: 5000,
      success: (res) => {
        
      },
      fail: () => { },
    });
  }
}

