<template>
   <div class="manage_page">
    <el-row class="header">
      <el-col :span="4"  class="header-left">
        <div class="header-left-com">
          <img src="@/common/img/apple.png" alt="">
          <span>编程</span>
        </div>
      </el-col>
      <el-col :span="20" class="header-right">
        <el-col style="height: 100%; line-height: 60px; margin-left: 10px;" :span="12">
          <el-breadcrumb separator="/" style="height: 100%; line-height: 60px;" >
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <div class="header-login">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <img src="@/common/img/apple.png" alt="">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <p>编程</p>
        </div>
      </el-col>
    </el-row>
    <el-row class="wrap">
      <el-col :span="4" style="min-height: 100%; background-color: #324057;">
        <el-menu mode="vertical" background-color="#324057" text-color="#bfcbd9" style="border-right: none;" :collapse="isCollapse" router>
          <el-menu-item index="manage"><i class="el-icon-menu"></i>编程</el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-document"></i>数据管理</template>
            <el-menu-item index="userList">用户列表</el-menu-item>
            <el-menu-item index="shopList">商家列表</el-menu-item>
            <el-menu-item index="foodList">食品列表</el-menu-item>
            <el-menu-item index="orderList">订单列表</el-menu-item>
            <el-menu-item index="adminList">管理员列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-plus"></i>添加数据</template>
            <el-menu-item index="addGoods">添加商品</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-star-on"></i>图表</template>
            <el-menu-item index="visitor">用户分布</el-menu-item>
            <!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-edit"></i>编辑</template>
            <!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
            <el-menu-item index="vueEdit">文本编辑</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="el-icon-setting"></i>设置</template>
            <el-menu-item index="adminSet">管理员设置</el-menu-item>
            <!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
          </el-submenu>
          <el-submenu index="7">
            <template slot="title"><i class="el-icon-warning"></i>说明</template>
            <el-menu-item index="explain">说明</el-menu-item>
          </el-submenu>
          <el-submenu index="10">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title" style="color: #bfcbd9;">导航一</span>
            </template>
            <el-submenu index="2-1">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span slot="title" style="color: #bfcbd9;">分组一--2.1</span>
              </template>
              <el-menu-item index="test">分组2.1-1</el-menu-item>
              <el-menu-item index="2-1-2">分组2.1-2</el-menu-item>
              <el-menu-item index="2-1-3">分组2.1-3</el-menu-item>
              <el-menu-item index="2-1-4">分组2.1-4</el-menu-item>
            </el-submenu>
            <el-menu-item index="test">分組二</el-menu-item>
            <el-menu-item index="2-3">分組三</el-menu-item>
            <el-menu-item index="2-4">分組四</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style scoped>

    /*@import '../style/mixin';*/
  .manage_page{  width: 100%;  height: 100%;  background: #FFF; }
  .header { height: 60px; width: 100%; position: fixed; left: 0; top: 0;}
  .header-left {height: 60px; background-color: darkgoldenrod;}
  .header-left-com { height: 100%; width: 100%; line-height: 50px; font-size: 28px; padding: 5px; display: flex; flex-direction: row;  color: #fff; }
  .header-left-com img { width: 50px; height: 50px; margin-right: 10px; }
  .header-left-com span { color: #fff; }
  .header-right {height: 60px; background-color: #edf0f6;}
  .header-login { width: 120px; height: 50px; margin-top: 5px; float: right; display: flex; flex-direction: row; align-items: center; padding: 5px; box-sizing: border-box; border-left: 1px solid #ccc;}
  .header-login img { width: 40px; height: 40px; border-radius: 20px;}
  .header-login p {font-size: 14px; color: #2e394e; margin-left: 5px; white-space: nowrap; text-overflow: ellipsis; width: 80px; overflow: hidden; }
  .el-dropdown-link { display: flex; align-items: center;}
  /* ---wrap--- */

</style>
