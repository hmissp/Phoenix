const viewWidth=document.documentElement.clientWidth || window.innerWidth



Vue.component('con1',{
    data(){
        return{
            con1Date:[
                {
                    img:'./img/con1-item1.jpg',
                    text:'期限：2022/12/26 17:00-2022/12/26 17:00'
                },
                {
                    img:'./img/con1-item2.jpg',
                    text:'期限：2022/12/26 17:00-2022/12/26 17:00'
                },
                {
                    img:'./img/con1-item3.jpg',
                    text:'期限：2022/12/26 17:00-2022/12/26 17:00'
                },
                {
                    img:'./img/con1-item4.jpg',
                    text:'期限：2022/12/26 17:00-2022/12/26 17:00'
                },
                {
                    img:'./img/con1-item1.jpg',
                    text:'期限：2022/12/26 17:00-2022/12/26 17:00'
                },
                {
                    img:'./img/con1-item2.jpg',
                    text:'期限：2022/12/26 17:00-2022/12/26 17:00'
                },
            ]
        }
    },
    methods:{
        // clickItem(item){
        //     localStorage.setItem('item',JSON.stringify(item))
        //     this.$emit('clickItem',item)
        // }
    },
    template:`
    <div class="con1">
        <div class="part1">
            <div class="title">Collaboration</div>
            <div class="activity-list">
                <div class="item" v-for="(item,index) of this.con1Date" :key="index">
                    <div class="item-img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="item-text">{{item.text}}</div>
                </div>
                
            </div>
        </div>
        
        <div class="last-item">
            <div class="last-title">Normal</div>
            <div class="last-img">
                    <img src="./img/con1-banner.jpg" alt="">
                </div>
        </div>
    </div>
    `
})

Vue.component('con2',{
    data(){
        return{
            imgList:[
                {
                    imgUrl:'./img/con2-item1.png'
                },
                {
                    imgUrl:'./img/con2-item2.png'
                },
                {
                    imgUrl:'./img/con2-item3.png'
                },
            ],
            overlayIsShow:false,
            // itemDate:JSON.parse(localStorage.getItem('item'))
        }
    },
    methods:{
        overlayShow(){
            this.overlayIsShow=true
            document.querySelector('body').classList.add('hidden')
        },
        clickBack(){
            this.$emit('back')
        },
        overlayHidden(){
            this.overlayIsShow=false
            document.querySelector('body').classList.remove('hidden')
        },
        
    },
    template:`
    <div class="con2">
        <div class="overlay" v-if="overlayIsShow">
            <div class="remind">
                <div class="overlay-title">Help</div>
                <div class="overlay-text">TextTextTextTextText
                TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText</div>
                <div class="overlay-btn" @click="overlayHidden">OK</div>
            </div>
        </div>
        <div class="bar">
            <div class="back" @click="clickBack">
                <img src="./img/arrow-w.svg" alt="">
                back
            </div>
            <div class="text">コラボタイトル</div>
            <div class="position" @click="overlayShow">
                <img src="./img/position.svg" alt="">
            </div>
        </div>
        <div class="banner">
            <div class="banner-bg">
                <img src="./img/con1-item1.jpg" alt="">
            </div>
            <div class="text">
                <span>コラボタイトル</span>
                <span>期限：2022/12/26 17:00-2022/12/26 17:00</span>
            </div>
        </div>
        <div class="content">
            <div class="content-title">Collaboration</div>
            <div class="content-list">
                <div class="item" v-for="(item,index) of this.imgList" :key="index" >
                    <img :src="item.imgUrl" alt="">
                </div>
                
            </div>
            <div class="content-text">“Summoning Book” quantity 10</div>
            <div class="content-btns">
                <div class="summon">SUMMON</div>
                <div class="market">To the market</div>
            </div>
        </div>
    </div>
    `
})

let mySwiper

