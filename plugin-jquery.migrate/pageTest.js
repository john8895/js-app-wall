/**
 * name: 初稿完稿 頁面自動檢查工具
 * Version: 1.0
 * Date: 2020.10.28
 */

/**
 * func1: 檢查 a 有無 title
 * func2: 檢查 img 有無 alt
 */
(function checkAttrTitleEmpty() {
    const aTags = document.getElementsByTagName('a');
    const imgTags = document.getElementsByTagName('img');
    const aArray = [...aTags]
    const imgArray = [...imgTags]
    // Check a tag have title attribute, background-color = red
    let aFilter = aArray.filter((item) => item.title === '')
    console.log('"a" don\'t have "title":', aFilter.length)

    aFilter.forEach((item, index) => {
        item.style.backgroundColor = 'red'
        console.log(index+1, item)
    })
    // Check img tag have alt attribute, background-color = blue
    let imgFilter = imgArray.filter((item) => item.alt === '')
    console.log('"img" don\'t have "alt":', imgFilter.length)

    imgFilter.forEach((imgItem, index) => {
        imgItem.style.border = '1px solid blue'
        console.log(index+1, imgItem)
    })

})()