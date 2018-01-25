<template>
  <div class="addShop">
    <el-row style="margin-top: 30px;">
      <el-col :span="12" :offset="4">
        <el-form  label-width="100px" class="demo-ruleForm" :rules="rules">
          <el-form-item label="商店名称" prop="name">
            <el-input clearable></el-input>
          </el-form-item>
          <el-form-item label="商店地址" prop="address">
            <el-input clearable></el-input>
            <span>当前城市 : {{city}}</span>
          </el-form-item>
          <el-form-item label="联系电话" prop="phone">
            <el-input clearable></el-input>
          </el-form-item>
          <el-form-item label="店铺简介" prop="description">
            <el-input clearable></el-input>
          </el-form-item>
          <el-form-item label="店铺标语" prop="description_info">
            <el-input clearable></el-input>
          </el-form-item>
          <el-form-item label="店铺分类">
            <el-cascader
              change-on-select
              @change="selectChange"
              :options="categoryOptions"
              placeholder="搜索"
              clearable
              filterable>
            </el-cascader>
          </el-form-item>
          <el-form-item label="店铺特点" style="white-space: nowrap;">
            <span>品牌保证</span><el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949" ></el-switch>
            <span>蜂鸟专送</span><el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949" ></el-switch>
            <span>新开店铺</span><el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949" ></el-switch>
          </el-form-item>
          <el-form-item style="white-space: nowrap;">
            <span>外 卖 保&nbsp;</span><el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949" ></el-switch>
            <span>准 时 达&nbsp;</span><el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949" ></el-switch>
            <span>开 发 票&nbsp;</span><el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949" ></el-switch>
          </el-form-item>
          <el-form-item label="配送费">
            <el-input-number v-model="num1" :min="1" :max="10"></el-input-number>
          </el-form-item>
          <el-form-item label="起送价">
            <el-input-number v-model="num2" :min="1" :max="100"></el-input-number>
          </el-form-item>
          <el-form-item label="营业时间" style="white-space: nowrap;">
            <el-time-select
              placeholder="起始时间"
              v-model="startTime"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '23:00',
                maxTime: endTime
              }"
            >
            </el-time-select>
            <el-time-select
              placeholder="结束时间"
              v-model="endTime"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '23:30',
                minTime: startTime
              }"
             >
            </el-time-select>
          </el-form-item>
          <el-form-item label="上传店铺头像">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="上传营业执照">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="上传服务许可证">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="优惠活动">
            <el-select  v-model="value"  placeholder="请选择">
              <el-option
                v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-table :data="tableData" align="center" border stripe="true" >
            <el-table-column prop="title" label="活动标题" width="120"></el-table-column>
            <el-table-column prop="name" label="活动名称" width="120"></el-table-column>
            <el-table-column prop="detail" label="活动详情" width="200"></el-table-column>
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button size="mini">编辑</el-button>
                <el-button size="mini" type="danger">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-form-item class="button_submit">
            <el-button type="primary"><span style="color: #fff;">立即创建</span></el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row style="height: 60px;"></el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      city: '广州',
      value2: true,
      num1: 5,
      num2: 20,
      startTime: '',
      endTime: '',
      dialogImageUrl: '',
      dialogVisible: false,
      rules: {
        name: [
          {required: true, message: '请输入商店名称', trigger: 'blur'}
        ],
        address: [
          {required: true, message: '请输入商店地址', trigger: 'blur'}
        ],
        phone: [
          { required: true, message: '请输入联系电话' },
          { type: 'number', message: '电话号码必须是数字' }
        ],
        classify: [
          { required: true, message: '请选择分类' }
        ]
      },
      categoryOptions: [
        {
          value: '中餐',
          label: '中餐',
          children: [
            {
              value: '手撕鸡',
              label: '手撕鸡'
            },
            {
              value: '白切鸡',
              label: '白切鸡'
            },
            {
              value: '走地鸡',
              label: '走地鸡'
            }
          ]
        },
        {
          value: '西餐',
          label: '西餐',
          children: [
            {
              value: '牛排',
              label: '牛排'
            },
            {
              value: '寿司',
              label: '寿司'
            },
            {
              value: '猪扒',
              label: '猪扒'
            }
          ]
        }
      ],
      options: [
        {value: '满减优惠', label: '满减优惠'},
        {value: '优惠大酬宾', label: '优惠大酬宾'},
        {value: '新用户立减', label: '新用户立减'},
        {value: '进店领券', label: '进店领券'}
      ],
      value: '',
      tableData: [
        {
          title: '减',
          name: '满减优惠',
          detail: '满30减5，满60减8'
        }
      ]
    }
  },
  methods: {
    selectChange (val) {
      console.log('select')
      console.log(val)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  },
  components: {
  }
}
</script>

<style scoped>
  .home{  width: 100%;  height: 100%; }
  .form-item { margin-top: 10px;}
  .button_submit{ text-align: center; margin: 20px 0; color: #fff;}

</style>
