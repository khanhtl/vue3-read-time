# Vue 3 Read Time

## Configuration
``` ts
import { createApp } from "vue";
import App from "./App.vue";
import { vueReadTime } from 'vue3-read-time';

const app = createApp(App);
app.use(vueReadTime);
app.mount("#app");
```


## Usage
``` html
<script setup lang="ts">
import { type ReadTimeConfiguration } from 'vue3-read-time'
import { ref } from "vue";
const readTime=ref('');
const readTimeConfig: ReadTimeConfiguration={
  wordsPerMinute: 200,
  readTimeCalculated(time) {
    console.log(time);
    readTime.value=time;
  },
}
</script>

<template>
  <h1>Read Time: {{readTime}}</h1>
  <div v-readTime="readTimeConfig">
    Lorem ipsum dolor sit amet 
  </div>
</template>
```