Vue.component('con3',{
    data(){
        return{
            swiperImgs:[
                './img/con1-banner.jpg',
                './img/con1-item1.jpg',
                './img/con1-item2.jpg',
                './img/con1-item3.jpg',
                './img/con1-item4.jpg',
                './img/con1-banner.jpg',
                './img/con1-item1.jpg',
                './img/con1-item2.jpg',
                './img/con1-item3.jpg',
                './img/con1-item1.jpg',
                './img/con1-item2.jpg',
                './img/con1-item3.jpg',
            ],
            swiperActive:0,
            pageIndex:0,
            overlayIsShow:false,
            ani1IsShow:false,
            ani2IsShow:false,
            ani3IsShow:false,
            ani4IsShow:false
        }
    },
    computed:{
        
        contentList(){
            let dataList=[]
            const curList=[
                {
                    imgUrl:'./img/con3-img.jpg',
                    iconUrl:'./img/con3-icon1.png',
                    iconType:1,
                    number:'NO********'
                },
                {
                    imgUrl:'./img/con3-img.jpg',
                    iconUrl:'./img/con3-icon2.png',
                    iconType:2,
                    number:'NO********'
                },
                {
                    imgUrl:'./img/con3-img.jpg',
                    iconUrl:'./img/con3-icon1.png',
                    iconType:1,
                    number:'NO********'
                },
                {
                    imgUrl:'./img/con3-img.jpg',
                    iconUrl:'./img/con3-icon1.png',
                    iconType:1,
                    number:'NO********'
                }
            ]
            for(let i=0;i<300;i++){
                dataList.push(curList[i%4])
            }
            return dataList
        },
        
    },
    methods:{
        swiperPrev(){
            // mySwiper.slidePrev()
            // const itemWidth=viewWidth*11.041667
            // const activeIndex=mySwiper.activeIndex
            // this.$refs.swiperWrapper.style.transform=`translate3d(0,0,0) !important`
            // if(activeIndex > 4){
            //     this.$refs.swiperWrapper.style.transform=`translate3d(${itemWidth*(activeIndex-4)}px,0,0) !important`
            // }
            // if((mySwiper.slides.length-activeIndex) < 4){
            //     this.$refs.swiperWrapper.style.transform=`translate3d(${itemWidth*((mySwiper.slides.length-activeIndex)-4)}px,0,0) !important` 
            // }
            const slides=this.$refs.swiperWrapper.children.length
            if(this.swiperActive>0){
                this.swiperActive--
                this.$nextTick(()=>{
                    this.$refs.swiperWrapper.querySelector('.swiper-slide-active').scrollIntoView({
                        behavior: 'smooth',
                        inline: 'center',
                        block:'nearest'
                    })
                })
                
            }
        },
        swiperNext(){
            // mySwiper.slideNext()
            // const itemWidth=viewWidth*11.041667
            // const activeIndex=mySwiper.activeIndex
            // this.$refs.swiperWrapper.style.transform=`translate3d(0,0,0) !important`
            // this.$refs.swiperWrapper.style.color='red'
            // if(activeIndex > 4){
            //     this.$refs.swiperWrapper.style.transform=`translate3d(${itemWidth*(activeIndex-4)}px,0,0) !important`
            // }
            // if((mySwiper.slides.length-activeIndex) < 4){
            //     this.$refs.swiperWrapper.style.transform=`translate3d(${itemWidth*((mySwiper.slides.length-activeIndex)-4)}px,0,0) !important` 
            // }
            const slides=this.$refs.swiperWrapper.children.length
            if(this.swiperActive<slides-1){
                this.swiperActive++
                this.$nextTick(()=>{
                    this.$refs.swiperWrapper.querySelector('.swiper-slide-active').scrollIntoView({
                        behavior: 'smooth',
                        inline: 'center',
                        block:'nearest'
                    })
                })
                
            }
        },
        
        clickListItem(){
            this.overlayIsShow=true,
            this.ani1IsShow=true,
            document.querySelector('body').classList.add('hidden')
        },
        clickOk(){
            document.querySelector('body').classList.remove('hidden')
            this.ani1IsShow=false
            this.ani2IsShow=true
            setTimeout(()=>{
                this.ani2IsShow=false
                this.ani3IsShow=true
            },1500)
        },
        clickNext(){
            this.ani3IsShow=false
            this.ani4IsShow=true
        },
        clickBack(){
            this.$emit('clickBack')
        },
        changePageIndex(index){
            this.pageIndex=index
        },
        clickSwiperSlide(index){
            this.swiperActive=index
            this.$nextTick(()=>{
                this.$refs.swiperWrapper.querySelector('.swiper-slide-active').scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block:'nearest'
                })
            })
        },
        itemOver(e){
            e.currentTarget.classList.add('in')
            e.currentTarget.classList.remove('out')
        },
        itemOut(e){
            e.currentTarget.classList.remove('in')
            e.currentTarget.classList.add('out')
        }
    },
    
    template: `
    <div class="con3">
        <div class="swiper-container" ref="swiper">
            <div class="swiper-wrapper" ref="swiperWrapper">
                <div class="swiper-slide" :class="{'swiper-slide-active':swiperActive===index}" @click="clickSwiperSlide(index)" v-for="(item,index) of this.swiperImgs" :key="index">
                    <img :src="item" alt="">
                </div>
            </div>
            <div class="swiper-button-prev" @click="swiperPrev">
                <img src="./img/arrow-w.svg" alt="">
            </div>
            <div class="swiper-button-next" @click="swiperNext">
                <img src="./img/arrow-r.svg" alt="">
            </div>
        </div>
        <div class="con3-content">
            <div class="con3-title">Your NFT</div>
            <div class="con3-list">
                <div class="item" v-for="(item,index) of contentList.slice((this.pageIndex*9),(this.pageIndex+1)*9)" :key="index" @click="clickListItem"
                @mouseover="itemOver" @mouseout="itemOut">
                    <div class="item-img">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="item-icon" :class="{'first':item.iconType===1}">
                        <img :src="item.iconUrl" alt="">
                    </div>
                    <div class="number">{{item.number}}</div>
                    <div class="btn">SUMMON</div>
                </div>
            </div>
        </div>
        <el-pagination :contentList='this.contentList.length' :pageIndex="pageIndex" @changePageIndex="changePageIndex"></el-pagination>
        
        <div class="con3-overlay" v-if="overlayIsShow">
            <div class="con3-remind" v-if="this.ani1IsShow"> 
                <div class="text">Will you burn this NFT and get a HERO?</div>
                <div class="ok" @click="clickOk" >OK</div>
            </div>
            <div class="ani2" v-if="this.ani2IsShow">
                <img src="./img/con3-ani2.png" alt="" >
            </div>
            <div class="ani3" v-if="this.ani3IsShow">
                <img src="./img/con3-ani3.png" alt="">
                <div class="next" @click="clickNext">NEXT</div>
            </div>
            <div class="ani4" v-if="this.ani4IsShow">
                <div class="ani4-title">You got this HERO!!</div>
                <img src="./img/con2-item1.png" alt="" class="child">
                <img src="./img/icon1.svg" alt="" class="twitter">
                <div class="back" @click="clickBack">Back to top</div>
            </div>
        </div>
        
    </div>
    `
})

