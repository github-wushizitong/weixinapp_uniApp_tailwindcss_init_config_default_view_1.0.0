<template>
  <view class="content">
    <view class="flex flex-row">
      <view class="bg-green-900">你好</view>
      <view class="bg-blue-800">我是</view>
      <view class="bg-pink-800">tailwindcss</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello"
    }
  },
  onLoad() {},
  methods: {}
}
</script>

<style>
.flex view {
  width: 200rpx;
  height: 200rpx;
}
</style>
