// 状态管理
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 实例化Vuex，创建一个仓库
const store = new Vuex.Store({
    // 状态
    state: {
        //首页封面
        imgs: [
            { title: "吊坠", isrc: "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031313311646362.jpg" },
            { title: "手镯", isrc: "https://img.ybzha.com//newmall/goods/201808/14/20180814195600323001.jpg" },
            { title: "耳饰", isrc: "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2018101817011444595.jpg" },
            { title: "串珠", isrc: "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031319430216192.JPG" },
            { title: "挂件", isrc: "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031313015349196.jpg" },
            { title: "项链", isrc: "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/thumb/2/oss_2_2018101716512876418_240.jpg" },
            { title: "戒指", isrc: "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2018101715500629547.jpg" },
            { title: "摆件", isrc: "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031517120717271.jpg" },
            { title: "把件", isrc: "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods032018121716360055682.jpg" },
        ],
        imgList: {
            0: [
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031313144820021.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031313123493933.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031216381997483.JPG",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031313311646362.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031216382387070.JPG",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031216370455628.JPG",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031216341243515.JPG",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031216381542765.JPG"
            ],
            1: [
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods342019010209230283253.jpg",
                "https://img.ybzha.com//newmall/goods/201808/14/20180814172343670002.jpg",
                "https://img.ybzha.com//newmall/goods/201808/14/20180814172343440001.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods342019010209230284565.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/91/oss_91_2019030117051760373.jpg",
                "https://img.ybzha.com//newmall/goods/201808/14/20180814172344217004.jpg",
                "https://img.ybzha.com//newmall/goods/201808/14/20180814195600323001.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019010211223118578.jpg",
                "https://img.ybzha.com//newmall/goods/201808/14/20180814195600403004.jpg",
            ],
            2: [
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2018101817075451404.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/25/oss_25_2018102611175548698.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/25/oss_25_2018102611180221497.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2018101817011444595.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019010216050046794.png",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2018101817111164349.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2018101817040348110.jpg"
            ],
            3: [
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031319365837257.JPG",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031319390997394.JPG",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031319501665972.JPG",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031320021482911.JPG",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031319523173520.JPG",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031319430216192.JPG",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031320040740291.JPG"
            ],
            4: [
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031313071350692.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031312094780981.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031312141679225.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031313284074597.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031313015349196.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031313311781331.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2019031313312299461.jpg"
            ],
            5: [
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/thumb/2/oss_2_2018101716512876418_240.jpg",
                "https://img.ybzha.com//newmall/goods/201807/26/20180726194736532002.jpg",
                "https://img.ybzha.com//newmall/goods/201807/26/20180726195930638001.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2018101716534476380.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/35/oss_35_goods092018112711303570684.jpg",
                "https://img.ybzha.com//newmall/goods/201807/26/20180726194736532002.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2018101716534071086.jpg"

            ],
            6: [
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/25/oss_25_2018102611191364468.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2018101715500629547.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/25/oss_25_2018102611200991982.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2018101715501870977.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/91/oss_91_2019030118083194221.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/25/oss_25_2018102611193436924.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/2/oss_2_2018101715501183727.jpg"
            ],
            7: [
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods332018121716363083848.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/37/oss_37_goods032018102918274925608.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods312018121716362617482.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods332018121716362931217.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/83/oss_83_2019010712152835420.jpg"
            ],
            8: ["https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/34/oss_34_goods222018110916245464677.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods032018121716360044279.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/34/oss_34_goods222018110916245510200.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/83/oss_83_2019010710463688484.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/83/oss_83_2019011110585895155.jpg",
                "https://mallssy.oss-cn-shenzhen.aliyuncs.com/home/store/goods/29/oss_29_goods032018121716360055682.jpg"
            ]
        },
        listIdx: '0',
        historyImg: [],
        collectImg: [],
        informShow: false,
    },
    // 修改数据的方法 真正改数据的操作
    mutations: {
        editInformShow(state) {
            state.informShow = !state.informShow;
        }, editHistoryImg(state, data) {
            state.historyImg.push(data);
        },
        editCollectImg(state, data) {
            state.collectImg.push(data);
        },
        editListIdx(state, data) {
            state.listIdx = data;
        }
    }
})

export default store