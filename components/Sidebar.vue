<template>
    <div class="sidebar">
        <div class="logo">
            <img src="~assets/cellframe_logo.svg" alt="Cellframe">
        </div>
        <nav class="main-navigation">
            <NuxtLink v-for="item in menuItems" :key="item.key" :to="item.to" class="nav-item">
                <div class="nav-item-icon">
                    <img :src="useIcon(item.icon)" :alt="item.title">
                </div>
                <div class="nav-item-title">
                    {{ item.title }}
                </div>
            </NuxtLink>
        </nav>
    </div>
</template>

<script setup>
    const menuItems = [
        {title: 'Wallet', icon: 'wallet', to: '/', key: 0},
        {title: 'DEX', icon: 'dex', to: '/dex', key: 1},
        {title: 'TX explorer', icon: 'tx_explorer', to: '/tx-explorer', key: 2},
        {title: 'Certificates', icon: 'certificates', to: '/certificates', key: 3},
        {title: 'Tokens', icon: 'tokens', to: '/tokens', key: 4},
        {title: 'VPN client', icon: 'vpn_client', to: '/vpn-client', key: 5},
        {title: 'VPN service', icon: 'vpn_service', to: '/vpn-service', key: 6},
        {title: 'Console', icon: 'console', to: '/console', key: 7},
        {title: 'Logs', icon: 'logs', to: '/logs', key: 8},
        {title: 'Settings', icon: 'settings', to: '/settings', key: 9},
        {title: 'dApps', icon: 'dapps', to: '/dapps', key: 10},
    ]

    const useIcon = (iconName) => {
        const assets = import.meta.glob('~/assets/**/*', {
            eager: true,
            import: 'default',
        })
        return assets['/assets/icons/' + iconName + '.svg']
    }


</script>


<style scoped>
.sidebar {
    width: 180px;
    height: calc(100vh - 47px);
    border-radius: 0 0 16px 0;
    box-shadow: 5px 5px 10px rgba(8, 7, 13, 0.42), inset 1px 1px 0px #524D64;
    filter: drop-shadow(5px 5px 10px rgba(8, 7, 13, 0.42));
    min-height: 650px;
}
.logo {
    height: 62px;
    display: flex;
    align-items: center;
    padding-left: 12px;   
}
.main-navigation {
    padding-right: 10px;
}
.nav-item {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 13px;
    line-height: 16px;

    padding-left: 24px;

    text-decoration: none;
}
.nav-item:hover {
    color: #ddd;
}
.nav-item.router-link-active{
    box-shadow: 1px 1px 0px rgba(107, 102, 126, 0.49), inset 3px 3px 5px rgba(8, 7, 13, 0.25);
    border-radius: 0px 16px 16px 0px;
}
.nav-item.router-link-active:hover{
    color: #fff;
}
.nav-item-icon {
    width: 24px;
    height: 24px;
    margin-right: 16px;
}
</style>