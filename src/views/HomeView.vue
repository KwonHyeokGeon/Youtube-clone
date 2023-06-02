<template>
  <div class="mainHome">
    <div class="headline-container">
      <div class="headline-wrap">
        <h2 class="headline" :style="{ display: scrollPosition > 107 ? 'none' : 'block' }"><img
            :src="require(`@/assets/fire.png`)" alt="인기 급상승" class="headlineImg">인기 급상승</h2>
        <ul class="cate-wrap" :class="(scrollPosition > 107 && 'on')">
          <li v-for="(e, index) in cateList" :key="e" class="category" @click="clickCate(index)"
            :class="ClickIndex == index && 'on'">{{ e }}</li>
        </ul>
      </div>
    </div>
    <div class="content-container" :style="{ marginTop: scrollPosition > 107 ? '200px' : '0' }">
      <div v-for="(e, index) in items" :key="index" class="content-wrap">
        <div class="thumbnail-wrap" @mouseover="playVideo(index); play = 1">
          <img :src="e.snippet.thumbnails.medium.url" alt="동영상" class="content-thumbnail">
          <p class="content-playtime">{{ e.contentDetails.duration.replace("PT", "") }}</p>
          <iframe class="preview" :src="`https://www.youtube.com/embed/${e.id}?autoplay=${play}&mute=1`"
          v-if="showIdx === index && showVideo" @mouseout="showVideo = false; play = 0"></iframe>
        </div>
        <div class="content-data">
          <a :href="`https://www.youtube.com/watch?v=${e.id}`" target="_blank">
            <p class="title">{{ e.snippet.title }}</p>
          </a>
          <p class="channel-title">{{ e.snippet.channelTitle }}<span>{{ Number(e.statistics.viewCount).toLocaleString()
          }}회</span><span>•{{ getPublishedDate[index] }}</span></p>
          <p class="description">{{ e.snippet.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeView',
  data() {
    return {
      items: '',
      cateList: ["최신", "음악", "게임", "코미디"],
      scrollPosition: 0,
      publishedAt: [],
      publishedDate: "",
      cateId: 10,
      cateClick: false,
      ClickIndex: 0,
      showVideo: false,
      showIdx: "",
      play: null,
      appkey: process.env.VUE_APP_APIKEY
    }
  },
  created() {
    axios
      .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular&regionCode=KR&maxResults=50&key=${this.appkey}`)
      .then((res) => {
        this.items = res.data.items
        for (let el in res.data.items) {
          this.publishedAt.push(res.data.items[el].snippet.publishedAt)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    getPublishedDate() {
      let now = new Date();
      let dateArr = Object.values(this.publishedAt).map(dateStr => new Date(dateStr));

      let result = "";
      for (let i = 0; i < dateArr.length; i++) {
        let timeDiff = (now - dateArr[i]);
        let diffMinutes = Math.floor(timeDiff / 1000 / 60);
        let diffHours = Math.floor(diffMinutes / 60);
        let diffDays = Math.floor(diffHours / 24);

        result += `${diffDays}일 ${diffHours % 24}시간 ${diffMinutes % 60}분 전, `;
        // result = 은 반복문안에 있어 새로운값이 할당되면 이전값을 사라짐
      }

      return result.slice(0, -2).split(",");
    },
  },
  methods: {
    updateScrollPosition() {
      this.scrollPosition = window.scrollY;
    },
    clickCate(index) {
      this.ClickIndex = index;
      if (index < 3) {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular&videoCategoryId=${index * 10}&regionCode=KR&maxResults=50&key=AIzaSyDVfxdI9NX12O7KJZ8-q1ftlFEUaFflG0M`)
          .then((res) => {
            this.items = res.data.items
            for (let el in res.data.items) {
              this.publishedAt.push(res.data.items[el].snippet.publishedAt)
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular&videoCategoryId=24&regionCode=KR&maxResults=50&key=AIzaSyDVfxdI9NX12O7KJZ8-q1ftlFEUaFflG0M`)
          .then((res) => {
            this.items = res.data.items
            for (let el in res.data.items) {
              this.publishedAt.push(res.data.items[el].snippet.publishedAt)
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    playVideo(idx) {
      this.showIdx = idx
      this.showVideo = true
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScrollPosition)
  },
}
</script>
<stype lang="scss">
@import "@/scss/Home.scss";
</stype>