Vue.component('el-pagination',{
    props:['contentList','pageIndex'],
    data(){
        return{
            // pageIndex:0,
            paginationIndex: Math.floor(this.pageIndex/9) || 0,
        }
    },
   
    computed:{
        allPagination(){
            let arr=[]
            const allIndex=Math.ceil(this.contentList/9)
            for(let i=1;i<=allIndex;i++){
                arr.push(i)
            }
            return arr
        },
        curPagination(){
            let arr
            arr=this.allPagination.slice(9*this.paginationIndex,9*(this.paginationIndex+1))
            return arr
        }
    },
    watch:{
        pageIndex(){
            this.$emit('changePageIndex',this.pageIndex)
        }
    },
    methods:{
        changePageIndex(){
            if(this.pageIndex+1<this.curPagination[0]){
                this.paginationIndex=Math.floor(this.pageIndex/9)
            }
            if(this.pageIndex+1>this.curPagination[this.curPagination.length-1]){
                this.paginationIndex=Math.floor(this.pageIndex/9)
            }
        },
        clickPaginationPrev(){
            if(this.pageIndex>=1){
                this.pageIndex--
            }
            this.changePageIndex()
        },
        clickPaginationNext(){
            if(this.pageIndex<this.allPagination.length-1){
                this.pageIndex++
            }
            this.changePageIndex()
        },
        clickPaginationItem(index){
            this.pageIndex=index-1
        },
        showMore(){
            if(this.paginationIndex<parseInt(this.allPagination.length/9)){
                this.paginationIndex++
            }
        }
    },
    template:`
    <div class="con3-pagination">
        <div class="prev" @click="clickPaginationPrev">
            <img src="./img/pagination-w.svg" alt="" v-if="this.pageIndex>0">
            <img src="./img/pagination-g.svg" alt="" v-else>
        </div>
        <div class="item" :class="{'active':item-1===pageIndex}" v-for="(item,index) of curPagination" :key="index" @click="clickPaginationItem(item)">
            <div class="num">{{item}}</div>
        </div>
        <div class="more" v-if="this.pageIndex<this.allPagination.length-1 && this.paginationIndex<parseInt(this.allPagination.length/9)" @click="showMore">
            <img src="./img/more.svg" alt="">
        </div>
        <div class="next" @click="clickPaginationNext">
            <img src="./img/pagination-w.svg" alt="" v-if="this.pageIndex<this.allPagination.length-1">
            <img src="./img/pagination-g.svg" alt="" v-else>
        </div>
    </div>
    `
})

