<template>
    <div class="detailpage">
        <h2>상세페이지</h2>
        <div>
            <h3>{{블로그글[$route.params.id].title}}</h3>
            <p>{{블로그글[$route.params.id].content}}</p>
            <span>{{블로그글[$route.params.id].date}}</span>
        </div>
    </div>   
</template>

<script>
export default {
    name : 'detailPage',
    props : {
        블로그글 : Array,
    },
}
</script>

<style>
.detailpage{
    margin-top:30px;
}
.detailpage h2{
    font-size:20px;
    color:#aaa;
    font-weight:600;
    margin-bottom:10px;
}
</style>