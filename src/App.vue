<template>
  <MainHeader></MainHeader>
  <NavigationBar></NavigationBar>
  <router-view />
</template>
<script>
import NavigationBar from './components/NavigationBar.vue';
import MainHeader from './components/MainHeader.vue';

export default{
  components:{
    NavigationBar,
    MainHeader
  }
}
</script>
<style lang="scss">
@import '@/scss/index.scss';


</style>
