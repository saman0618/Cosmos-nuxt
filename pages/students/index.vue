<template>
    <div class="">
      
  
      <div class="flex mt-5 px-6 ">
        <Search />

        <Coursflit class="ml-6 " />
        <Coursflit  />
        <Button />
      </div>
  
      <Table2 />
  
    </div>
  </template>
  
  <script setup >
import Search from '~/components/searchinp/Searchinp'
import Table2 from '~/components/table/Table2'
import Coursflit from '~/components/Select/select'
import Button from '~/components/adminbutton/Adminbutton'
</script>
