const path = require('path')
const glob = require('glob')

// 应用根目录
const appBase = path.resolve(__dirname, '../../..').replace(/\\/g, '/')
// 应用页面根目录
const pagesBase = path.resolve(appBase, 'src/pages').replace(/\\/g, '/')

module.exports = function () {
    let pages = {}
    glob.sync(pagesBase + '/**/main.js').forEach((filePath) => {
    // 支持多级页面路径，如果希望使用一级路径，可在后面追加replace('/', '_')
        const pageKey = filePath.split(pagesBase + '/')[1].replace('/main', '').split('.')[0]
        pages[pageKey] = {
            // page 的入口
            entry: filePath.replace(appBase + '/', ''),
            // 模板来源
            template: pagesBase + '/' + pageKey + '/index.html',
            // 在 dist/xxx.html 的输出
            filename: pageKey + '.html',
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '中化能源科技',
            css: ['main.css']
        }
    })
    return pages
}
