<script setup lang="ts">
import { type ReadTimeConfiguration } from '../dist'
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
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto delectus molestiae quos doloremque. Alias magni saepe
    quibusdam et sit? Expedita blanditiis veritatis modi, earum velit iure ex rem corrupti ad, voluptatem officiis placeat
    dolor enim amet totam! Ea optio quis nam veritatis possimus dignissimos, fuga commodi suscipit asperiores, saepe minus
    reprehenderit accusantium nulla dicta, accusamus quo harum eius. Aliquid sapiente voluptate veniam pariatur. Expedita,
    aut. Maxime eum quis dignissimos omnis. Animi, earum. Eos repellat ad ab, enim molestias provident. Eveniet,
    praesentium beatae ad blanditiis libero, laborum officia quae dolor, quas aliquid cumque reiciendis debitis corrupti
    deserunt. Est cum excepturi fugiat aliquam dignissimos! Minus veritatis aspernatur eius consectetur, velit facilis
    soluta numquam id consequatur eum amet ipsa tempora unde vel, obcaecati, corporis sit illum quasi maxime eligendi
    sapiente quod quas quis. Iure necessitatibus perferendis rerum eum voluptatibus non fuga harum, tempora porro
    laboriosam debitis molestiae consectetur alias delectus sequi reprehenderit, aperiam vitae quidem, eius quia? Soluta
    odio tempore nemo totam autem repellat ipsum sequi dicta quo. Ex illo reiciendis repudiandae earum sed, iusto
    blanditiis asperiores suscipit distinctio voluptates debitis perferendis veritatis inventore commodi facere, sunt
    dicta perspiciatis porro. Veniam, unde. Perspiciatis aliquam quia id error expedita, assumenda eum nostrum alias saepe
    provident exercitationem totam est distinctio magnam porro quisquam minus corporis tenetur ullam harum voluptatum.
    Labore numquam dolorem et neque, pariatur, nulla, at aliquid voluptatem nostrum voluptatibus dicta repellat! Quis
    corrupti perferendis, cum doloremque totam voluptates minus obcaecati neque eos quae voluptatem eveniet sint quisquam
    nulla commodi, quod suscipit atque consequatur tenetur fugiat. Eum, similique mollitia nemo exercitationem quia libero
    inventore nisi animi reprehenderit culpa aliquid minima, voluptatibus perferendis maiores quam dolores, aliquam nobis
    laborum cumque molestias quis expedita nostrum. Porro dolore reiciendis ipsam quae libero maxime facere aspernatur
    possimus. Ut doloremque ea expedita doloribus possimus ex! Delectus consequatur eum non.
  </div>
</template>