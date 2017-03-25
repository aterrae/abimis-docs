import gulp from 'gulp';
import { HTML, HUMANS, ROBOTS } from '../settings';
import genHumans from 'gulp-humans';
import genRobots from 'gulp-robots';

// This HUMANS function:
// Generates humans.txt according to the options setted inside the settings.json
export function humans(done) {
    return gulp.src(HTML.pages)
        .pipe(genHumans({
            team: HUMANS.team,
            thanks: HUMANS.thanks,
            site: HUMANS.site,
            note: HUMANS.note
        }))
        .pipe(gulp.dest(HTML.destPath));
}

// This ROBOTS function:
// Generates robots.txt according to the options setted inside the settings.json
export function robots(done) {
    return gulp.src(HTML.pages)
        .pipe(genRobots({
            useragent: ROBOTS.useragent,
            allow: ROBOTS.allow,
            disallow: ROBOTS.disallow
        }))
        .pipe(gulp.dest(HTML.destPath));
}
