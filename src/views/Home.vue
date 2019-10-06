<template>
  <div class="home">
    <InhabitantsList/>
  </div>
</template>

<script>
// @ is an alias to /src
import InhabitantsList from '@/components/InhabitantsList.vue'

export default {
  name: 'home',
  components: {
    InhabitantsList
  }
}
</script>
