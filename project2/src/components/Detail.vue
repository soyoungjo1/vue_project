<template>
    <div class="detailpage">
        <h2>상세페이지</h2>
        <div>
            {{ blogData[$route.params.id].title }}
        </div>
    </div>   
</template>

<script>
export default {
    name : 'detailPage',
    props : {
        blogData : Array,
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