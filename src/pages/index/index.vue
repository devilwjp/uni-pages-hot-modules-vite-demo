<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view class="text-area">
      <text class="title" @click="jump('/pages/index/index1')">跳转到 pages/index/index1</text>
    </view>
    <view class="text-area">
      <text class="title" @click="jump('/subpackages/sub1')">跳转到 subpackages/sub1</text>
    </view>
    <view class="text-area">
      <text class="title" @click="jump('/subpackages/sub2')">跳转到 subpackages/sub2</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  onLoad() {},
  methods: {
    jump(url) {
      uni.navigateTo({
        url
      })
    }
  },
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
