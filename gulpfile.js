//导入工具包require('node_modules里对应模块')
var gulp=require("gulp");//把本地安装的gulp引入，起名为gulp
var sass=require("gulp-sass");
//var concat=require("gulp-concat");
//var uglify=require("gulp-uglify");
//var rename=requeire("gulp-rename");
//var connect=require("gulp-connect");
//var minfyCSS=require("gulp-minify-css");
//var imagemin=require("gulp-imagemin");



//定义一个任务，这个任务 的名称叫copy-index完成文件的拷贝
gulp.task("copy-index",function(){
	//把index.html文件复制到dist目录下
	
	gulp.src("*.html").pipe(gulp.dest("D:/phpStudy/WWW/object1"));
    	
});
//
gulp.task("copy-js",function(){
	gulp.src("js/*.js").pipe(gulp.dest("D:/phpStudy/WWW/object1/js"));
});
//
gulp.task("img",function(){
	gulp.src("img/*").pipe(gulp.dest("D:/phpStudy/WWW/object1/img"));
	//gulp.src("img/*.*")
	//gulp.src("img/**/*")文件夹以及文件夹一下所有的
});

gulp.task("css",function(){
	gulp.src("css/*.css").pipe(gulp.dest("D:/phpStudy/WWW/object1/css"));
	//gulp.src("img/*.*")
	//gulp.src("img/**/*")文件夹以及文件夹一下所有的
});

gulp.task("sass",function(){
	gulp.src("*.scss").pipe(gulp.dest("D:/phpStudy/WWW/object1"));
	//gulp.src("img/*.*")
	//gulp.src("img/**/*")文件夹以及文件夹一下所有的
});

gulp.task("php",function(){
	gulp.src("*.php").pipe(gulp.dest("D:/phpStudy/WWW/object1"));
	//gulp.src("img/*.*")
	//gulp.src("img/**/*")文件夹以及文件夹一下所有的
});

gulp.task("font",function(){
	gulp.src("font/*/**.*").pipe(gulp.dest("D:/phpStudy/WWW/object1/font"));
	//gulp.src("img/*.*")
	//gulp.src("img/**/*")文件夹以及文件夹一下所有的
});


//gulp.task("alltask",["copy-index","img","copy-js"],function(){
//	//把所有命令一起执行
//});
//
////除了其中某个文件其他都提交
//gulp.task("data",function(){
//	gulp.src(["**/*","!node_modules"]).pipe(gulp.dest("D:/phpStudy/WWW/object2"));
//	
//});
//
////自动检测
gulp.task("watchAll",function(){
	gulp.watch("*.html",["copy-index"]);
	gulp.watch("img/*",["copy-img"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("font/*",["font"])
	gulp.watch("*.php",["php"]);
	gulp.watch("css/*.css",["css"]);
});
//
////sass编译的任务
//gulp.task("sass",function(){
//	gulp.src("sass/*.scss").pipe(sass()).pipe(gulp.dest("src/css"));
//	
//});
//
////
//
////合并js文件
//gulp.task("concatJS",function(){
//	gulp.src("js/*.js").pipe(concat("common.js")).pipe(gulp.dest("src/js"));
//});
//
////合并后直接压缩
//gulp.task("concatAndUglify",function(){
//	gulp.src("js/*.js").pipe(concat("common.min.js")).pipe(uglify()).pipe(gulp.dest("src/js"));
//	
//});
//
////合并后直接压缩并命名
//gulp.task("concatAndUglifyAndRename",function(){
//	gulp.src("js/*.js").pipe(concat("common.js")).pipe(uglify()).pipe(rename("common.min.js")).pipe(gulp.dest("src/js"));
//	
//});
//
////启动服务器
//
//gulp.task("server",function(){
//	connect.server({
//		root:"src",
//		livereload:true//实时更新
//	});	
//});
//
//gulp.task("copy-index",function(){
//	gulp.src("index.html").pipe(gulp.dest("src")).pipe(connect.reload());
//});
////压缩CSS
//gulp.task("sassUg",function(){
//	gulp.src("*.scss").pipe(sass()).pipe(minfyCSS()).pipe(rename("main.min.css")).pipe(gulp.dest("src/css"));
//	
//});
//
//gulp.task("images",function(){
//	
//	gulp.src("img/**/*").pipe(imagemin()).pipe(gulp.dest(src/images));
//});