Vue.component('myHero',{
    props:['pageIndex'],
    data(){
        return{
            
        }
    },
    mounted(){
        this.$emit('getHeroLength',this.heroList.length)
    },
    computed:{
        heroList(){
            let dataList=[]
            const curList=[
                {
                    imgUrl:'./img/my-img1.png',
                    itemNum:'NO********'
                },
                {
                    imgUrl:'./img/my-img2.png',
                    itemNum:'NO********'
                },
                {
                    imgUrl:'./img/my-img3.png',
                    itemNum:'NO********'
                },
                {
                    imgUrl:'./img/my-img3.png',
                    itemNum:'NO********'
                },
            ]

            for(let i=0;i<300;i++){
                dataList.push(curList[i%4])
            }
            return dataList
        }
        

    },
    template: `
    <div class="hero">
        <div class="item" v-for="(item,index) of this.heroList.slice((this.pageIndex*9),(this.pageIndex+1)*9)" :key=index>
            <div class="item-img">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="number">{{item.itemNum}}</div>
        </div>
    </div>
    `
})

Vue.component('myBook',{
    props:['pageIndex'],
    data(){
        return{
            
        }
    },
    computed:{
        dataList(){
            let arr=[]
            const List=[
                {
                    imgUrl:'./img/con3-img.jpg',
                    iconUrl:'./img/con3-icon1.png',
                    iconType:1,
                    number:'NO********'
                },
                {
                    imgUrl:'./img/con3-img.jpg',
                    iconUrl:'./img/con3-icon2.png',
                    iconType:2,
                    number:'NO********'
                },
                {
                    imgUrl:'./img/con3-img.jpg',
                    iconUrl:'./img/con3-icon1.png',
                    iconType:1,
                    number:'NO********'
                },
                {
                    imgUrl:'./img/con3-img.jpg',
                    iconUrl:'./img/con3-icon1.png',
                    iconType:1,
                    number:'NO********'
                }
            ]
            for(let i=0;i<300;i++){
                arr.push(List[i%4])
            }
            return arr
        }
    },
    mounted(){
        this.$emit('getBookLength',this.dataList.length)
    },
    template:`
    <div class="book">
        <div class="item" v-for="(item,index) of this.dataList.slice((this.pageIndex*9),(this.pageIndex+1)*9)" :key="index">
            <div class="item-img">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="item-icon" :class="{'first':item.iconType===1}">
                <img :src="item.iconUrl" alt="" >
            </div>
            <div class="number">{{item.number}}</div>
            <div class="btn">SUMMON</div>
        </div>
    </div>
    `
})

