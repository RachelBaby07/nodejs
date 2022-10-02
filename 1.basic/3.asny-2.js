/**
 * 常用异步函数
 *      数组操作（nonsql）
 *          find  --满足条件的第一个数
 *          filter  --新数组的形式放所有数
 *          map
 *          sort
 */

/**
 * 1.找出>20 同时 <40的数字
 * 2.找出所有奇数
 * 3.找出所有5的倍数
 */
var nums = [1,23,45,20];
var find = nums.find((num)=>{
    return num>20 && num<40
})
var filter = nums.filter((num)=>{
    return num % 2 === 1;
})
var filter2 = nums.filter((num)=>{
    return num % 5 === 0;
})

// console.log(find);
// console.log(filter);
// console.log(filter2);
/**
 * 1.在头部添加4-5个新对象
 * 2.找出所有人事部（hr）的员工
 * 3.输出一组新对象，{
 *     id:1,
 *     desc:name-dept,name-age
 * }
 */
var employees=[{
    id:1,
    name:'a',
    age:'34',
    dept:{
        id:1,
        name:'hr'
    },
    roles:[]
}]
employees.unshift({
    id:2,
    name:'b',
    age:'24',
    dept:{
        id:1,
        name:'hr'
    },
    roles:[]
},{
    id:3,
    name:'c',
    age:'28',
    dept:{
        id:2,
        name:'emp'
    },
    roles:[]
},{
    id:4,
    name:'d',
    age:'34',
    dept:{
        id:1,
        name:'hr'
    },
    roles:[]
})
var deptFilter = employees.filter((emp)=>{
    return emp.dept.name == 'hr'
})

var newEmp = employees.map(function (item){
    return {
        id:item.id,
        desc:item.name +"-"+item.dept.name+"-"+item.id
    }
})

//console.log(employees);
console.log(deptFilter);
console.log(newEmp);