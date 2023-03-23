<template>
    <div class="layout">
        <div class="base">
            <Sidebar/>
            <main>
                <Topbar/>
                <article class="content">
                    <slot></slot>
                </article>
            </main>
        </div>
        <Statusbar/>
    </div>
</template>

<style>
.layout {
  display: flex;
  flex-direction: column;
}
.base {
  display: flex;
  margin-bottom: 5px;
}
main {
  width: calc(100vw - 183px);
}
.content {
  padding: 24px;
  color: #fff;
  min-height: 600px;
  height: calc(100vh - 110px);
  overflow-y: scroll;
}
p {
    margin-bottom: 16px;
}

@media only screen and (max-width: 600px)  {
  main {
    width: calc(100vw - 73px);
  }
}
</style>