Vue.component('myNft',{
    data(){
        return{
            overlayIsShow:false,
            choose:1,
            heroLength:0,
            heroIndex:0,
            bookLength:0,
            bookIndex:0
        }
    },
    methods:{
        overlayShow(){
            this.overlayIsShow =true
            document.querySelector('body').classList.add('hidden')
        },
        clickBack(){
            this.$emit('back')
        },
        overlayHidden(){
            this.overlayIsShow=false
            document.querySelector('body').classList.remove('hidden')
        },
        clickHero(){
            this.choose=1
        },
        clickBook(){
            this.choose=2
        },
        getHeroLength(length){
            this.heroLength=length
        },
        getBookLength(length){
            this.bookLength=length
        },
        changeHeroIndex(index){
            this.heroIndex=index
        },
        changeBookIndex(index){
            this.bookIndex=index
        }
    },
    template: `
    <div class="my">
        <div class="overlay" v-if="overlayIsShow">
            <div class="remind">
                <div class="overlay-title">Help</div>
                <div class="overlay-text">TextTextTextTextText
                TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText</div>
                <div class="overlay-btn" @click="overlayHidden">OK</div>
            </div>
        </div>
        <div class="bar">
            <div class="back" @click="clickBack">
                <img src="./img/arrow-w.svg" alt="">
                back
            </div>
            <div class="text">コラボタイトル</div>
            <div class="position" @click="overlayShow">
                <img src="./img/position.svg" alt="">
            </div>
        </div>
        <div class="my-content">
            <div class="choose">
                <div class="option" :class="{'active':this.choose===1}" @click="clickHero">Hero</div>
                <div class="option" :class="{'active':this.choose===2}" @click="clickBook">Summoner’s book</div>
            </div>
            <my-hero v-if="this.choose===1" @getHeroLength="getHeroLength" :pageIndex="heroIndex"></my-hero>
            <my-book v-if="this.choose===2" @getBookLength="getBookLength" :pageIndex="bookIndex"></my-book>
        </div>
        <el-pagination v-if="this.choose===1" :contentList='this.heroLength' :pageIndex="heroIndex" @changePageIndex="changeHeroIndex" :key="1"></el-pagination>
        <el-pagination v-if="this.choose===2" :contentList='this.bookLength' :pageIndex="bookIndex" @changePageIndex="changeBookIndex" :key="2"></el-pagination>

    </div>
    `
})

const app=new Vue({
    data() {
        return {
            chooseImg:1,
            bannerDate:'',
            whichComponent:1
        }
    },
    methods:{
        clickItem(item){
            // this.bannerDate=item
            this.whichComponent=2
            document.documentElement.scrollTop=0
        },
        clickBack(){
            this.whichComponent=1
            document.documentElement.scrollTop=0
        },
        
       
        clickMyNft(){
            this.whichComponent=3
            document.documentElement.scrollTop=0
        },
        clickMy(){
            this.whichComponent=4
            document.documentElement.scrollTop=0
        }
    },
    template:`
    <div class="wrapper">
        <div class="bg">
            <img src="./img/BG.jpg" alt="">
        </div>
        <div class="topbar">
            <div class="left" @click="clickBack">
                <img src="./img/SUMMON.svg" alt="" v-if="this.whichComponent===1">
                <img src="./img/REVEAL.svg" alt="" v-else>
            </div>
            <a href="javascript:;" class="right">Connect Wallet</a>
        </div>
        <div class="choose-list">
            <div class="item" @click="clickBack">Home</div>
            <div class="item" @click="clickMy">Market</div>
            <div class="item" @click="clickMyNft">My NFT</div>
            <div class="item" @click="clickItem">Reveal</div>
            <div class="item">White Paper</div>
            <div class="item">SNS</div>
        </div>
        <con1 v-if="this.whichComponent===1"></con1>
        <con2 @back="clickBack"  v-if="this.whichComponent===2"></con2>
        <con3 @clickBack="clickBack" v-if="this.whichComponent===3"></con3> 
        <my-nft @back="clickBack"  @clickBack="clickBack" v-if="this.whichComponent===4"></my-nft>
        <div class="bottom-content">
            <div class="app-store">
                <div class="apple">
                    <img src="./img/app.png" alt="">
                </div>
                <div class="google">
                    <img src="./img/google.png" alt="">
                </div>
            </div>
            <div class="bottom-text1">Chain Colosseum is revived as an iOS/Android app!!</div>
            <div class="icon-list">
                <div class="icon">
                    <img src="./img/icon1.svg" alt="">
                </div>
                <div class="icon">
                    <img src="./img/icon2.svg" alt="">
                </div>
                <div class="icon">
                    <img src="./img/icon3.svg" alt="">
                </div>
            </div>
            <div class="policy">Privacy Policy</div>
            <div class="copyright">Copyright 2022 Chain Colossum Phoenix</div>
        </div>
    </div>
    `
   
}).$mount('#app')




