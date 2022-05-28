//文件名尽量和模块页面文件名统一（方便查找）
import request from '@/utils/request'

//向外导出
//首页 - 推荐歌单的数据
export const recommendMusic = params => request({
    url: '/personalized',
    params,
    //将来外面可能传入params的值 {limit:20}
})

//首页 - 推荐新音乐的数据
export const newMusic = params => request({
    url: '/personalized/newsong',
    params,
})

//首页 - 轮播图的数据
export const newBanner = params => request({
    url: '/banner',
    params,
})