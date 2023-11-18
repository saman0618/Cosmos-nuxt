<template>
    <header class="sticky top-0 bg-white  z-30" style="box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.10);">
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 -mb-px">
                <!-- Header: Left side -->
                <div class="flex">
                    <h1>Bosh sahifa</h1>
                </div>

                <!-- Header: Right side -->
                <div class="flex items-center space-x-3">
                    <Notifications align="right" />
                    <Help align="right" />
                    <UserMenu align="right" />
                </div>
            </div>
        </div>
    </header>
</template>
  
<script>

import Notifications from './Dropdown/DropdownNotification.vue'
import Help from './Dropdown/DropdownHelp.vue'
import UserMenu from './Dropdown/DropdownProfile.vue'


export default {
    name: 'Header',
    props: ['sidebarOpen'],
    components: {
        Notifications,
        Help,
        UserMenu,
    },
}
</script>