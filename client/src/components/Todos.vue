<template>
  <div>Todo Here  {{ allTodos }} </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "Todos",
    computed: mapGetters(['allTodos'])
}
</script>

<style>

</style>