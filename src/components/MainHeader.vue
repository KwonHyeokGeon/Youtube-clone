<template>
  <div class="mainHeader">
    <div class="container">
      <div class="header-left">
        <img :src="require(`@/assets/nav_ico/bars-solid.svg`)" alt="메뉴바" class="header-left_menu" @click="naviModal">
        <a href="#">
          <img :src="require(`@/assets/nav_ico/logo.png`)" alt="로고" class="logo">
        </a>
      </div>
      <div class="search">
        <div class="search-wrapper" :style="{ border: (borderLine ? '1px solid #1c62b9' : '1px solid #d3d3d3') }">
          <input type="text" class="search-input" placeholder="검색" @focus="borderLine = true"
            @focusout="borderLine = false" :style="{ 'margin-left': (borderLine ? '20px' : '0px') }">
          <img :src="require(`@/assets/nav_ico/keyboard.svg`)" alt="키보드" class="search-keyboard">
          <img :src="require(`@/assets/nav_ico/magnifying-glass.png`)" alt="검색" class="search-input_ico"
            :style="{ display: (borderLine ? 'inline-block' : 'none') }">
        </div>
        <button class="search-btn"><img :src="require(`@/assets/nav_ico/magnifying-glass.png`)" alt="검색"
            class="search-ico"></button>
        <img :src="require(`@/assets/nav_ico/microphone.svg`)" alt="음성으로 검색" class="search-mic">
      </div>
      <div class="header-right">
        <img :src="require(`@/assets/nav_ico/ellipsis-vertical.svg`)" alt="설정" class="ellipsis-btn">
        <div class="header-login"><img :src="require(`@/assets/nav_ico/person.png`)" alt="로그인"
            class="person-btn"><span class="header-login_txt">로그인</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  data() {
    return {
      borderLine: false,
    }
  },
  methods: {
    naviModal(){
      this.$store.commit('naviModalAction')
    }
  }
}
</script>

<style lang="scss" scoped>

.mainHeader {
  position: relative;
  z-index: 9999;
  .container {
    width: 100%;
    height: 56px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0px;
    box-sizing: border-box;
    background-color: #fff;

    .header-left {
      display: flex;
      align-items: center;

      .header-left_menu {
        width: $ico-size;
        height: $ico-size;
        padding: 8px;
        cursor: pointer;

        &:hover{
          background-color: #f2f2f2;
          border-radius: 15px;
        }
      }

      .logo {
        width: 120px;
        height: 56px;
        padding: 6px 0 0 10px;
        box-sizing: border-box;
      }
    }

    .search {
      display: flex;
      flex: 0 1 728px;
      height: 38px;
      justify-content: center;
      align-items: center;

      .search-wrapper {
        flex-basis: 75%;
        border: $border;
        padding: 0 4px 0 16px;
        height: 100%;
        border-radius: 20px 0 0 20px;
        position: relative;
        display: flex;

        .search-input {
          width: 100%;
          height: 90%;
          border: 0;
          font-size: 16px;

          &:focus {
            outline: none;
          }

          &::placeholder {
            font-size: 16px;
          }
        }

        .search-keyboard {
          width: $ico-size;
          height: $ico-size;
          padding: 8px;
        }

        .search-input_ico {
          width: 16px;
          height: 16px;
          position: absolute;
          top: 50%;
          transform: translatey(-50%);
        }
      }

      .search-btn {
        width: 64px;
        height: 40px;
        border-radius: 0 40px 40px 0;
        background-color: #f8f8f8;
        border: $border;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .search-ico {
          width: $ico-size;
          height: $ico-size;
        }
      }

      .search-mic {
        width: $ico-size;
        height: $ico-size;
        margin-left: 10px;
        cursor: pointer;
      }
    }

    .header-right {
      min-width: 225px;
      display: flex;
      align-items: center;
      justify-content: end;

      .ellipsis-btn {
        width: $ico-size;
        height: $ico-size;
        padding: 8px;
        cursor: pointer;
      }

      .header-login {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 96px;
        height: 40px;
        border: $border;
        border-radius: 20px;
        cursor: pointer;

        .person-btn {
          width: $ico-size;
          height: $ico-size;

        }
        .header-login_txt{
          color: #1c62b9;
          font: 500 14px Arial, sans-serif;
        }
      }
    }

  }
}</style>