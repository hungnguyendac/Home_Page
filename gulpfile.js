const gulp = require("gulp");
const fileInclude = require("gulp-file-include");

gulp.task("html", function () {
  return gulp
    .src(["src/views/*.html"])
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "src/views",
      })
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function () {
  gulp.watch("src/views/include/*.html", gulp.series("html"));
});

gulp.task("default", gulp.series("html", "watch"));