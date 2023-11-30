<template>
    <div class="tabs">
        <ul class="tabs__list">
            <li v-for="tab in tabs" :key="tab.title" class="tabs__item" :class="{ 'tabs__item--active': tab.active }">
                <a href="#" @click="onTabClick(tab)">{{ tab.title }}</a>
            </li>
        </ul>
        <div class="tabs__content">
            <slot></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Tabs',

    props: {
        tabs: {
            type: Array,
            required: true,
        },
    },

    data() {
        return {
            activeTab: this.tabs[0],
        };
    },

    methods: {
        onTabClick(tab) {
            this.activeTab = tab;
            this.$emit('tab-click', tab);
        },
    },
};
</script>
<style scoped>
.tabs {
    width: 100%;
    height: 40px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
}

.tabs__list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.tabs__item {
    float: left;
    width: 25%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
}

.tabs__item a {
    color: #000;
    text-decoration: none;
}

.tabs__item--active {
    background-color: #000;
    color: #fff;
}
</style>