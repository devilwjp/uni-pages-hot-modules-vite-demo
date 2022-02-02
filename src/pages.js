// 获取uniapp的条件编译环境变量
const uniContext = require('@dcloudio/uni-cli-shared/dist/preprocess/context').getPreVueContext()
module.exports = {
    pages: require('./page_modules/index.js'),
    subPackages: require('./subpackage_modules/index.js'),
    globalStyle: {
        navigationBarTextStyle: 'black',
        // 判断是否是H5环境
        navigationBarTitleText: uniContext.H5 ? 'H5环境' : '非H5环境',
        navigationBarBackgroundColor: '#F8F8F8',
        backgroundColor: '#F8F8F8'
    }
}
//
