<template>
    <div>
       <mt-cell title="标题文字"></mt-cell> 
       <div id="aa"><button @click="handleClick"><router-link to="/create">新建培训</router-link></button></div>
    </div>
</template>
<script>
export default {
    name:'next'
}
</script>
<style>
#aa{
    text-align: right;
    width:75%;
}
a{
    color: white;
}
button{
    background-color: #0099FF;
    border:none;
    border-radius: 3px;
    width:110px;
    height:40px;
    margin-top:30px;
}
body{
    margin-top:0px;
    margin-left: 0px;
    margin-right: 0px;
}
#app{
    margin-top:0px;
}
.mint-cell{
    margin-top:0px;
    background-color: #0099FF;
    text-align: left;
    color:white;
}
.mint-cell-text{
    margin-left:20px;
}
</style>
