<template>
    <div>
        <mt-header fixed title="培训详情">
            <router-link to="/index" slot="left">
            <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div id="aa">
            <img id="bb" src="../img/3.jpg">
            <div id="cc">你们都是狗屎(⊙w⊙)呸呸呸呸呸呸呸呸呸呸呸呸呸呸呸呸呸呸呸呸呸</div>
            <p>入职培训分为三个阶段，此为第一个阶段。请各位完成各类规章制度的学习。如有疑问可咨询人力资源部，电话：8008208820</p>
            <div id="dd">
                <p id="ee" @click="handleClick1">2019年制度培训方案01.video<div id="d">{{length}}</div></p>
                <video v-show="show" width="350" height="200" controls>
                    <source src="../video/1.mp4" type="video/mp4">
                </video>
            </div>
            <div id="hh">
                <p id="ii" @click="handleClick2">2019年培训方案02.video</p>
                <video v-show="ok" width="350" height="200" controls>
                    <source src="../video/2.mp4" type="video/mp4">
                </video>    
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            show:false,
            ok:false
        }
    },
    methods:{
        handleClick1(){
            this.show=true;
        },
        handleClick2(){
            this.ok=true;
        }
    },
    name:'more'
}
</script>
<style>
#dd,#hh{
    height:60px;
    background-color: white;
    margin-left:10px;
    margin-top:10px;
    border:1px solid #E8E8E8;
}
video{
    z-index: 100; 
    position: absolute; 
    top: 50%; 
    left: 50%; 
    min-width: 100%; 
    min-height: 100%; 
    object-fit: fill;/*这里是关键*/ 
    width: 100%; 
    height: 100%; 
    -ms-transform: translateX(-50%) translateY(-50%); 
    -webkit-transform: translateX(-50%) translateY(-50%); 
    transform: translateX(-50%) translateY(-50%); 
    background-size: cover;
    background: url('../img/4.jpg');
}
source{
    width:100%;
}
#ee,#ii{
    color: black;
    margin-bottom: 0px;
    margin-top:10px;
}
body{
    background-color: white;
}
p{
    margin-left:10px;
    text-align: left;
    color:gray;
}
#aa{
}
#bb{
    width:95%;
    
}
#cc{
    margin-top:8px;
    margin-left:10px;
    text-align: left;
    font-size:20px;
}
</style>
