//
// Stub out `require` in the browser
//
function require(arg) {
  if (arg == './tree' || arg == '../tree') {
    if (tree === undefined)
      tree = {};
    return tree;
  }
  else
    return less[arg.split('/')[1]];
};
