<template>
  <div class="navigation" :class="$store.state.naviModal && 'on'">
    <div class="pc-navi" :class="$store.state.naviModal && 'on'">
      <ul>
        <li v-for="(el, index) in data.home.address" :key="el">
          <img :src="require(`@/assets/nav_ico/${el}.png`)" :alt="data.home.alt[index]">
          <p>{{ data.home.alt[index] }}</p>
        </li>
      </ul>
      <ul>
        <li v-for="(el, index) in data.storage.address" :key="el">
          <img :src="require(`@/assets/nav_ico/${el}.png`)" :alt="data.storage.alt[index]">
          <p>{{ data.storage.alt[index] }}</p>
        </li>
      </ul>
      <ul>
        <li>구독</li>
        <li class="subscribe">로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.
        </li>
        <li class="loginBtn">
          <img :src="require(`@/assets/nav_ico/person.png`)" alt="로그인" class="person-btn"><span
            class="header-login_txt">로그인</span>
        </li>
      </ul>
      <ul>
        <li>탐색</li>
        <li v-for="(el, index) in data.exploration.address" :key="el">
          <img :src="require(`@/assets/nav_ico/${el}.png`)" :alt="data.exploration.alt[index]">
          <p>{{ data.exploration.alt[index] }}</p>
        </li>
      </ul>
      <ul>
        <li v-for="(el, index) in data.setting.address" :key="el">
          <img :src="require(`@/assets/nav_ico/${el}.png`)" :alt="data.setting.alt[index]">
          <p>{{ data.setting.alt[index] }}</p>
        </li>
      </ul>
      <ul class="guide-container">
        <li v-for="e in data.guide" :key="e" class="guide-wrap">
          <span v-for="el in e" :key="el" class="guide">{{ el }}</span>
        </li>
      </ul>
    </div>
    <div class="mobile-navi" :class="$store.state.naviModal && 'on'">
      <ul>
        <li v-for="(e, index) in data.mobile.address" :key="e">
          <img :src="require(`@/assets/nav_ico/${e}.png`)" :alt="e">
          <p>{{ data.mobile.alt[index] }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import data from '@/data.json'
export default {
  name: 'NavigationBar',
  data() {
    return {
      data: data
    }
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  top: calc(0% + 56px);
  left: 0px;
  width: 240px;
  height: 100%;
  padding: 0 12px 12px 12px;
  box-sizing: border-box;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #909090;
    border-radius: 10px;
  }

  ul {
    margin: 0;
    padding: 12px 0;
    border-bottom: $border;

    & .subscribe {
      font-size: 14px;
    }

    & .loginBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 96px;
      height: 40px;
      margin: 0 auto;
      border: $border;
      border-radius: 20px;
      cursor: pointer;
      padding: 0;

      & span {
        font-size: 14px;
      }
    }

    li {
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;

      img {
        width: $ico-size;

        &+p {
          margin-left: 24px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      p {
        font-size: 14px;
      }

      &:hover {
        background-color: #f2f2f2;
      }
    }

    .guide-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      font-size: 13px;
      margin-bottom: 10px;

      &:hover {
        background-color: #f2f2f2;
      }

      & .guide {
        border-radius: 5px;
        padding: 2px;
        box-sizing: border-box;

        &:hover {
          background-color: #f2f2f2;
        }
      }
    }
  }
  .mobile-navi{
    display: none;
  }
}

@media (max-width: 1300px) {
  .navigation {
    width: 64px;
    left: 5px;
    transition: all linear 100ms;
    &.on{
      width: 240px;
      background-color: #fff;
      z-index: 9999;
    }

    .pc-navi {
      display: none;

      &.on{
        display: block;
      }
    }


    .mobile-navi {
      display: block;
      &.on{
        display: none;
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 40px;

        li {
          display: flex;
          flex-direction: column;

          img {

            width: $ico-size;
            height: $ico-size;
          }

          p {
            margin-left: 0;
            font-size: 10px;
          }
        }
      }
    }
  }
}

@media (max-width: 640px) {
  .navigation {

    .mobile-navi {
      display: none;
    }
  }
}
</style>