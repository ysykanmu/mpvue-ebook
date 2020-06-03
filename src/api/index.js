import { get, post } from '../utils/request'
const API_URL = 'https://test.youbaobao.xyz:18081'

export function getHomeData(params) {
    return get(`${API_URL}/book/home/v2`, params)
}

export function recommend() {
    return get(`${API_URL}/book/home/recommend/v2`)
}

export function hotBook() {
    return get(`${API_URL}/book/home/hotBook/v2`)
}

export function freeRead() {
    return get(`${API_URL}/book/home/freeRead/v2`)
}

export function categoryList() {
    return get(`${API_URL}/book/category/list/v2`)
}

export function categoryItem(params) {
    return get(`${API_URL}/book/search-list`, params)
}

export function getSetting(onSuccess, onFail) {
    mpvue.getSetting({
        success(res) {
            if (res.authSetting['scope.userInfo']) {
                console.log('授权成功');
                onSuccess(res)
            } else {
                console.log("请重新授权");
                onFail(res)

            }

        },
        fail(res) {
            console.log("失败");
            console.log(res);

        }
    })
}

export function getUserInfo(onSuccess, onFail) {
    mpvue.getUserInfo({
        success(res) {
            const userInfo = res.userInfo
            if (userInfo) {
                //mpvue.setStorageSync('userInfo', userInfo)
                onSuccess(userInfo)
            } else {
                onFail(userInfo)
            }
        },
        fail(res) {
            console.log("失败");
            console.log(res);

        }
    })
}


export function getUserOpenId(callback) {
    mpvue.login({
        success(res) {
            if (res.code) {
                const code = res.code;
                getOpenId(code).then(res => {
                    const openId = res.data.data.openid
                    //mpvue.setStorageSync('openId', openId)
                    callback(openId)
                })

            }
        }
    });
}

export function getOpenId(code) {
    return get(`${API_URL}/openId/get`, {
        appId: 'wx14d7c1dc773734fb',
        code,
        secret: '35333ce3008d4f5ef4487729317f4b8b',

    })
}

export function register(openId, userInfo) {
    return post(`${API_URL}/user/register`, {
        openId,
        platform: mpvuePlatform,
        ...userInfo
    })
}


export function hotSearch() {
    return get(`${API_URL}/book/hot-search`)
}

export function search(params) {
    return get(`${API_URL}/book/search`, params)
}

export function bookDetail(params) {
    return get(`${API_URL}/book/detail`, params)
}

export function bookRankSave(params) {
    return get(`${API_URL}/book/rank/save`, params)
}

export function bookContents(params) {
    return get(`${API_URL}/book/contents`, params)
}

export function bookShelfGet(params) {
    return get(`${API_URL}/book/shelf/get`, params)
}

export function bookShelfSave(params) {
    return get(`${API_URL}/book/shelf/save`, {
        shelf: JSON.stringify(params)
    })
}

export function bookShelfRemove(params) {
    return get(`${API_URL}/book/shelf/remove`, {
        shelf: JSON.stringify(params)
    })
}

export function userDay(params) {
    return get(`${API_URL}/user/day`, params)
}

