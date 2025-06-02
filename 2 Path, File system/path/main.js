import path from "node:path";

// basename => veradardznum e file anun@ => 'C:\\temp\\myfile.html' => myfile.html

// console.log(path.basename('C:\\temp\\myfile.html'));
// console.log(path.win32.basename('C:\\temp\\myfile.html')); // => windows
// console.log(path.posix.basename('C:\\temp\\myfile.html')); // => POSIX

// console.log(path.basename('C:\\temp\\myfile.html', ".html"));

////////////////////////////////////////////////////////////////////////////////////

// path.dirname(path) => nshvac uxxu panak@ (directory) => '/home/user/file.txt' => /home/user/'

// console.log(path.dirname('/home/user/file.txt'));
// console.log(path.dirname('/my/app/data/config.json'));


////////////////////////////////////////////////////////////////////////////////////

// path.extname(path) => ֆայլի ընդլայնումը (extension)` .txt, .js, .html 

// console.log(path.extname("index.html"));
// console.log(path.extname("photo.png"));
// console.log(path.extname("photo"));


////////////////////////////////////////////////////////////////////////////////////

// path.format(pathObject) =>  ստեղծում է ճանապարհ (path)՝ միացնելով path օբյեկտի մասերը` dir, base, name, ext և այլն

// const pathObject = {
//     root: '/ignored',
//     dir: '/home/user/dir',
//     base: 'file.txt'
// }

// const pathObject = {
//     root: '/',
//     name: 'file',
//     ext: '.txt',
// }

// console.log(path.format(pathObject));


////////////////////////////////////////////////////////////////////////////////////

// path.isAbsolute(path) =>  ֆունկցիան ստուգում է՝ արդյոք տրված ճանապարհը (path) ամբողջական է, այսինքն՝ սկսվում է արմատից (/ Linux/Unix-ում կամ C:\ Windows-ում):

// console.log(path.isAbsolute("/home/url")); // true
// console.log(path.isAbsolute("/home/..")); // true
// console.log(path.isAbsolute("/home/../..")); // true
// console.log(path.isAbsolute("home/")); // false
// console.log(path.isAbsolute(".")); // false


////////////////////////////////////////////////////////////////////////////////////

// path.join([...paths]) => miacnuma mi qani path ankax OS-ic

// const fullPath = path.join("folder", "subfolder", "file.txt")

// console.log(fullPath);
// console.log(path.join("home", "users"));

////////////////////////////////////////////////////////////////////////////////////

// path.parse(path) => vercnume file path ev return object, vori mej path bajanvac e maseri

// console.log(path.parse("/home/users/script.js"));



////////////////////////////////////////////////////////////////////////////////////

// path.relatve(from, to);

// const from = "/home/users/docs";
// const to = "/home/users/photos/vacation";

// const relativePath = path.relative(from, to);

// console.log(relativePath);


////////////////////////////////////////////////////////////////////////////////////

console.log(path.resolve("folder", "subfolder", "file.txt"));