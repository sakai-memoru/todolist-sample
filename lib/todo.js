/**
 * todo list modules
 * @fileoverview 
 * @since 2016-12-29
 * @author sakai.memoru
 */

/**
 * set action
 */
var setAction = (item,flag) => {
  item.updated = Date();
  item.flag = flag;
  return item;
}

module.exports.setAction = setAction;

// debug --------------------------------
//
// var retObj = setAction({},'FIXME');
// console.dir(retObj);

