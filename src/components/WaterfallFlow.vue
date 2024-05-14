<script setup>
import { ref } from 'vue'

const loading = ref(false)
const isMounted = ref(true)
const isLimit = ref(false)
const over = ref(true)

const list = ref([
  {
    title: '标题 12.jpg',
    cover:
      'https://personal-album.oss-cn-hangzhou.aliyuncs.com/2024/1.png?x-oss-process=image/resize,w_250'
  },
  {
    title: '标题 2.jpg',
    cover: 'https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/2.jpg'
  },
  {
    title: '标题 3.jpg',
    cover: 'https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/3.jpg'
  },
  {
    title: '标题 4.jpg',
    cover: 'https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/4.jpg'
  },
  {
    title: '标题 5.jpg',
    cover: 'https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/5.jpg'
  },
  {
    title: '标题 6.jpg',
    cover: 'https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/6.jpg'
  },
  {
    title: '标题 7.jpg',
    cover: 'https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/7.jpg'
  },
  {
    title: '标题 8.jpg',
    cover: 'https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/8.jpg'
  },
  {
    title: '标题 9.jpg',
    cover: 'https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/9.jpg'
  },
  {
    title: '标题 10.jpg',
    cover: 'https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/10.jpg'
  },
  {
    title: '标题 11.jpg',
    cover: 'https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/11.jpg'
  }
])

function getNext() {
  console.log('load more')
}
</script>

<template>
  <div class="container">
    <h1 class="container-title">相册</h1>
    <v3-waterfall
      :list="list"
      :colWidth="280"
      :virtual-time="400"
      :scrollBodySelector="isLimit ? '.limit-box' : ''"
      :isMounted="isMounted"
      :isLoading="loading"
      :isOver="over"
      overText="-- END --"
      class="waterfall"
      @scrollReachBottom="getNext"
    >
      <template v-slot:default="slotProp">
        <div class="list-item">
          <div class="cover-wrapper">
            <img
              v-if="slotProp?.item?.cover"
              :src="slotProp?.item?.cover"
              data-key="cover"
              class="cover"
            />
          </div>
          <div class="brief">
            <h3>{{ slotProp?.item?.title }}</h3>
            <p>{{ slotProp?.item?.outline }}</p>
          </div>
        </div>
      </template>
    </v3-waterfall>
  </div>
</template>

<style>
.container {
  width: 1000px;
  margin: 0 auto;
}
.container-title {
  margin-bottom: 40px;
}
</style>
