<template>
    <div>
        <mt-header fixed title="在线培训"></mt-header>
        <router-link to="/more">
        <div id="aa">
        <img id="bb" src="../img/1.jpg">
        <div id="cc">你们这群垃圾</div>
        </div>
        </router-link>
        <router-link to="/next">
        <div id="dd">
            <img id="ff" src="../img/2.jpg">
            <div id="ee">本宝宝最棒~ o(*￣▽￣*)ブ</div>
        </div>
        </router-link>
    </div>
</template>
<script>
export default {
    data:{
    
    },
    methods:{
        
    },
    name:'index'
}
</script>
<style>
#ee{
    height:40px;
    background-color: white;
    text-align: left;
    margin-left:30px;
    margin-top:10px;
    color: black;
}
#ff{
    width:95%;
    border-radius: 15px;
}
#cc{
    text-align: left;
    margin-left:30px;
    margin-top:10px;
    height:40px;
    color:black;
}
.mint-header.is-fixed{
    background-color: white;
}
.mint-header-title{
    color: black;
    font-size: 24px;
}
body{
    background-color: #ededed;
    margin-left:0px;
    margin-right:0px;
}
#aa{
    background-color: white;
    border-radius: 15px;
    margin-left:8px;
    margin-right:8px;
}
#bb{
    width:100%;
    border-radius: 15px;
}
#dd{
    margin-top:20px;
    border-radius: 15px;
}
</style>
