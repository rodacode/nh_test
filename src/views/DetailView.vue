<template>
<InhabitantDetail :id="this.$route.params.id"/>
</template>

<script>
// @ is an alias to /src
import InhabitantDetail from '@/components/InhabitantDetail.vue'

export default {
  name: 'detailView',
  components: {
      InhabitantDetail
  }
}
</script>