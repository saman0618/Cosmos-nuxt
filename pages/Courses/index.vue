<template>
  <div class="">

    <div class="flex mt-5 px-6 ">
      <Search />
      <!-- <Navbar/> -->
      <Coursflit class="ml-6 " />
      <Coursflit  />
      <Button />
    </div>

    <Table />

  </div>
</template>

<script setup>
import Search from '~/components/searchinp/Searchinp'
// import Navbar from '~/components/navbar/Navbar'
import Table from '~/components/table/Table'
import Coursflit from '~/components/Select/select'
import Button from '~/components/adminbutton/Adminbutton'
</script>
