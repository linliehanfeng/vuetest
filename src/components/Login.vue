<template>
    <div class="first">
    <el-row>
        <el-col :span="24">
            <div class="grid-content bg-purple-dark">
                    <p>{{title}}</p>
                    <el-input v-model="user.username" placeholder="请输入名户名" class="userInput"></el-input>
                    <br/>
                    <el-input v-model="user.passwd"   placeholder="请输入密码" class="userInput"></el-input>
                    <br/>
                    <el-button type="primary"  @click="onLogin" class="btn"> {{ login }}</el-button>
            </div>
        </el-col>
    </el-row>
    </div>
</template>
<script>
    export default {
        name:'login',
        data () {
            return {
                title:'用户登录',
                login:'提   交',
                user:{
                    username:'',
                    passwd:''
                }
            }
        },
        methods: {
            onLogin(){
                if(this.user.username.trim()==""||this.user.passwd.trim()==""){
                       this.$message({
                        message:'姓名不能为空',
                        type:'warning'
                    })
                }else if(this.user.username.trim()=='admin'&&this.user.passwd.trim()=='123'){
                        
                        this.$router.push('/main');
                }else{
                    
                            
                    
                }
            }
        }
    }
</script>
<style>
    .first{
        text-align: center
    }
    .userInput{
        max-width: 300px;
        margin: 10px
    }
    .btn{
        min-width: 300px;
       
        margin-bottom: 20px;
        margin-top: 20px
    }

    p{
     
        text-align: center;
        padding-top: 50px;
        font-size: 25px 
    }

    .el-row {
    margin-bottom: 20px;
   
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>